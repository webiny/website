import {trackAction} from 'wts';

function trackGoToGithub () {
  trackAction ('gh-click');
  window.gtag ('config', 'UA-35527198-1', {
    page_title: 'Go to GitHub',
    page_path: '/goal-ga-github',
  });
}

function trackBookADemo (params) {
  trackAction ('book-a-demo-click', params);
}

function trackJoinSlack (params) {
  trackAction ('slack-click', params);
}

export {trackGoToGithub, trackBookADemo, trackJoinSlack};
