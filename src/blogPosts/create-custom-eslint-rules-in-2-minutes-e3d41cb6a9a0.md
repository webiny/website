---
slug: "blog/create-custom-eslint-rules-in-2-minutes-e3d41cb6a9a0"
title: "Create custom ESLint rules in 2 minutes"
description: "pending"
tags: pending
featureImage: "./assets/create-custom-eslint-rules-in-2-minutes-e3d41cb6a9a0/max-1776-1adPg-Z859DytSea5oLARGg.png"
author: pending
---


ESLint is a great tool when it comes to code standardization. Maintained by the open source community, and with a rich plugin-based eco system, you basically already have everything you need to produce a solid codebase.

But in some cases, you might want to enforce one or more ESLint code rules that are specific to your particular project. Okay, first you take a look at NPM and check if there is an existing plugin. But after searching a bit, you didn’t find anything that would suit your specific needs and for that reason, you decided to create your own custom ESLint plugin.

If that’s your case, then follow along because here we will show how to accomplish this in 5 simple steps.

Before we continue, just wanted to mention this is not a tutorial on how to write ESLint rules / plugins. It’s just a quick guide on how to get per-project rules up and running quickly.

So here we go!

## 5 steps

1. Inside your project folder, create a folder. I will name mine `eslint`, but exact location / name is not important at this point.

2. Inside the folder, we create a`package.json` file with following content:

```
// eslint/package.json{  "name": "eslint-plugin-my-project",  "version": "1.0.0",  "main": "index.js"}
```

Please note that that the package name must start with `eslint-plugin-` prefix, as it is an ESLint requirement.

3. Then we also create an`index.js` file, which will contain all of the plugin rules. If you don’t know how to write ESLint rules, take a look at [AST Explorer](https://astexplorer.net/) example, it’s not too complicated (at least for simple cases).

The following example was copied from the AST explorer website, and it just prevents developers from using [template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals). Not very useful maybe, but for demonstration purposes of this guide, it will suffice.

```
// eslint/index.jsmodule.exports = {    rules: {        "no-template-literals": {            create: function(context) {                return {                    TemplateLiteral(node) {                        context.report(node, 'Do not use template literals');                    }                };            }        }    }};
```

4. Once you’re done, in your project root, add the plugin as a dependency using `yarn`(or `npm`):

```
yarn add --dev file:./eslint
```

Notice the `file:./eslint` part. [This syntax](https://yarnpkg.com/lang/en/docs/cli/add/) will allow us to install a package that is on our local file system.

After executing, inside the `node_modules` folder, you should have the `eslint-plugin-my-project` folder that contains both `index.js` and `package.json` files.

5. Finally, add the plugin and rule in your `eslintrc` file. You can do that like so:

```
// eslintrc.jsmodule.exports = {        (...)    plugins: ["my-project"],    rules: {        "flowtype/define-flow-type": 1,        "my-project/no-template-literals": 1    }    (...)};
```

## We’re done!

That wasn’t too bad, right? 😊

Try adding a simple template literal in your code. If you’ve done everything correctly, you should get an ESLint warning. Now continue with the files we’ve just created and start defining your own custom rules!

Thanks for reading! My name is Adrian and I work as a full stack developer at Webiny. If you have any questions or comments, feel free to reach out to me via [Twitter](https://twitter.com/1358Adrian).