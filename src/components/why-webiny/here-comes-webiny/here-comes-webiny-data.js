import keepCostDown from './assets/down-cost.svg';
import avoidPitfalls from './assets/avoid-pitfall.svg';
import customTooling from './assets/over-engineering.svg';
import educateStaff from './assets/educate-staff.svg';

export const NAV_LIST = [
  {
    id: 0,
    title: 'Keep development cost down',
  },
  {
    id: 1,
    title: 'Avoid serverless pitfalls',
  },
  {
    id: 2,
    title: 'Eliminate the need for custom tooling',
  },
  {
    id: 3,
    title: 'Educate the staff',
  },
];

export const CONTENT_LIST = [
  {
    id: 0,
    title: 'Save at least $300.000 on development costs',
    description: 'We have estimated that you’d need to dedicate a minimum of 780 full working days split between your team in order to overcome the serverless challenges by taking the DIY route. This is the time it took us to build Webiny. By using Webiny you can skip this whole part and start building serverless products much faster. ',
    imageSrc: keepCostDown,
  },
  {
    id: 1,
    title: 'Take the beaten path and avoid any nasty surprises',
    description: 'New technologies are great, but often they come with a "discovery path". That path can have many hidden pitfalls that are hard to spot, and only come to light when you\'re deep into your project. Webiny is a proven and tested framework. No nasty suprises here.',
    imageSrc: avoidPitfalls,
  },
  {
    id: 2,
    title: "Don't let over-engineering eat up all the savings serverless brings",
    description: 'Webiny was created for building any type of websites, APIs and applications. There is no need to invest a ton of time and money in reinventing the wheel, getting caught in many of the serverless pitfalls and risking your project budget and timelines. Webiny has everything you will need to successfully build your project. ',
    imageSrc: customTooling,
  },
  {
    id: 3,
    title: "Guides, tutorials and manuals - it's all included",
    description: "Educating people takes a lot of time. From producing the required docs, to organizing them into logical structures and ensuring they actually convey the required knowledge back to the readear. Webiny is a complete product, meaning you'll get all the docs you will need, and in case something is missing, our community chat is always active with helpful people. ",
    imageSrc: educateStaff,
  },
];
