---
title: "Quarkus: Simplifying Cloud File Uploads"
description: "Learn how to create a REST service to upload image to the Cloud."
tags: [quarkus, panache, rest, google, aws, azure, cloud, s3, learning quarkus]
keywords: [quarkus, panache, rest, google, aws, azure, cloud, s3]
image: /images/posts/2023-12-24-quarkus-uploading-image-to-the-cloud/header.png
date: 2023-12-24T12:00:00+02:00
---

![Quarkus: Simplifying Cloud File Uploads](/images/posts/2023-12-24-quarkus-uploading-image-to-the-cloud/header.png)


In many projects, facilitating user uploads to cloud services is a common requirement. In my current project, I find myself inviting users to seamlessly upload various files, such as profile pictures, GPS track files, or session photos, to the WindR.org site. To enhance my understanding, I've opted to employ multiple cloud providers —[Microsoft Azure Blob Storage](https://azure.microsoft.com/en-us/products/storage/blobs), [Amazon S3](https://aws.amazon.com/pm/serv-s3/), [Google Cloud Storage](https://cloud.google.com/storage)— allowing me to test and compare their functionalities.

This article guides you through the process of:

1. Creating a REST service for file uploads using RESTEasy Reactive in Quarkus.
2. Uploading files to the cloud from a Quarkus application.

To complement this discussion, a complete code example is available on GitHub. This resource serves as a practical reference for learning and experimentation.

[GitHub Repository: Quarkus: Uploading Image to the Cloud](https://github.com/tgrall/learning-quarkus/tree/main/upload-image)


<!-- truncate -->

## The REST Service

For this example, let's create a service focused on uploading windsurfing board pictures. The corresponding endpoint URL will be `/api/v1/boards/picture`.

The REST endpoint will accept a `multipart/form-data` request, returning the URL of the uploaded file. The request comprises two parts:

Board metadata (JSON): Includes id, brand, year, and slug (used as the filename).
Board picture (binary)


#### The Board Metadata class

The board metadata is a simple class with the following attributes:

```java
    public static class BoardMetadata {
        long id;
        String brand;
        int year;
        String slug;
    }
```

#### The POST Endpoint


The `upload()` method, annotated with `@POST` and` @Path("/picture")`, defines the HTTP method and URL. It is also annotated with `@Consumes(MediaType.MULTIPART_FORM_DATA)` to specify the content type of the request.


```java
@POST
@Path("/picture")
@Consumes(MediaType.MULTIPART_FORM_DATA)
@Produces(MediaType.APPLICATION_JSON)
public Response upload(
        @RestForm @PartType(MediaType.APPLICATION_JSON) BoardMetadata board,
        @RestForm("picture") FileUpload picture
) {
    String json = MessageFormat.format("'{'\"slug\":\"{0}\",\"name\":\"{1}\",\"size\":{2,number,#}'}'",
            board.slug, picture.fileName(), picture.size());
    return Response.ok(json).status(CREATED).build();
}
```

The `upload()` method takes two parameters:

- `board`: Board metadata, a JSON object extracted from the request body.
- `picture`: Board picture, a binary object extracted from the request body.

The `@RestForm` annotation is used to define the parameter as a [Form Parameter](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/POST).

>**Tip**: do not forget to a JSON provider to your project, in my case I am using Jackson, with the following extension:
>```
>./mvnw quarkus:add-extension -Dextensions='quarkus-resteasy-reactive-jackson'
>```


## Uploading to Cloud Storage

Quarkus simplifies integration with various cloud providers. For this example, we'll use the following extensions:

- [Azure Storage](https://quarkus.io/extensions/io.quarkiverse.azureservices/quarkus-azure-storage-blob/)
- [Google Cloud Storage](https://quarkus.io/extensions/io.quarkiverse.googlecloudservices/quarkus-google-cloud-storage/)
- [Amazon S3](https://quarkus.io/extensions/io.quarkiverse.amazonservices/quarkus-amazon-s3/)

The cloud provider is selected through a new parameter in the endpoint path: `/picture/{cloud : (azure|aws|gcp)?}`.

```java
@POST
@Path("/picture/{cloud : (azure|aws|gcp)?}")
@Consumes(MediaType.MULTIPART_FORM_DATA)
@Produces(MediaType.APPLICATION_JSON)
public Response upload(@RestForm @PartType(MediaType.APPLICATION_JSON) BoardMetadata board,
        @RestForm("picture") FileUpload picture, @PathParam("cloud") String cloud) {
...
}
```

For each cloud provider, a specific method is created (e.g., `uploadToAzure()`, `uploadToAWS()`, `uploadToGCP()`), abstracting the details of configuration. 

Each of these methods will use:
- the bucket define in the `application.properties` file
- upload the image using the SDK, configuring the content type and public access
- return the URL of the uploaded file.

In the project you can find [Terraform scripts](https://github.com/tgrall/learning-quarkus/tree/upload-file/upload-image/terraform) to create the buckets in each cloud provider.

### Azure Storage Implementation


```java
...
@Inject
com.azure.storage.blob.BlobServiceClient azureBlobServiceClient;
...

private String uploadToAzure(FileUpload picture, BoardMetadata board) {
    String container = "catalog";
    String blobName = getBlobName(picture.fileName(), board);
    try {
        Map<String, String> metadata = Collections.singletonMap("metadata", "value");
        BlobContainerCreateOptions options = new BlobContainerCreateOptions()
            .setMetadata(metadata)
            .setPublicAccessType(PublicAccessType.BLOB);
        BlobContainerClient blobContainerClient = azureBlobServiceClient
                .createBlobContainerIfNotExistsWithResponse(container, options, Context.NONE).getValue();
        BlobHttpHeaders headers = new BlobHttpHeaders();
        headers.setContentType(picture.contentType());
        BlobClient blobClient = blobContainerClient.getBlobClient(blobName);
        blobClient.uploadFromFile(picture.uploadedFile().toAbsolutePath().toString(), true);
        blobClient.setHttpHeaders(headers);
        return blobClient.getBlobUrl();
    } catch (BlobStorageException e) {
        Log.error("An error occurred while uploading the file to Google Blob Storage: " + e.getMessage());
        throw new RuntimeException("An error occurred while uploading the file to Azure Blob Storage: "
                + e.getErrorCode() + " - " + e.getStatusCode());
    }
}
```

The `BlobServiceClient` is injected using `@Inject`. The method uses this client to create a new container if needed and then uploads the file. In case of an error, a `RuntimeException` is thrown, and the REST endpoint handles the HTTP status code from the Azure SDK.

> Note: if you do not put any connection information in the `application.properties` file, the application will connect to the Azure Storage Data Service, running on your local machine. This is very useful for development and testing.

### Google Cloud Storage Implementation

```java
@Inject
com.google.cloud.storage.Storage googleStorage; 
...

private String uploadToGCP(FileUpload picture, BoardMetadata board) {
    String extension = getExtensionByStringHandling(picture.fileName()).orElse("jpg");
    String blobName = "catalog/"+ board.brand + "/" + board.year + "/" + board.slug + "." + extension;

    try {
        BlobInfo blobInfo = BlobInfo
            .newBuilder(BUCKET_NAME, blobName)
            .setContentType(picture.contentType())
            .setAcl(Collections.singletonList(Acl.of(Acl.User.ofAllUsers(), Acl.Role.READER)))
            .build();
        Blob blob = googleStorage.createFrom(blobInfo, picture.uploadedFile().toAbsolutePath());
        String url = "https://storage.googleapis.com/" + BUCKET_NAME + "/" + blobInfo.getBlobId().getName();
        return url;
    } catch (IOException e) {
        throw new RuntimeException(e);
    }
}
```

Google Cloud Storage integration is similar. A `Storage` object is injected, and the file is uploaded after creating a `BlobInfo` object with the necessary metadata.

> Note: Google storage does not have a data service running locally, so you need to have a valid GCP project to run the application.

### Amazon S3 Implementation

```java
@Inject
software.amazon.awssdk.services.s3.S3Client s3Client;
...
private String uploadToAWS(FileUpload picture, BoardMetadata board) {
    Log.info("Uploading to AWS: " + board.slug +" - in bucket " + BUCKET_NAME);
    String blobName = "catalog/"+ getBlobName(picture.fileName(), board);

    try {
        PutObjectRequest putRequest = PutObjectRequest.builder()
            .bucket(BUCKET_NAME)
            .key(blobName)
            .contentType(picture.contentType())
            .acl(ObjectCannedACL.PUBLIC_READ)
            .build();
        PutObjectResponse putResponse =  s3Client.putObject(
            putRequest,
            picture.uploadedFile().toAbsolutePath());
        return s3Client.utilities().getUrl(builder -> builder.bucket(BUCKET_NAME).key(blobName)).toString();
    } catch (S3Exception e) {
        Log.error("An error occurred while uploading the file to AWS Blob Storage: " + e.getMessage());
        throw new RuntimeException("An error occurred while uploading the file to AWS Blob Storage: "
                + e.getMessage());
    }
}
```

The Amazon S3 integration is similar to the Azure Storage integration. The `S3Client` is injected, and the file is uploaded after creating a `PutObjectRequest` object with the necessary metadata.

The Quarkus S3 extension is using the AWS SDK for Java V2, and the `url-connection-client` is needed to make it work. You need to add the following dependency in the `pom.xml` file:

```xml
    <dependency>
        <groupId>software.amazon.awssdk</groupId>
        <artifactId>url-connection-client</artifactId>
    </dependency>
```

> Note: The Quarkus S3 extension uses the local data service based on the `localstack/localstack` container image, and you have to configure the `application.properties` with the name of the bucket, for example:
> ```properties
> bucket.name=quarkuscloudstorage
> quarkus.s3.devservices.buckets=${bucket.name}
> ```
>
>If you want to disable the use of the local data service, you can use the following configuration:
>
>```properties
>quarkus.s3.devservices.enabled=false
>```



## Testing the application

### Using the Web UI

Once the Quarkus application is running, navigate to [http://localhost:8080](http://localhost:8080) in your browser. Enter values, select a cloud storage service, and upload a picture.

### Using `curl`

You can use `curl` commands to upload a picture to different cloud storage providers. Here are examples for AWS S3, Azure Blob Storage, and Google Cloud Storage.

**AWS S3**

```bash
curl -i -X POST http://localhost:8080/api/v1/boards/picture/aws \
  -H 'Content-Type: multipart/form-data' \
  -F 'picture=@./src/test/resources/test-board.png' \
  -F 'board={"id":5 , "year":2024, "brand":"jp-australia", "slug":"jp-australia-2024-ultimate-wave"}'
```

**Azure Blob Storage**

```bash
curl -i -X POST http://localhost:8080/api/v1/boards/picture/azure \
  -H 'Content-Type: multipart/form-data' \
  -F 'picture=@./src/test/resources/test-board.png' \
  -F 'board={"id":5 , "year":2024, "brand":"jp-australia", "slug":"jp-australia-2024-ultimate-wave"}'
```

**Google Cloud Storage**

```bash
curl -i -X POST http://localhost:8080/api/v1/boards/picture/gcp \
  -H 'Content-Type: multipart/form-data' \
  -F 'picture=@./src/test/resources/test-board.png' \
  -F 'board={"id":5 , "year":2024, "brand":"jp-australia", "slug":"jp-australia-2024-ultimate-wave"}'
```

## Conclusion

In this post, we explored the seamless integration of Quarkus Cloud Storage extensions for uploading files to Azure, Google, and AWS. The code remains consistent across the three providers, with differences limited to configuration nuances. Although deployment specifics are not covered here, configuring credentials for cloud provider access is necessary during deployment.

Feel free to check out [the complete code on GitHub](https://github.com/tgrall/learning-quarkus/tree/main/upload-image), experiment with the examples, and stay tuned for more Quarkus insights in future posts!
