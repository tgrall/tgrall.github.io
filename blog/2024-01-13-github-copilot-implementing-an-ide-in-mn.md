---
title: "Rapid Prototyping with GitHub Copilot: A Quick Journey into Image Processing"
description: "GitHub Copilot expedites the creation of an image processing prototype for WindR.org's transition to Next.js, seamlessly converting a described script into functional code within minutes, showcasing its transformative potential for rapid prototyping."
tags: [coding with copilot, github, copilot, python, images]
keywords: [coding with copilot, github, copilot, python, images]
image: /images/posts/2024-01-13/header.png
date: "2024-01-13T06:12"
---

As I transition WindR.org to Next.js, the necessity arises to clean up the product catalog's images, which come in various sizes and formats; hence, I opted to write a small Python script using Pillow for resizing and standardizing the images. Despite not being a Python developer, I'm equipped with basic knowledge, making it easy to read and utilize the language's numerous libraries.

Using Visual Studio Code, I initiated a new script to fulfill the image cleanup requirements, specifying the objective: 
- _download an image from a given URL, save it locally as 'original.png,' resize it into a square with a transparent background, and save copies at 1000x1000 pixels and 256x256 pixels in greyscale_.

The Copilot then effortlessly executed the specified tasks, as demonstrated in the accompanying video:

Watch the video [here](https://www.youtube.com/embed/doFGEFdfp24?si=gX7J35CALGfSNJTi)


<iframe width="560" height="315" src="https://www.youtube.com/embed/doFGEFdfp24?si=gX7J35CALGfSNJTi" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

While this script serves as a fundamental prototype, the next step involves incorporating this logic into a complete application. GitHub Copilot's assistance not only jumpstarted the development process but also facilitated the creation of a functional prototype within minutes.