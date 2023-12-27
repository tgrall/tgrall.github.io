---
title: "Seamless React State Updates: Mastering Lists with GitHub Copilot"
description: "See how Copilot has helped me to extract a value from a list of objects and update the state of a React component."
tags: [github, copilot, javascript, typescript, next, react, coding with copilot]
keywords: [github, copilot, javascript, typescript]
image: /images/posts/2023-12-27/header.png
date: "2023-12-27T10:12"
---


In my Next.js project, I encountered a challenge while working on a form that involved managing a list of values. Being a beginner, I found myself unsure about the logic required to extract the selected value from the list and update the state of the component.

Fortunately, as I delved into coding, GitHub Copilot came to my aid with a suggested code snippet:

```javascript
if (field === "brand.id") {
    let brand = brands.find(brand => brand.id === value);
    setBoard({
        ...board,
        brand: brand
    });
    return;
}
```

Experience the efficiency and precision of Copilot in action by watching the video demonstration below:

<iframe width="560" height="315" src="https://www.youtube.com/embed/mctuEXSbQsg?si=hv953HevedK3aQWY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

Yet again, GitHub Copilot proves to be the hero of my coding journey – making my day, one efficient line of code at a time!


