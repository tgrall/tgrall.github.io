---
title: "Modernizing Legacy Code with GitHub Copilot: A Documentation-First Approach"
description: "Learn how to use GitHub Copilot to tackle legacy code modernization through a documentation-first approach. This guide walks you through setting up instruction files, custom chat modes, and reusable prompts to automatically generate comprehensive documentation from your existing codebase—creating the perfect foundation for understanding, maintaining, or rewriting legacy applications in any programming language."
tags: [coding with copilot, github, copilot, documentation, legacy]
keywords:  [coding with copilot, github, copilot, documentation, legacy, progress, openedge]
image: /images/posts/2025-10-21/header.png
date: "2025-10-21T03:12"
---

A common question I hear from developers and development teams is: "Can Copilot help me with my legacy code?" Whether it's understanding it, maintaining it, or rewriting and modernizing the application in a new stack, the answer is absolutely yes—but you need to follow the right process.

You can find a video -in French- walkthrough of this approach here:


<iframe width="560" height="315" src="https://www.youtube.com/embed/DYZNNsB-krc?si=eh_WlvAm1ErjF-KU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


## Don't Rush to Rewrite

The key mistake many make is jumping straight from legacy code (like Progress Software in my example) and asking Copilot to "write me a Java app" or "convert this to TypeScript." Instead, the proper approach is to **start with documentation**. We need to begin by creating reverse documentation from the existing code, which then serves as a solid foundation for rewriting. This ensures all functionality is well-documented and provides the right context for generating new code.

You can see a complete example of this retro-documentation process applied to the [Sports App](https://github.com/tug-on-dev/progress-sports-app/tree/main/documentation). _(Originally in French then translated to English using Copilot)_

## Setting Up Your Context

I'm working with a VS Code project using a Progress Software example application—specifically the Sports app, which includes a complete database and architecture. The first step is establishing context for Copilot.

### 1. Create Instruction Files

Ask GitHub Copilot to create [an instruction file for the agent](https://github.com/tug-on-dev/progress-sports-app/blob/main/.github/copilot-instructions.md). Copilot analyzes the code and workspace to identify:
- Architecture
- Key components  
- Critical development information (build, deploy, cloud deployment)

You can extend this file with your own rules and references. In my case, I added instructions for Copilot to respond in French and use technical terminology.

Take a look to the [instructions](https://github.com/github/awesome-copilot/tree/main/instructions) folder in the [GitHub Awesome Copilot repository](https://github.com/github/awesome-copilot/).

### 2. Configure Chat Modes

Create [custom chat modes](https://github.com/tug-on-dev/progress-sports-app/blob/main/.github/chatmodes/doc-writer.chatmode.md) to control Copilot's behavior. I created a "doc writer" mode—essentially a system prompt that defines how the agent should behave when writing documentation. You can have multiple chat modes for different team members and tasks.

Take a look to the [Chat Modes](https://github.com/github/awesome-copilot/tree/main/chatmodes) folder in the [GitHub Awesome Copilot repository](https://github.com/github/awesome-copilot/).


### 3. Build Reusable Prompts

Instead of typing requests each time, [create a prompt file](https://github.com/tug-on-dev/progress-sports-app/blob/main/.github/prompts/retro-doc.prompt.md). I created a "[Retrodoc](https://github.com/tug-on-dev/progress-sports-app/blob/main/.github/prompts/retro-doc.prompt.md)" prompt that I can reuse across projects. This prompt instructs Copilot to:
- Inspect the entire codebase
- Generate documentation
- Create diagrams with Mermaid for UML and databases
- Extract architecture, functional requirements, and more

Take a look to the [Prompts](https://github.com/github/awesome-copilot/tree/main/prompts) folder in the [GitHub Awesome Copilot repository](https://github.com/github/awesome-copilot/).

**Important**: For large codebases, work iteratively by module or service rather than trying to document everything at once—you won't be able to review hundreds of pages of documentation in one sitting anyway, so it's better to divide the work into manageable steps.

## The Documentation Process

With these files prepared, I'm ready to work. After initializing a Git repository to track changes, I start a new chat in doc writer mode and trigger my Retrodoc prompt.

GitHub Copilot then:
- Reads through all the files (like any developer would)
- Creates directory structures (documentation, architecture, API, deployment, requirements)
- Generates comprehensive technical documentation

The process takes a few minutes, but you can watch the documentation being created in real-time. The output includes:
- High-level architecture overview (web layer, Nginx server, Progress WebSpeed middleware, replicated OpenEdge database)
- Data flow and user navigation
- Database structure and formats
- Deployment options

## Refining the Output

As documentation is generated, review it and make corrections. For example, when I noticed display issues with Mermaid diagrams, I selected the code and asked Copilot to fix it. There's always a need for human oversight—both functional and technical.

**Tip**: If you see recurring issues, add instructions to your prompt or instruction file to prevent them in future runs.


## Summary: The Three-Step Approach

1. **Instruction File**: Create context about your application to guide Copilot
2. **Chat Mode**: Define agent behavior for specific tasks (like documentation writing)
3. **Prompt File**: Build reusable, precise prompts for consistent results

This approach works with any programming language or framework—whether cutting-edge or legacy systems like OpenEdge and Progress Software. The documentation you generate becomes your roadmap for understanding, maintaining, and eventually modernizing your legacy applications.

I encourage you to try this approach with your own applications. Take the time upfront to configure your project properly, and you'll see significantly better results from GitHub Copilot.