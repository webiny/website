import {trackAction} from 'wts';

function trackGoToGithub () {
  trackAction ('gh-click');
  window.gtag ('config', 'UA-35527198-1', {
    page_title: 'Go to GitHub',
    page_path: '/goal-ga-github',
  });
}

export {trackGoToGithub};
