---
title: "GitHub Copilot: How I use it, and Why I love it"
description: How do I use GitHub Copilot during my development, why I love it!.
tags: [Github, development, Copilot, AI, IDE]
keywords: [Github, development, Copilot, AI, IDE]
---

![GitHub Copilot: How I use it, and Why I love it](/images/posts/2023-02-04-a-year-with-copilot/header.jpeg)

Since its launch, GitHub Copilot has been a hot topic in the developer community. Some people love it, some people hate it, and some people are just curious about it.  I am part of the first group, and I have been using it for more than a year now. I will not go into the details of how Copilot works, but I will share with you my experience with it, and how it has changed my life as a developer.

Copilot will help developers differently depending on the way they work and the phase of the project they are in. I will try to cover as many use cases as possible, but I will not be able to cover all of them. Here are the main uses cases I have for Copilot

- Write code faster
- Create new features much faster
- Learn new things in context

<!--truncate-->

So let me start by explaining what I do as a developer.

As you probably know, I am a Solutions Engineer at GitHub, so I am doing different things:
- explaining and showing how GitHub works during customers meetings or developer events
- building demonstrations and tutorials around GitHub

On a more personal level, I am also a developer, and I am working on a Web site for Windsurfers, Kitesurfers and Wingfoilers: [**https://windr.org**](https://windr.org). This project has two main goals:
- continue to develop my skills as a developer, and test new things
- build a "real" online service to let riders log session and compete in Virtual GPS Competitions.

To make it short, WindR mixes many technologies: JavaScript, TypeScript, Java, Python, Vue, React / ReactNative, Node, Spring, MongoDB, Redis, and Containers/Docker all these are managed in GitHub repositories and deployed on various Cloud Services from [Azure](https://azure.microsoft.com/) ([Container Apps](https://azure.microsoft.com/en-us/products/container-apps), [Azure Functions](https://azure.microsoft.com/en-us/products/functions/), [Storage](https://azure.microsoft.com/en-us/products/storage/blobs/), Database), GCP ([Storage](https://cloud.google.com/storage), [Cloud Run](https://cloud.google.com/run)) and [Clever Cloud](https://www.clever-cloud.com/) (Web, Database, Storage). _I have not tried AWS yet, but I will soon_.



### Write more tests... faster

As part of the WindR project, I have to write many file parsers (GPX, OAO) to extract data from files and do some calculations: top 5 500m, 10s, max speed and many more. 

Writing tests for these parsers is tedious, and I have to do it for each new parser I write. I have to create a file with the data I want to test, and then I have to write the test, and most of these tasks are repetitive.

The following video shows, how I Copilot is using me in IntelliJ to write a test for my [OAO Parser](https://www.motion-gps.com/motion/documentation/oao-file-format.html):


<iframe width="560" height="315" src="https://www.youtube.com/embed/IRLMLEfcXEI" title="Write test with Copilot" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>


Copilot is using the context of your IDE -- current file, opened tabs, project file--, this is why when I work I keep many files opened in my IDE. In this example I only have 2 files opened:
- the list of values used in the tests
- the tests file

As you can see, the suggestions are made based on the context of the file I am working on. It was very helpful to have the suggestions giving me 20s, 30s, .. then 100m, 250m 500m based on the context and the values located in the different files.

In the video, I show the Test suggestions in Java, I have also used Copilot in Javascript for the main application and the [product catalog](https://windr.org/catalog) and its API, and also some TypeScript for a new service I am creating.

Copilot helped me to have a good test coverage for my parser:

![OAO Parser Test Coverage](/images/posts/2023-02-04-a-year-with-copilot/001-code-coverage.png)


_As a developer, I have no excuse to not write tests anymore!_


### Write code... faster

You can find many demonstrations of Copilot where developers are creating applications from scratch, it is pretty cool and impressive. This is more or less what I am showing in the next section. However, most of the time when you are working on a project, you are not creating a new application from scratch, you are working on an existing project, and you are adding new features, or fixing bugs.

In this case, Copilot is helping me a lot, providing me with suggestions in context and using the coding style of the project. 

The following video shows how I use Copilot to add new UI components in an HTML page:

<iframe width="560" height="315" src="https://www.youtube.com/embed/k0uVz3OmJGw" title="Write code faster" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

Here, I am using Copilot in VS Code, and I am working on a project that uses EJS templates. I have a page that displays the session details, and I need to add new data in different sections of the page. Each section is using the session data differently:
- take the best in the header
- take the top 5 in the detailed view

By adding new comments in the HTML file, Copilot can suggest the code I need to add to the page, and the context of the page is used to use the proper HTML elements, a single value for the header, and a list for the detailed view. And as you may have noticed, the suggested code is using the coding style of the project, so I do not have to change the way I code.

When I am using Copilot this way, I am rarely using the Copilot Window (`ctrl+enter`), I am using the suggestions directly in the editor. So this is why I can say that you do not have to change the way you code when using Copilot, just code as you usually do, and Copilot will help with some portions of the code almost "transparently".

_So you can see now why I am saying that Copilot is helping me to write code faster._


### Create new features... faster

Most of the time when I work with Copilot I am using the suggestion directly in the editor based on the context of the files I am working on, so using some comments, or simply typing some code. Nevertheless, sometimes I want to create a new feature, and I use Copilot to help me with the design of the skeleton of the feature.

For example on my Windsurfing site, users should be able to create an image of the session and share it on social networks ([like this one](https://windr.org/traces/63af1d96b3335105b2b433b6.png)). I opened VS Code, created a new Python file and typed a comment that describes my feature, something like:

```python
# using selenium and chromedriver as headless browser
# go to https://windr.org/traces/63af1d96b3335105b2b433b6/image
# windown size 800x800
# sleep for 3 seconds
# save screenshot as image.png 
```

Then I use the Copilot Window (`ctrl+enter`) to get some suggestions. I have to say that I am not a big fan of the Copilot Window, I prefer to use the suggestions directly in the editor, but I have to admit that it is very helpful when you want to create a new feature. 

The following video shows how I use Copilot to create a new feature:

<iframe width="560" height="315" src="https://www.youtube.com/embed/-JBHy5w94Us" title="Build new features in minutes" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>


_You can see why I am saying that Copilot is helping me to create new features faster_, few comments and I have a first implementation. As you can guess I am not using the code as it is, but it is a very good starting point that will allow me to go faster to the "meat" of the feature, and allow me to deploy it faster, evaluate it, and iterate on it. (I am right now reworking this feature, see below)

### Learn new things... faster

Copilot is quite handy when you want to learn new programming languages and/or new libraries. For example, I have used it to help me to write some Python, Terraform, and TypeScript code.

There, I am using a mix of inline suggestions and the Copilot Window, to discover new things. 

One thing I am learning is [Playwright](https://playwright.dev/), to write end-to-end tests; and I want to use it to create screenshots in the feature I have described above - and move from Python to TypeScript.

### And now... ChatGPT

With the arrival of [ChatGPT](https://chat.openai.com/), I often have questions about how do I compare Copilot and ChatGPT, and I have a short answer:

- _I do not compare Copilot and ChatGPT, I use both of them depending on the context._

As a developer, I spend most of my time writing code inside an IDE (_IntelliJ, VSCode & Codespaces_), and I want to stay focused on my IDE, I do not want to switch to a web browser to use ChatGPT. Based on the uses cases I have described above, I do not "need" an additional tool, Copilot is there and helping me a lot already.

However, I have started to use ChatGPT to help me "design" some features, a little bit like a conversation with a teammate in a meeting room with a whiteboard, for example asking the following questions:

- _Which logic I should use to extract the best 500 meters speed in a GPX file?_
- _What is the best way to save an HTML page as image programmatically using TypeScript?_

ChatGPT can answer the question, suggest some ideas, and I can use it to help me to implement the feature. So far I have not used the code generated by ChatGPT, but I have used the ideas to implement the feature, in my IDEs with the help of Copilot.


### What's next?

**Copilot Labs extension for VS Code**

In this article, I have not talked about the [Copilot Labs extension for VS Code](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot-labs), which has interesting features: code explanation, code translation, IDE Brushes, test generation. I am showing all these features when I am doing a live demo of Copilot, but I have not used them yet in my "daily developer work". 

Mostly because, as I explained earlier, I am using Copilot to help me with the code I am writing and do not want to move to another tab in the IDE while I am coding. That said, I have already a few use cases that I want to try with the Copilot Labs: generating tests, and code translation to help me to move some code from JavaScript to TypeScript.


**GitHub Next**

Copilot Labs, and previously Copilot itself, are part of the "[GitHub Next](https://githubnext.com/)" initative that [investigates the future of software development](https://githubnext.com/). I am inviting you to look at this Web site and see what is coming next for GitHub, and for developers. Some of the features using AI are very interesting, and I am looking forward to seeing them in action for example:
- [GitHub Copilot CLI](https://githubnext.com/projects/copilot-cli/) will help me to use the shell in a more productive way
- [AI for Pull Requests](https://githubnext.com/projects/ai-for-pull-requests/) that will help developers to work on their pull requests (refactoring, reviews, tests, ...)

I will let you discover the others features and do not hesitate to join the various beta & waitlists.


## Conclusion

As described in the various use cases, I wanted to share with you how Copilot is helping me when I am wearing my developer hat. I have heard sometimes people that are saying that Copilot/AI is replacing developers, and I do not agree with this statement. 

Today, Copilot is helping me to write code faster, or to learn new things, or to create new features, but I am still writing the code, and I am still the one that is responsible for what is implemented. 

I won't say that Copilot is making me a better developer, but it helps me to be more productive, and probably that it will help me to be more creative in the future. Copilot is just an additional tool in my toolbox.

**And you what is your experience with Copilot?**