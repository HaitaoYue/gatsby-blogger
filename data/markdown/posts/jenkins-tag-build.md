---
title: "Support tag trigger for github ci in jenkins"
date: "2019-08-13"
image: ""
thumb: ""
---

## Enable tag build support

Setup build trigger.

<img src="/img/jenkins-tag-build/jenkins-poll-trigger.png" />

Refspec: +refs/tags/_:refs/remotes/origin/tags/_

Branch Spec: _/tags/_

## Github trigger setting

<img src="/img/jenkins-tag-build/github-integration-service.png" />

Need add jenkins webhook url.

https://jenkins-server.base.url/github-webhook/
