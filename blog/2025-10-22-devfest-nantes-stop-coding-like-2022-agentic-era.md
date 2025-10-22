---
title: "DevFest Nantes 2025: Stop Coding Like It's 2022—The Agentic Era is Here"
description: "Stop using AI tools like it's 2022! My thoughts from DevFest Nantes 2025 on context engineering, security, and why we need a new way to code with AI."
tags: [copilot, ai, devfest, devsecops, context-engineering, spec-driven-development]
keywords:  [GitHub Copilot, AI for Developers, Generative AI, AI-Assisted Coding, DevSecOps, Context Engineering, Spec-Driven Development, Code Security, Developer Productivity, GitHub, DevFest Nantes 2025, AI Adoption, LLMs, On-Prem AI]
image: /images/posts/2025-10-22/header.png
date: "2025-10-22T08:02"
---

I was at **DevFest Nantes 2025**, another great edition! Thank you to all the **organizers, volunteers, sponsors, speakers and attendees** for making it happen.

I had many great discussions about **GitHub**, **DevSecOps**, and especially **GitHub Copilot** and **AI for developers** in general.

## AI for Developers Is Becoming Mainstream

Many people are now using GitHub Copilot or its competitors. This is great to see — it means **AI-assisted coding** is now becoming **mainstream**.

If you are not using AI tools yet, I strongly encourage you to give them a try. They can really help you be more productive, write better code -yes!-, learn faster, and like for mebe happy to code more _"stuff"_.

Nevertheless, I also noticed a lot of **confusion** and **misconceptions** about what AI can (and cannot) really do for developers.

## Stop Using GenAI for Development Like It’s 2022!

We’re in **2025**, and **Copilot is more than 4 years old** now!  
If you are still using it the same way you did **2 or 3 years ago**, you’re missing out!

I often say:  
> “If you’re using Copilot the same way you were 3–4 months ago, you’re already behind.”

Too many developers still use Copilot only as:
- a **smart autocomplete**, or  
- an **embedded ChatGPT** inside their IDE.

That’s fine for small tasks, but today, with **context engineering & spec-driven development**, you can do much more.

<!-- truncate -->

## Think More, Code Less: Prepare Your Context and Specs

When working in your IDE, completions and chat are great.  
But you can achieve much better results if you **prepare your context** first.

The goal is to remove all doubts and make your request crystal clear — so the AI really understands your needs.

Before asking Copilot (or any AI tool) for help:
1. **Clearly define the problem** you want to solve.  
2. **Gather all relevant information and resources**.  

With the right context, Copilot becomes much more powerful.

Here some resources to help you get started with **Context Engineering** and **Spec-Driven Development**:

- [Manage context for AI](https://code.visualstudio.com/docs/copilot/chat/copilot-chat-context) _(VSCode Docs)_
- [Customize chat to your workflow](https://code.visualstudio.com/docs/copilot/customization/overview) _(VSCode Docs)_
- [Adding repository custom instructions for GitHub Copilot](https://docs.github.com/en/copilot/how-tos/configure-custom-instructions/add-repository-instructions) _(GitHub Copilot Documentation : all IDEs & more)_
- [Awesome Copilot](https://github.com/github/awesome-copilot/blob/main/README.md) _Community-driven resource with custom instructions, reusable prompts, and custom chat modes_
- [Spec-Driven Development with GitHub Copilot](https://github.blog/2024-03-26-spec-driven-development-with-github-copilot/) _(GitHub Blog)_
- [How to build reliable AI workflows with agentic primitives and context engineering](https://github.blog/ai-and-ml/github-copilot/how-to-build-reliable-ai-workflows-with-agentic-primitives-and-context-engineering/) _(GitHub Blog)_



## What About Code Security?

Some developers told me they heard that “AI generates insecure code.”  
Yes, we need to be careful — but this is true for *any* code, even code written by humans.

Let’s look at this more clearly:

- AI-generated code has **improved a lot** over the past few years. In many cases, it’s now *more secure* than human-written code, since AI will apply basic security practices, catched the most common vulnerabilities, and avoid typical mistakes.
- Instead of saying “don’t trust AI,” we should discuss how to **improve the security** of AI-generated code.
- Security is about **processes and practices**, not just the tool you use. Whether you use AI or not, you need to have a solid security strategy in place.

Here are some simple steps:

1. **Have a proper security process** (SAST scans, reviews, unit tests).  
2. **Use the latest models**, as they keep improving.  
3. **Give good context** — include your security rules and best practices.  
4. **Always review and test** AI-generated code, or any code for that matter.
5. **Use linters and security tools** to catch vulnerabilities.
6. **Rely on platforms with built-in security features.**

For example, check out the  [**security instructions for Copilot**](https://github.com/github/awesome-copilot/blob/main/instructions/security-and-owasp.instructions.md).

When using **GitHub Copilot Coding Agent**, it automatically runs **linters** and **CodeQL scans** (GitHub’s SAST tool) to fix issues it detects.

![GitHub Copilot Security Integration](/images/posts/2025-10-22/dev-fest-2025-001.png)  
*GitHub Copilot Coding Agent running linter and CodeQL to scan generated code*

If you use **GitHub Advanced Security**, [Copilot Autofix](https://docs.github.com/en/code-security/code-scanning/managing-code-scanning-alerts/responsible-use-autofix-code-scanning#about-copilot-autofix-for-code-scanning)
 can also help you **fix security issues** found in your codebase. 

![GitHub Copilot Security Integration](/images/posts/2025-10-22/dev-fest-2025-002.png)  
*GitHub Copilot suggestions to fix security issues found by CodeQL*


## On-Prem/Custom AI Tools for Developers… Really?

Some organizations are still trying to build **on-prem or custom AI tools for developers**.  Since the arrival of GitHub Copilot in 2021, I have been skeptical about this approach.

Honestly, in 2025, that’s a **waste of time and money**.

GitHub Copilot, and its competitors, have improved so much — they are faster, more secure, and easier to use.  I’ve even met developers who secretly use public AI tools behind the scenes because their company tools are too limited… Once again we are not talking about code completion and basic chat anymore, we are entering the agentic era.

Providing developers with inferior alternatives not only creates frustration, but also gives them a misleading impression of what AI for developers can actually accomplish — potentially leaving them unprepared for the future of software development.


### The Innovation Gap Is Widening

One major issue with on-prem solutions is that **GitHub Copilot is evolving rapidly**. New features are being released constantly:

- **Multi-model support** ([supported models](https://docs.github.com/en/enterprise-cloud@latest/copilot/reference/ai-models/supported-models)) with regular additions (like Claude Haiku 4.5 on October 20, 2025)
- **New IDEs capabilities** look at the monthly [VSCode updates](https://code.visualstudio.com/updates/) for example, how can you keep up? 
- **MCP (Model Context Protocol)** support for extended integrations, Server implementation, Registry, Governance ...
- **MCP Governance and Registry** for managing context sources
- **Code Review directly in the IDE** for seamless workflows
- **Advanced customization** through custom prompts, instructions, workspace modes, and `agents.md` files

And all these in a unified experience across all environments: IDEs, [Copilot CLI](https://docs.github.com/en/copilot/concepts/agents/about-copilot-cli), GitHub Mobile app, GitHub.com ([Coding Agent](https://docs.github.com/en/enterprise-cloud@latest/copilot/concepts/agents/coding-agent/about-coding-agent), [Code Review](https://docs.github.com/en/enterprise-cloud@latest/copilot/concepts/agents/code-review), [Chat](https://docs.github.com/en/enterprise-cloud@latest/copilot/how-tos/chat-with-copilot/chat-in-github)), [Spaces](https://docs.github.com/en/copilot/how-tos/provide-context/use-copilot-spaces) ), ...

By the time an internal team builds a feature, cloud solutions have already moved three steps ahead.


### It's About Code, Not Your Business Data

Let's be clear: we're talking about **code**, not your sensitive business data or proprietary algorithms. And here's the uncomfortable truth — what most teams think is "unique proprietary code" is actually standard implementation patterns. Your real uniqueness isn't in *how* you validate data or call/expose an API — it's in **how all your applications and services work together** to deliver your specific business value.

Most application code — UI components, navigation flows, API integrations, data validation, configuration — follows industry-standard practices. It's essential, but not your competitive differentiator. Your real edge comes from **shipping features faster**, iterating on user feedback, and responding to market changes more quickly than competitors.

For truly sensitive code (unique algorithms, proprietary business logic), you exclude AI from specific repositories, apply different policies per team, and protect what genuinely needs protection without slowing down your entire organization.

The real question isn't "Is our code too valuable to expose?" *(spoiler: GitHub Copilot doesn't store your code or train models on it anyway — but some decision-makers still worry as if it does)* — it's "**_What's the cost of slowing down 95% of our developers to protect 5% of sensitive projects?_**"

We all like to believe our implementation is unique — our form validation, navigation patterns, API wrappers — but these are common building blocks every application needs. Your competitive advantage isn't protecting standard patterns. It's delivering features faster so you can run more experiments, gather user feedback, and iterate while competitors are still building their first version.

GitHub Copilot excels at exactly this: accelerating the entire development lifecycle — from writing code and tests to reviewing pull requests and debugging issues — so your team can focus on solving the problems that truly matter to your users.

### Enterprise-Ready from Day One

So please, **decision-makers**, take the time to understand how GitHub Copilot and its competitors actually work — and the strong **security and compliance measures** they already include — before forcing your teams to use weak internal alternatives. Remember, GitHub Copilot does not store your prompts and suggestions coming from your IDEs, and does not train its models with your code. I invite you to look at :
 - [GitHub Copilot Trust Center](https://copilot.github.trust.page/)
 - [Hosting of models for GitHub Copilot Chat](https://docs.github.com/en/copilot/reference/ai-models/model-hosting)


## Learning and Hiring in the Age of AI

Another interesting topic that came up with students and teachers was the **impact of GenAI on learning** — and how it changes **the role of junior developers**.

This is a big discussion:  
How can we use AI to help students learn *better*, not *less*?  
And how can companies adapt their **hiring and onboarding** processes when everyone codes with AI support?

That’s probably a topic for another blog post 😉, so let's start with this GitHub Blog post:
- [Junior developers aren’t obsolete: Here’s how to thrive in the age of AI](https://github.blog/ai-and-ml/generative-ai/junior-developers-arent-obsolete-heres-how-to-thrive-in-the-age-of-ai/)


## Final Thoughts

AI-assisted coding isn't the future — it's now. Organizations that haven't started yet, or are still treating it as an experiment, are already falling behind.


**It's time to adopt AI at scale across your organization.**

Ask yourself: **"How can AI improve MY job?"**

**I love discussing this topic.** If you want to talk about AI for developers, GitHub Copilot, or how to adopt this at scale in your organization, **I'm happy to chat or present.**

Let's make development better and more enjoyable for everyone.