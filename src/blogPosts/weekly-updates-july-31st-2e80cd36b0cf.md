---
slug: "blog/weekly-updates-july-31st-2e80cd36b0cf"
title: "Weekly Updates July 31st"
description: "What’s New In Webiny 4.7.0?"
tags: pending
featureImage: "./assets/weekly-updates-july-31st-2e80cd36b0cf/max-4480-1Ai44qMLu51qgCi5MsAgJfg.png"
author: pending
---


## 🆕 What’s New In Webiny 4.7.0?

In this week’s release, we introduce a couple of improvements and fixes in a couple of different areas in Webiny. Let’s check them out!

### 🚀Features

* **Enable attributes config in Cognito **([#1160](https://github.com/webiny/webiny-js/issues/1160))****Added support for username attributes and schema.

### 🐞 Bug Fixes

* **Running Jest tests now works as expected (**[#1159](https://github.com/webiny/webiny-js/pull/1159)**)**We had a couple of reports of Jest tests not executing properly as soon as two or more custom packages are created (e.g., two Apollo GraphQL Services). This now works as expected, so you can continue writing your tests as usual and be confident that your app works as expected.
`commit messages` link ([a019b25](https://github.com/webiny/webiny-js/commit/a019b2581d9f230b6e162b945d22336d2ec8a7f9))
* **Add “ — silent” when using env-cmd **([eaa9d15](https://github.com/webiny/webiny-js/commit/eaa9d15ce4adc6570b4b49e1c9223da1eaadb9d1))
* **Contributing doc** ([8d47145](https://github.com/webiny/webiny-js/commit/8d4714534c51848bd53366eefdb979d657167861))
* **Move “ — silent” flag after the filename** ([0e790ab](https://github.com/webiny/webiny-js/commit/0e790abffaa1a2eb1a317620b6d4a97f0e0358a9))
* **Prepend empty object when doing merge.recursive** ([9f677b3](https://github.com/webiny/webiny-js/commit/9f677b323409b9ce5933fbdb04d8f0adf58881e9))
* **Headless: add new environment alias in apollo cache** ([461468a](https://github.com/webiny/webiny-js/commit/461468a92ff952c1fa3bb901e586e5aa30b5281b))
* **Headless: add refetch for environment aliases** ([29adbf6](https://github.com/webiny/webiny-js/commit/29adbf63a6f795d1d0eadaf35fb365ed745c80a9))
* **Headless: add style for the material icon** ([6fcc7ea](https://github.com/webiny/webiny-js/commit/6fcc7eabeb24cf2a77e8925f268e714d76285a14))
* **Headless: change tooltip to focus on the icon instead of text** ([2455748](https://github.com/webiny/webiny-js/commit/2455748d6713c5bc3f701a3b2b99a42c2d645b68))
* **Storybook-utils: enforce string when executing prettier format** ([58addbe](https://github.com/webiny/webiny-js/commit/58addbe9098e2be6c8da1376bba197c2ced6248e))

### ⬇️ Try the Latest Release

Give Webiny a try by checking our [Quick Start](https://docs.webiny.com/docs/get-started/quick-start) article which will guide you through the initial setup steps.

And, just in case you’ve missed it, if you’d like to check out the full changelog, you can do that [here](https://github.com/webiny/webiny-js/releases/tag/v4.7.0).

## 🙌 Community Updates

### 🛣 Webiny Roadmap

We listened to you, the community, and the top requested features are DynamoDB support, Page Builder internationalization, multi-cloud support, and many more. Learn more by checking our** **[roadmap](https://www.webiny.com/roadmap/)**!**

[Join our community](https://www.webiny.com/slack) and suggest what we should prioritize next. 🚀

### 📚Knowledge sharing

**Webiny Plugins**In this knowledge-sharing session, Webiny’s CTO Pavel will go through three main groups of plugins:

* CLI plugins
* API plugins
* App plugins

We’ll first learn how the`@webiny/plugins` package works outside of Webiny, using codesandbox.io. Then we’ll see how this same package is utilized within the CLI, within Apollo Server (resolvers) and React apps.

Check out our knowledge-sharing session below.

**Webiny Plugins — Practical Examples**In the above knowledge-sharing session, we learn about different groups of plugins. Now we will go through practical examples.

Webiny’s top contributor, Adrian, will demonstrate how plugins are used in your everyday development: in the Admin app, where we’ll show how we can use plugins to add new routes, menus, and even how we can replace the logo in the top header bar.

Also, on the API side, we’ll learn what context plugins are and what they are used for, and finally, how we can use plugins to expand our GraphQL schema with additional GraphQL types and resolvers.

## 🤝 Get Involved

We encourage everyone to get involved and contribute, regardless of their experience level. Read the [contributing guide](https://github.com/webiny/webiny-js/blob/master/CONTRIBUTING.md), and if you still run into problems, just give us a ping on [Slack](https://www.webiny.com/slack), we will help you out.

Our development team is on standby to help your in-house team to learn and adopt Webiny — all free of cost!

## 🚀 We are hiring

We are looking for a member to join our team.
If you are interested? Apply for the [Full-Stack JavaScript Engineer](https://careers.webiny.com/full-stack-javascript-engineer/en)** role**.

Since we are a small team, in this role, you’ll have a significant opportunity to directly influence the technical and product design choices we will make.