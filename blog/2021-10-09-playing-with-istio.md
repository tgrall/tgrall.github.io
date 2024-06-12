---
title: "Playing with ISTIO"
tags: [kubernetes, istio, servicemesh]
---


In this blog post, I will explain how to install and use ISTIO with very basic application. Then in a second post you will see how you can use GitHub Actions to deploy, test and use ISTIO to implement various dployment patterm.


### Prerequisites

- Kubernetes Cluster running  release 1.19 or later (or Minikube)
    - _In this example I am using a managed Kubernetes cluster on [Azure Kubernetes Service](https://docs.microsoft.com/en-us/azure/aks/) and [Minikube](https://minikube.sigs.k8s.io/docs/start/)_



- Optionally: [Kiali](https://kiali.io/) for vizualization



### Minikube

If you are using Minikube, be sure you check the requirements for this platform:
- https://istio.io/latest/docs/setup/platform-setup/minikube/

On my machine I have used the following commands:


```bash

brew install hyperkit


minikube start --memory=16384 --cpus=4 --kubernetes-version=v1.20.2
```

_I am running on Mac and to avoid network issue with Docker, I am using Hyperkit._
