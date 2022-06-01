import React from "react";

import BaseLayout from "../layouts/base";
import Body from "../components/static/body";

const WriteWithWebinyPage = () => (
  <BaseLayout title="Write with Webiny" description="Join our writing community and get paid to write about open source!">
      <Body title="Write with Webiny">
        <p>
          <strong>
            Are you curious about new technology? Do you love the idea of composable content, GraphQL APIs, JAMStack, serverless, open source or the JavaScript & NodeJS ecosystem in general? Do you love writing about them? Why not join our writing community and get paid too!
          </strong>
        </p>
        <p>
        The “Write with Webiny” program is a way for you to contribute to the open source movement by writing technical content, and getting paid for doing so. We're looking for content that features technical subjects to help more developers to start building with Webiny and advance their skills. 
        </p>
        <p>
          You can choose between a pool of pre-selected subjects that we would like to cover, or suggest your own original topic that might be valuable to our dev community. You can review the program guidelines for more details and examples of the type of content we're interested in.
        </p>
        <h2>Why you should apply to the program?</h2>
        <ul>
          <li>We will compensate you for your time. Depending on the scope and quality of submitted article, we will pay you up to $300.</li>
          <li>We will sign you as the author on all your published articles.</li>
          <li>We will promote your article across the web. Twitter, Reddit, Hacker News, Dev.to etc</li>
          <li>You can reach a wider audience and build a name for yourself.</li>
          <li>You can help other developers by sharing your knowledge and experience. </li>
          <li>You can republish your work on personal blog/website, once it has been published by Webiny. </li>
        </ul>
        <h2>What can you write about?</h2>
        <p>We are looking for detailed tutorials and articles that generally cover these main topic categories:</p>
        <ul>
          <li>Step-by-step tutorials that walk the reader through creating a real-world project using Webiny from start to finish. These can also cover topics related to using Webiny with other relevant programming frameworks, including Next.JS, React, Gatsby, Angular, Vue, Svelte…</li>
          <li>Use cases that cover specific problems or scenarios the developers would need to address using Webiny. </li>
          <li>Articles that illustrate Webiny apps and features, including Headless CMS, Page Builder, multi-tenancy, self-hosting, data privacy etc</li>
          <li>Best practices on building full-stack serverless, JavaScript, and Typescript applications. </li>
          <li>Insights on using Webiny from your own experience.</li>
        </ul>
        <p>If there is a topic that you might find relevant for Webiny community, but doesn't fall under these categories, you can still submit your proposal and we'll review it.</p>
        <h2>How does it work?</h2>
        <ul>
          <li><a style={{ display: "inline" }} href="https://www.webiny.com/slack/">Join our dev community</a> to find the latest news and updates on the currently active writing tasks and opportunities </li>
          <li>Submit your proposal with a topic and an abstract using this form</li>
          <li>Once your proposal is accepted, our editors will get in touch and help you refine your title and outline. We will also decide on the mechanisms of the payout at this stage.</li>
          <li>Once have made an agreement, you can go ahead and start working on your article. </li>
          <li>When you have a first draft, you will submit it for initial review. Webiny editors will commit to getting back to you within 14 days with any feedback and you can work with them on polishing the article towards the final version that is ready for publication. </li>
          <li>Upon completion, the article will be scheduled to be published by Webiny and you will receive the agreed fee for your work. </li>
        </ul>
        <h2>Who can apply?</h2>
        <ul>
          <li>Anyone that has the knowledge and skills to cover the proposed topics can participate in this writing program. </li>
          <li>We're looking for technical angles, so you will need to be able to write on technical subjects and for tutorials include code samples.</li>
          <li>Tutorials will need to feature integrations with Webiny, so you should be familiar with our products before you enroll on the program. </li>
        </ul>
        <h2>FAQ</h2>
        <ul>
          <li>
            <h3>Can I submit work that has already been published? I've already written an article on one of your topics.</h3>
            <p>At this time we are only paying for original content not published elsewhere. We will do due-diligence to ensure that all submitted content is original and does not violate any copyright.</p>
            <p>We're always interested in promoting and sharing content that is beneficial to our community and audience. So if you have an existing article that hasn't already been published, and that you think would be relevant, please contact us to discuss potential content syndication.</p>
          </li>
          <li>
            <h3>I work for another developer company. Can I submit writing that mentions or promotes our product?</h3>
            <p>We'd love to chat about new partnerships and co-marketing opportunities. Reach out to partners@webiny.com to discuss the partnership opportunities.</p>
          </li>
          <li>
            <h3>Can I publish the article to my personal blog after it's published through the program?</h3>
            <p>Yes, you may publish to your personal blog once the article has been published to Webiny blog. You will only need to add a canonical tag or reference where the article originally appeared at the top of your new publication.</p>
          </li>
        </ul>
      </Body>
  </BaseLayout>
);

export default WriteWithWebinyPage;
