---
slug: "blog/whats-new-in-webiny-4-2-0-2f7d0b660fff"
title: "What’s New In Webiny 4.2.0"
description: "Our Tuesday Release is here — Webiny 4.2.0 🎉"
tags: ["Serverless", "Web development", "Javascript", "Software Development", "GraphQL"]
featureImage: "./assets/whats-new-in-webiny-4-2-0-2f7d0b660fff/max-6720-1BqfeXX3BN3n6i21-xtKhMg.png"
author: albiona
date: 2020-06-25
---


Our Tuesday Release is here — **Webiny** **4.2.0** 🎉

As you may have noticed, Tuesdays at Webiny are release days. Grab your coffee and go through updates we provide for this release!

To see the full changelog, visit the [Github release](https://github.com/webiny/webiny-js/releases/tag/v4.2.0) page!

## 🙌 Community Updates

![](./assets/whats-new-in-webiny-4-2-0-2f7d0b660fff/max-4480-14uIciBO0tcWUUykpHSQvkg.png)

We are organizing knowledge-sharing sessions every Thursday. The purpose is to create a knowledge database so our community members can get involved in Webiny easily, be it as a user or a contributor.

We started organizing sessions for our core team, but we decided that this will be an amazing opportunity for our community as well.

The video tutorials are in the making and we will update you when we have them live. 😍

Are you interested to try Webiny and get involved in our community? You are more than welcome to join us at our [Slack Community.](https://www.webiny.com/slack/) ☺️We already are 100+ active community members.

Our development team is on standby to help your in-house team to learn and adopt Webiny — all free of cost!

## 🚀 Features

### **Deploy hooks are now regular CLI plugins**

Starting with this release, deploy hooks are now regular CLI plugins. It makes it much easier to add more handlers for the available CLI hooks. 
We now support `hook-before-deploy`, `hook-after-deploy`, `hook-stack-before-deploy` and `hook-stack-after-deploy `plugin types. 
This allows you to hook into the deploy process. To perform different operations that involve infrastructure state (particularly useful for CI/CD. Where you want to pull/push the state to/from remote storage).

### **State data is now injected into React at build time**

Up until now, we had the awkward mechanism of injecting ENV variables with values from API state into your apps’ **.env.json** files. This process was every time an API stack finished deploying.

We no longer do that. Instead, we fetch state data at build time and set the necessary data into **process.env** before webpack build starts. 
You are now free to handle ENV variables and assign them in any way you see fit. More freedom to developers! 🚀

### **S3 bucket is removed with all the infrastructure**

When you need to remove your API stack, you run **yarn webiny remove api**, which removes the deployed resources from your AWS account. But, we always felt that removing the S3 bucket can be dangerous, so we used to leave that resource intact. However, last week, several users reported all kinds of weird problems the moment you remove and try to deploy your project again. Turns out, that the S3 bucket that we kept alive was causing different problems. Too many to describe here. So from now on, ALL the infrastructure resources are removed when you run the `remove` command. So be careful with that command.

## 🔥 remove-aws-resources

Sometimes a bug can cause your state to become corrupted, and Webiny CLI is unable to remove all the resources. For those cases, we’ve created a tool to help you quickly filter and remove resources we don’t need in a semi-automatic manner.

We use this tool internally at Webiny, and now we published it as a standalone package, so feel free to use it, report issues, and contribute: [https://github.com/webiny/remove-aws-resources](https://github.com/webiny/remove-aws-resources)

## 🐞 Bugs

Last week was quite productive. We got to solve a lot of small bugs, and our community got to contribute a lot in this regard, especially on the debugging and issue reproduction front.

We fixed some stylings in different apps of Webiny such as Form Builder and I18N. We updated our CLI with user-friendly messages when certain components fail to deploy. S3 bucket manipulation can sometimes take time to settle, and now you’ll get a friendly message telling you when this happens.

There are plenty of other bug fixes so head over to our [changelog](https://github.com/webiny/webiny-js/releases/tag/v4.2.0) for more details 😄

## ⬇️ Try the Latest Release

You can create a new project using the [regular procedure](https://docs.webiny.com/docs/get-started/quick-start)**.**

To upgrade your existing 4.0.2 or 4.1.0 projects, see the instructions in the [Github Release](https://github.com/webiny/webiny-js/releases/tag/v4.2.0).