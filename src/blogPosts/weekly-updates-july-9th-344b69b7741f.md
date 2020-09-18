---
slug: "blog/weekly-updates-july-9th-344b69b7741f"
title: "Weekly Updates July 9th"
description: "pending"
tags: pending
featureImage: "./assets/weekly-updates-july-9th-344b69b7741f/max-4480-13ZrqiZApPv2GBKSJ0jFLWg.png"
author: pending
---


## 🆕 What’s New In Webiny 4.4.0?

Our weekly release is here! This week we introduce a couple of improvements and fixes in different areas in Webiny. Let’s check them out!

### 🚀 Features

#### Generate **`ENV`** variables for default **`environments`**(**[#1103](https://github.com/webiny/webiny-js/pull/1103)**)
With this release, we improved the generation of environment variables to avoid any accidents when deploying different environments. Each environment now has a clear definition of the S3 bucket name and MongoDB database name. There are no more fallback values, and the contents of `.env.json` files are much more clear. Developers are still free to do whatever they want with the default configuration, but out-of-the-box, there is no more ambiguity and your environments are separated.

**Upgraded Apollo Service GraphQL scaffold (**[#1106](https://github.com/webiny/webiny-js/pull/1106)**)**With this release, we’ve introduced a couple of significant updates to the Apollo Service GraphQL scaffold.

> In case you didn’t know, the Apollo Service GraphQL scaffold enables you to quickly and easily get started with the creation of a brand new GraphQL service. For more information about scaffolds and API development, check out the API Development Introduction and Introduction to Scaffolding articles on our official docs.

*In case you didn’t know, the Apollo Service GraphQL scaffold enables you to quickly and easily get started with the creation of a brand new GraphQL service. For more information about scaffolds and API development, check out the *[API Development Introduction](https://docs.webiny.com/docs/api-development/plugins-reference)* and *[Introduction to Scaffolding](https://docs.webiny.com/docs/deep-dive/cli/creating-a-scaffold-plugin/#introduction-to-scaffolding)* articles on our official docs.*

First of all, before generating anything, the scaffold will ask you to provide the name of the initial data model, whereas before, the scaffold would just use the arbitrary “Book” name. We were always aware that it’s not practical to end up with code that immediately needs to be “find-and-replaced”, so, in this release, we’ve finally made the necessary upgrades.

![](./assets/weekly-updates-july-9th-344b69b7741f/max-920-0s6Tp2JkxPbIjMDi2.png)

Secondly, the scaffold will now generate a full test suite for you to use in your upcoming development. We are firm believers in test-driven development (TDD), and we believe that’s it something that’s especially important when it comes to “development for the cloud”.

Finally, we’ve significantly enriched the generated code with comments. So, for those who are still new to Webiny, it will be easier to understand what’s going on.

### 🐞 Bugs

**Gracefully handle S3 files removal (**[#1102](https://github.com/webiny/webiny-js/pull/1102)**)**With the recent changes to how we handle S3 buckets during stack removal, a new bug was revealed in another component. When attempting to remove your stack, the S3 bucket is removed together with all of its contents, and once the `@webiny/serverless-aws-s3-object` component starts the removal procedure, it has no bucket to work with. With this release, we now handle this case and stack removal will no longer cause your state to become corrupted.

### ⬇️ Try the Latest Release

If you’d like to give Webiny a try, feel free to check our [Quick Start](https://docs.webiny.com/docs/get-started/quick-start) article which will guide you through the initial setup steps.

And, just in case you’ve missed it, if you’d like to check out the full changelog, you can do that [here](https://github.com/webiny/webiny-js/releases/tag/v4.4.0).

## 🙌 Community Updates

### 👥 New Contributors

As always, let’s give a shout out to our new contributors 👏

[Tommy Jackson](https://github.com/TommyJackson85)* (*[#1078](https://github.com/webiny/webiny-js/pull/1078)*)*

[Jarret Moses](https://github.com/jarretmoses)* (*[#1052](https://github.com/webiny/webiny-js/pull/1052)*)*

### 📚Knowledge sharing

The context of knowledge-sharing as you may already know is to learn and get hands-on Webiny.

In this session, we focused on API Development with Webiny. It starts with an overview of Webiny technologies and architecture and then continues on practical code by creating a new API service with Webiny scaffold. Check our YouTube video below:

## 🤝 Get Involved

We encourage everyone to get involved and contribute, regardless of their experience level. Read the [contributing guide](https://github.com/webiny/webiny-js/blob/master/CONTRIBUTING.md) and if you still run into problems, just give us a ping on [Slack](https://www.webiny.com/slack), we will help you out.

Our development team is on standby to help your in-house team to learn and adopt Webiny — all free of cost!