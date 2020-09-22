---
slug: "blog/webiny-serverless-cms-release-v1-13-0-527619fdff81"
title: "Webiny Serverless CMS — Release V1.13.0 ⚡️"
description: "It’s been just over a week since we launched Webiny, and in this short period we have prepared a handful of updates for you."
tags: ["Serverless", "Web development", "Javascript", "Software Development", "GraphQL"]
featureImage: "./assets/webiny-serverless-cms-release-v1-13-0-%EF%B8%8F-527619fdff81/max-2524-1tFFXo3VmyFGy0iH92aF-Ow.png"
author: sven
date: 2019-03-29
---


It’s been just over a week since we launched Webiny, and in this short period we have prepared a handful of updates for you.

Before we begin, we would like to thank everyone who joined our beta and provided us with feedback 🙌 As a proof of how much we value that, 90% of the updates below are done as a result of your input.

Still don’t have a Webiny Website — It’s free while beta lasts. 
[-> Create one now!](https://www.webiny.com/)

## 🚀 New features

**Set as homepage** — you no longer need to go into CMS Settings to change your homepage. Now you can do it directly from the page list.

**Storybook** — For developers that are interested in using our React UI components. We have a storybook configured where you can view all of the components, together with examples and documentation how to use them. For more info visit: [https://storybook.webiny.com](https://storybook.webiny.com/)

## 💅Enhancements

**Admin load speed** — we managed to cut down the size of javascript files by 70% when opening the CMS administration.

**SEO speed** — Webiny uses a prerender mechanism to keep static snapshots of your pages, and those snapshots are served to bots like google and similar. We have reduced the speed at which those snapshots are served from ~3s to 500ms, that’s 83% reduction in load time. Your Google ranking will thank you ;) **Note**: We use puppeteer to do the prerender and we fully follow Google’s guidelines in how we serve content to bots.

**Creating a websites** **UX** — We no longer ask you to define a password for your new website. Also we added a “Manage website content” in Site Manager, clicking that button will immediately load the CMS for that site, no login required.

**Site manager design change** — You will notice the header in Site Manager is now white, instead of orange. This is just to differentiate the Site Manager from the CMS in a better way.

## 🐛 Bug fixes

**Dark mode fix** — The dark mode in Site Manager wasn’t working in some areas as expected. This is now sorted.

**Large images** — When you would select an image that was over 7MB in size, in some cases it wouldn’t show up. This is now fixed with several UX improvements in how we load the images and notify you in case an image is too big. (over 10MB in size).

**GraphQL Playground** — enabled by default in development environment, so you don’t have to install a separate app to inspect your GraphQL schema.

For the full change log, visit our Github: [https://github.com/Webiny/webiny-js/releases/tag/v1.13.0](https://github.com/Webiny/webiny-js/releases/tag/v1.13.0)

## 📣 Final note

If you are an agency or a company interested in Webiny, and want to learn how it could benefit your organization and online presence, we are happy to have a chat. [-> Book a call](http://calendly.com/webiny)