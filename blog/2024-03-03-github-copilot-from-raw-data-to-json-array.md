---
title: "Effortlessly Generate JSON Arrays from Raw Data with GitHub Copilot"
description: "Discover how GitHub Copilot simplifies the creation of JSON arrays from raw data, streamlining the process of updating product catalogs"
tags: [coding with copilot, github, copilot, json, data]
keywords:  [coding with copilot, github, copilot, json, data]
image: /images/posts/2024-03-03/header.png
date: "2024-03-03T06:12"
---

When developing my WindR application, I frequently encounter the task of adding new entries to the product catalog, a process that hasn't yet been automated. Consequently, I find myself creating JSON documents for the MongoDB database.

Products such as boards, sails, fins, and foils possess diverse specifications that vary depending on their type. Extracting these values from official product websites can be laborious, particularly when field names differ across brands, as illustrated by the example of two sails from different manufacturers:

![Patrik](/images/posts/2024-03-03/patrik.png)

![Duotone](/images/posts/2024-03-03/duotone.png)

In the accompanying video, I demonstrate how I leverage Copilot Chat to extract data from copied website content. By providing a simple prompt outlining the array-to-JSON attribute mapping, I swiftly convert the data:


<iframe width="560" height="315" src="https://www.youtube.com/embed/WrfpGJz-2B4?si=vuMaeAGf-DuSCA7g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>


This approach streamlines the addition of new products to my catalog. Looking ahead, I aim to automate this process using a combination of a small script and GenAI programming. However, that's a tale for another time.

