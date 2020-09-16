---
slug: "/4-problems-of-web-development-from-developers-perspective-af7df512b32e"
title: "4 Problems of Web Development — from Developer’s perspective"
description: "pending"
tags: "pending"
featureImage: "./assets/4-problems-of-web-development-from-developers-perspective-af7df512b32e/max-2048-1*7g2IovkDmP05jCinPLVJlw.jpeg"
author: "pending"
---

## td;dr

Before you’re scared off with the long text below, here’s a summary for you:

**We are bored to death with repetitive tasks. Current technology is outdated and missing innovation. We still think browser-first when it comes to displaying our data. Development tools need to get smarter, way way smarter.**

However if you disagree — you’re welcome to comment on the text below.

## Let’s talk about the problem

Yes, there is a problem in how we build websites, and it’s a problem that we web developers face every day while sitting at our desk and slowly typing away our code on the Darcula themed text editor, so our monitors don’t glow too bright once the sun sets.

![](./assets/4-problems-of-web-development-from-developers-perspective-af7df512b32e/max-2048-1*7g2IovkDmP05jCinPLVJlw.jpeg)

### Problem 1: I’m bored

Many of you probably spent years, building three basic things over and over again. A form, a grid and a modal dialog. And then this hot new technology comes in, and now you can build the same three things, again. Same, but different, but still the same….how exciting (for you Sheldon's out there, please notice the sarcasm).

![](./assets/4-problems-of-web-development-from-developers-perspective-af7df512b32e/max-3124-1*4luOcmV31e68HSGkxoXdMw.png)

The problem is that we get bored, bored of building the same s*** over and over again. We want excitement, don’t get me wrong, we still love what we do, we don’t want a different profession, but we want to get rid of the boring bits, and focus on the challenging and exciting stuff. Unfortunately I’m not here to solve that part, at least not just yet. But I do have a step in that direction.

![](./assets/4-problems-of-web-development-from-developers-perspective-af7df512b32e/max-1000-1*D5erLRvA-QM4b41aWD7oAg.gif)

Now, it would be bit funny if I would tell you that I’m trying to solve a problem of you being bored, no? But are you? I know I am.

Don’t mistake this *boredom* I’m talking about, for hating your job, this is not what I mean. You might love the company and the awesome product you are currently building, just you want to get through the boring stuff, and get to the fun parts. Getting through that repetitive task of building a login form, list of products or a file upload input, that you’ve already done like 500x before, so you can get to that challenging part of building the most advanced hot-dog detector utilizing machine learning.

![](./assets/4-problems-of-web-development-from-developers-perspective-af7df512b32e/max-1900-1*_SNYCJqp0vxYC6tDlanb5Q.png)

### Problem 2: Current solutions

Say you want to build a web application, after you’ve done all the spec work and that stuff, you now need to decide which technology you will use to for development. Where do you start, sure, you first decide on your language of preference, but then, you don’t want to start from scratch and write everything ground up. That would be like starting to dig for clay so you can make bricks, because you want to build a house. Having said that, this reminded me of this cool video I linked below (notice the title):

**But I use a framework**

So, you don’t want to use “primitive” approach, you’re smarter than that, you want a framework, or a set of libraries. That is a big step forward, you get a lot of things included, you *just* need to connect your server-side framework so it works together with your fancy UI library, then just create an auth layer on top of that, connect all the services, code the API layer , define a structure for your files, modules, apps, configure your webpack, optimize the code so it runs faster, make the builds smaller because you were missing few components so you had to add several jQuery libraries which just bloated the load time of your site … well you see where I’m going with this. It’s not as simple as it might seem.

![](./assets/4-problems-of-web-development-from-developers-perspective-af7df512b32e/max-1200-1*wY8Q6NEMmkQc0htXz3PEUA.gif)

**A CMS is so much better than a framework**

But say you’ve already tried using a framework before and you know that this approach is just so time consuming, and if you are on a fixed fee project, so that time spent on optimising, debugging and finding all the missing pieces, it just eats away your margins.

You know better, you use a ready made CMS. Because a CMS has all you need, on both server side as well as client side and it all works. But what most developers fail to understand is that a CMS is designed for a single purpose and it often looks something like: Page > New Page > Save Page > Publish.

Sure, you can build custom modules, but often than not you will spend more time working around quirks and limitations that CMS has, so your code works the way you want. Not to mention that things tend to blow up with updates. Summary: adding custom modules to a CMS often looks like the gif below.

![](./assets/4-problems-of-web-development-from-developers-perspective-af7df512b32e/max-726-1*kgT8ageSnHbPhfBlqTSfEg.gif)

### Problem 3: Device agnostic

This one’s about the data layer. Most of us either take a framework, then stick in HTML editors so users can create pages. And most of the CMS’s have HTML editor already built-in as their purpose is to render a page in a browser, and that works. But when you need to display this on a mobile app, or a TV or a console app, you have to build special APIs for that, as well as use web-views to display the content because of the HTML in there.

The problem is that the data is not managed in a device agnostic way. The system through which you manage your data, shouldn’t account that there will always be a web browser to display it and a direct connection to your database to pull that data in the first place. All systems today must have 100% API coverage for in order to properly integrate with mobile apps and other devices as well. The data needs to be “componentized”. Say you have a product description which contains a paragraph of text and an image. That paragraph and that image need to be components, not HTML tags. This way other devices get back a notion of what that is and you can use a native controller on the device to display it. In a browser it would be a <p> tag and <img> tag, on an iOS it might be UILabel and UIImage class . You don’t want to “dongle” your way to make things compatible.

![](./assets/4-problems-of-web-development-from-developers-perspective-af7df512b32e/max-1200-1*rWK2YoedB8SO2QITR2z_uw.png)

### Problem 4: Web development is stuck in stone age

When you think about it, we have cars that drive themselves, AI that is on the path becoming more powerful than a human brain, robots can walk and interact with the environment, but in web development we still struggle to build a working dropdown and to vertically align an image in css.

![](./assets/4-problems-of-web-development-from-developers-perspective-af7df512b32e/max-2560-1*lsgPEfmwj2wkn3y73cYtpQ.jpeg)

You might consider those problems to be funny, but we as web developers struggle with them and have to waste time to get them right over and over again. An even bigger problem is that this has been a problem for many years now, and it’s not yet fully solved.

Thankfully technologies like ReactJs now give us the option to build proper components that can be extended and evolved to their perfection. This, in my view, is the platform that will revolutionize web development into, say bronze age, but what’s the next step from there?

We need to get into a place where components are smart, that they automatically know how to interact between themselves, that the underlying platform automatizes 90% of our work, removes all the quirks and bugs that we face all the time, and that we as web developers have more time to focus on the challenging problems which can’t be solved by a machine — at least not yet. This will be the modern era of web development, and this is what we at [Webiny](https://www.webiny.com/) are building — the platform for next evolution of the web.

![](./assets/4-problems-of-web-development-from-developers-perspective-af7df512b32e/max-1000-1*UiTdvOEuheCps2_ACFcHtg.gif)