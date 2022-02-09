---
title: "Use Private Actions with your Team"
tags: [github, actions, automation, javascript]
---

A long-awaited feature is now available on GitHub: share **actions** in your workflows in your enterprise from Internal Repositories 🤖 !

When a developer does not find a suitable GitHub Action in the [Marketplace](http://github.com/marketplace), they can create their own, something that I have documented in the "[How to Write Custom GitHub Action](/blog/2021/10/30/how-to-write-a-github-action)" post.

Until today, Actions had to be stored in a public repository, to allow other repositories to use them in workflows *(or take a complex approach)*. This has changed 🎉.

Now you can put your actions in an [internal](https://docs.github.com/en/enterprise-cloud@latest/repositories/creating-and-managing-repositories/about-repositories#about-internal-repositories) repository; repositories visible to your whole enterprise.

Once your repository visibility is set to "Internal", in the **Settings** pages, click in the **Actions** section and select the proper **Access** configuration:

![GitHub Actions Access](/images/posts/share-private-actions-enterprise/01-action-access.png)

The following video shows this feature in action:


<iframe width="560" height="315" src="https://www.youtube.com/embed/IC58NsaiOuI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>