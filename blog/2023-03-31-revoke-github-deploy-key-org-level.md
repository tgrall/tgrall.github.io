---
title: "Revoke Deploy Keys with GitHub CLI"
description: "In this post, I will show you how to use GitHub CLI to invalidate deploy keys at the organization level."
tags: [GitHub, CLI, API, CI/CD, DevOps, SSH]
keywords: [GitHub, CLI, API, CI/CD, DevOps, SSH]
---

![Use GitHub CLI to Invalide Deploy Keys at the Organization Level](/images/posts/2023-03-31-revoke-github-deploy-key-org-level/header.png)

When working with Github, you may need to manage [deploy keys](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/managing-deploy-keys) to allow automated deployments from external services. Deploy keys are SSH keys that grant read-only or read-write access to a single repository. You can add deploy keys to your repository from the settings page, but what if you need to revoke access for many repositories at once?

Today, there's no direct way to do this from the Github UI, but you can easily accomplish it with the APIs and the [GitHub CLI `gh`](https://cli.github.com/).

I have created the following script to achieve this:

```bash
#!/bin/bash

ORG=$1

if [ -z "$ORG" ]
then
  echo "No organization provided"
  exit 1
fi

REPOS=$(gh repo list $ORG -L 200 --json name --jq '.[].name')

for repo in $REPOS
do
  echo "Deployment keys for $repo:"
  KEYS=$(gh api repos/$ORG/$repo/keys | jq -r '.[] | [.id] | @tsv')
  if [ -z "$KEYS" ]
  then
    echo -e '\t No Deployment Key'
  else
    for key in $KEYS
    do
    gh repo deploy-key delete -R $ORG/$repo $key
    done
  fi
done

```

You can use it like this:

```bash
./revoke-deploy-keys.sh <org-name>
```

Let's take a closer look at the script itself. It starts by setting a variable named "`ORG`" to the value passed as a parameter when the script is run. The script then uses the `gh` CLI to retrieve a list of repositories for the organization and stores them in a variable named "`REPOS`".

Next, the script loops through each repository and retrieves a list of deploy keys using the GH API. If there are no deploy keys, the script simply prints a message saying so. Otherwise, the script loops through each key and uses the `gh` CLI to delete it using the command [`gh repo deploy-key delete`](https://cli.github.com/manual/gh_repo_deploy-key_delete).

Overall, the script is a quick and easy way to revoke deploy keys for an entire organization's repositories. By combining the `gh` CLI and Github API, you can automate this process and save time and effort.