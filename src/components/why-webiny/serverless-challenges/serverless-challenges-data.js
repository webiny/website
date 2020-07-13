import fearOfUnknownImg from './assets/fear-of-unknown.svg';
import securityConcernImg from './assets/security-concerns.svg';
import educateStaffImg from './assets/educating-staff.svg';
import vendorLockImg from './assets/vendor-lock-in.svg';
import debugImg from './assets/hard-to-test-debug.svg';

export const NAV_LIST = [
  {
    id: 0,
    title: 'Fear of the unknown',
  },
  {
    id: 1,
    title: 'Security concerns',
  },
  {
    id: 2,
    title: 'Educating current staff',
  },
  {
    id: 3,
    title: 'Vendor lock-in',
  },
  {
    id: 4,
    title: "It's hard to test and debug",
  },
];

export const CONTENT_LIST = [
  {
    id: 0,
    title: 'Fear of the unknown',
    description: `The rules of the game are different when it comes to serverless infrastructure. How you architect, code and deploy your applications changes and there are many new hidden challenges along the way which can derail your project.`,
    imageSrc: fearOfUnknownImg,
  },
  {
    id: 1,
    title: 'Security concerns',
    description: "How do you secure something you don't understand? By not having a deterministic architecture from day one for your application, the security team will have a hard time putting the proper measures in place.",
    imageSrc: securityConcernImg,
  },
  {
    id: 2,
    title: 'Educating current staff',
    description: 'Is the job of your team to build applications or run classrooms? How do you even start learning about serverless and then scale that knowledge?',
    imageSrc: educateStaffImg,
  },
  {
    id: 3,
    title: 'Vendor lock-in',
    description: 'Serverless services tend to be very sticky. Some might not mind that, but for some multi-cloud is a requirement, so how do you protect yourself from vendor lock-in?',
    imageSrc: vendorLockImg,
  },
  {
    id: 4,
    title: "It's hard to test and debug",
    description: ' Observability and testing inside serverless applications is a whole challenge in itself. Partially you can solve this with 3rd party tools, but getting them integrated in your processes and existing application can be hard. ',
    imageSrc: debugImg,
  },
];
