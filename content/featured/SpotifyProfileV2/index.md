---
date: '3'
title: 'Gitops with ArgoCD'
cover: './demo.png'
external: 'https://github.com/Terre8055/demo-crm-argocd'
cta: 'https://github.com/Terre8055/demo-crm-argocd'
tech:
  - ArgoCD
  - Kubernetes
  - GitOps
  - Helm
---

Deploying application in kubernetes cluster using argocd, helm charts. ArgoCD sits in the Kubernetes cluster and keeps polling for the desired state from the GitOps repository, comparing that state with the one that is actually running in the cluster.