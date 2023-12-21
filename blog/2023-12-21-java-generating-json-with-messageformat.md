---
title: "Java: Using MessageFormat to Generate JSON"
description: "How to use MessageFormat to generate JSON"
tags: [java]
keywords: [java]
image: https://tgrall.github.io/images/posts/2023-12-21-java-generating-json-with-messageformat/header.png
date: 2023-12-21T12:34:56Z
---

![Java: Using MessageFormat to Generate JSON](/images/posts/2023-12-21-java-generating-json-with-messageformat/header.png)

As developers, we often encounter situations where we need to generate a JSON string for debugging purposes, especially when dealing with REST services. While frameworks like Spring Boot or Quarkus typically handle this task seamlessly, there are instances where manual intervention is required.

In a recent scenario, I found myself faced with this challenge. Traditionally, I had relied on string concatenation for such tasks. However, eager to explore more efficient alternatives, I turned to Java's java.text.MessageFormat to simplify the process.

<!-- truncate -->

### The Problem

One specific hurdle I encountered during this exploration was the need to escape the curly braces (`{` and `}`) within the JSON string. Despite the simplicity of the task, it temporarily stumped me. However, after some experimentation, I discovered a straightforward solution: using single quotes (`'{'`, `'}'`) around the problematic curly braces.

### The Solution

Let's delve into the code that resolved this issue:

```java
import java.text.MessageFormat;

public class Main {

    public static void main(String[] args) {
        String json = MessageFormat.format("'{'\"name\":\"{0}\",\"age\":{1}'}'", "Thomas", 50);
        System.out.println(json);
    }
}
```

The Result:

Executing this code yields the desired JSON output:

```json
{"name":"Thomas","age":50}
```

## Conclusion

In the quest for an optimal solution to manual JSON string generation, experimenting with different approaches can lead to valuable insights. In this case, leveraging Java's MessageFormat provided a cleaner and more readable alternative to string concatenation. By sharing this experience, I hope to assist fellow developers facing similar challenges and encourage the exploration of diverse tools within the Java ecosystem.