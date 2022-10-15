---
title: "Setting up Spark Dynamic Allocation on MapR"

categories: spark yarn mapr
---

Apache Spark can use various cluster manager to execute application (Stand Alone, YARN, Apache Mesos). When you install Apache Spark on MapR you can submit application in a Stand Alone mode or using YARN.

This article focuses on YARN and Dynamic Allocation, a feature that lets Spark add or remove executors dynamically based on the workload. You can find more information about this feature in this presentation from Databricks:

* [Dynamic Allocation in Spark](http://www.slideshare.net/databricks/dynamic-allocation-in-spark)

Let’s see how to configure Spark and YARN to use dynamic allocation (that is disabled by default).

<!-- truncate -->

#### Prerequisites

* MapR Converged Data Platform Cluster
* Apache Spark for MapR installed

This example has been described for MapR 5.2 with Apache Spark 1.6.1, you just need to adapt the version to your environment.

### Enabling Dynamic Allocation in Apache Spark

The first thing to do is to enable Dynamic Allocation in Spark, for this you need to edit the spark configuration file on each Spark node.

```
/opt/mapr/spark/spark-1.6.1/conf/spark-defaults.conf
```

and add the following entries:

```
spark.dynamicAllocation.enabled = true
spark.shuffle.service.enabled = true
spark.dynamicAllocation.minExecutors = 5 
spark.executor.instances = 0
```

You can find additional configuration options in the [Apache Spark Documentation](http://spark.apache.org/docs/1.6.1/configuration.html#dynamic-allocation).


### Enabling Spark External Shuffle for YARN

You have now to edit YARN configuration to add information about Spark Shuffle Service, edit the following file, on each YARN node:

```
/opt/mapr/hadoop/hadoop-2.7.0/etc/hadoop/yarn-site.xml
```

add these properties: 

```
  <property>
    <name>yarn.nodemanager.aux-services</name>
    <value>mapreduce_shuffle,mapr_direct_shuffle,spark_shuffle</value>
  </property>
  <property>
    <name>yarn.nodemanager.aux-services.spark_shuffle.class</name>
    <value>org.apache.spark.network.yarn.YarnShuffleService</value>
  </property>
```

#### Add Spark Shuffle to YARN classpath

Spark Shuffle service must be added to the YARN classpath. The jar is located in the spark distribution:

```
/opt/mapr/spark/spark-1.6.1/lib/spark-1.6.1-mapr-1605-yarn-shuffle.jar
```

To achieve this add the jar in the following folder on each node:

```
/opt/mapr/hadoop/hadoop-2.7.0/share/hadoop/yarn/lib
```

You can either copyy the file or create a symlink:

```
$ ln -s /opt/mapr/spark/spark-1.6.1/lib/spark-1.6.1-mapr-1605-yarn-shuffle.jar /opt/mapr/hadoop/hadoop-2.7.0/share/hadoop/yarn/lib
```

#### Restart YARN

Since you have changed the YARN configuration *you must restart your node managers* using the following command:

```
$ maprcli node services -name nodemanager -action restart -nodes [list of nodes]
```

### Submitting a Spark Job

Your MapR Cluster is not ready to use Spark dynamic allocation, this means that when you submit a job you do not need to specify any resource configuration, for example:

```
/opt/mapr/spark/spark-1.6.1/bin/spark-submit \
  --class com.mapr.demo.WordCountSorted \
  --master yarn \
  ~/spark-examples-1.0-SNAPSHOT.jar \
  /mapr/my.cluster.com/input/4gb_txt_file.txt \
  /mapr/my.cluster.com/user/mapr/output/
```

note that you can still specify the resources, but in this case the dynamic allocation will not be used for this specific job, for example:

```
/opt/mapr/spark/spark-1.6.1/bin/spark-submit \
  --class com.mapr.demo.WordCountSorted \
  --master yarn \
  --num-executors 3
  --executor-memory 1G \
  ~/spark-examples-1.0-SNAPSHOT.jar \
  /mapr/my.cluster.com/input/4gb_txt_file.txt \
  /mapr/my.cluster.com/user/mapr/output/
```
 


