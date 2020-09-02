import posthog from 'posthog-js';
import Cookies from 'js-cookie';

const PH_API = 'ZdDZgkeOt4Z_m-UWmqFsE1d6-kcCK3BH0ypYTUIFty4';
const PH_HOST = 'https://t.webiny.com';
const PH_COOKIE = 'ph_webiny';

class Tracking {
  user = {};
  /**
     * Activates Posthog tracking utility.
     */
  async activateTracking () {
    // skip tracking for gatsby builds
    if (typeof document === `undefined`) {
      return false;
    }

    posthog.init (PH_API, {
      api_host: PH_HOST,
      loaded: async posthog => {
        // get user ip
        const userIp = await this.getUserIp ();
        if (userIp !== false) {
          posthog.identify (userIp);
        }

        // populate the user details
        this.gatherUserDetails (posthog);
      },
    });
  }

  /**
   * Returns the user's IP address
   */
  async getUserIp () {
    // retrieve user IP from the cookie
    this.user = this.getUserFromCookie ();
    if (this.user.hasOwnProperty ('ip')) {
      return this.user.ip;
    }

    // retrieve the user IP from the IP-API
    try {
      const response = await fetch ('https://api.ipify.org/?format=json', {
        method: 'GET',
        mode: 'cors',
      });

      const userData = await response.json ();

      // save into local state
      this.user.ip = userData.ip;

      // save user into cookie
      this.saveUserCookie ();

      return this.userIp;
    } catch (e) {
      return false;
    }
  }

  /**
   * Returns the domain name. It's important for the cookie.
   */
  getDomainName () {
    return window.location.hostname.replace (/www|docs|blog/gi, '');
  }

  /**
   * Retrieves the user from the cookie.
   */
  getUserFromCookie () {
    if (Cookies.get (PH_COOKIE)) {
      return JSON.parse (Cookies.get (PH_COOKIE));
    }

    return {};
  }

  /**
   * Saves the current this.user to cookie
   */
  saveUserCookie () {
    Cookies.set (PH_COOKIE, JSON.stringify (this.user), {
      expires: 365,
      domain: this.getDomainName (),
    });
  }

  gatherUserDetails (posthog) {
    // first load the current user
    this.user = this.getUserFromCookie ();
    const data = {};
    let firstTouchSet = false;

    // parse the UTM
    const utm = this.parseUtmData ();
    if (utm !== null) {
      for (const tag in utm) {
        data['last-touch-' + tag] = utm[tag];
      }

      if (!this.user.hasOwnProperty ('first-touch')) {
        for (const tag in utm) {
          data['first-touch-' + tag] = utm[tag];
        }
        firstTouchSet = true;
      }
    }

    // get the referrer data
    const referrer = this.parseReferrerData ();
    if (referrer !== null) {
      // for the referrers we always set the first touch and last touch data separately
      // last touch is updated on every new visit if a referrer can be parsed
      // first touch is only set once

      // update last touch
      data['last-touch-referral-source'] = referrer.source;
      data['last-touch-referral-domain'] = referrer.domain;

      // update first touch (only if one wasn't set previously)
      if (!this.user.hasOwnProperty ('first-touch')) {
        data['first-touch-referral-source'] = referrer.source;
        data['first-touch-referral-domain'] = referrer.domain;
        firstTouchSet = true;
      }
    }

    // only set data when we have something to set
    if (Object.keys (data).length > 0) {
      posthog.people.set (data);
      if (firstTouchSet) {
        this.user['first-touch'] = 1;
      }
      this.saveUserCookie ();
    }
  }

  /**
   * Extracts and returns the UTM query strings. 
   */
  parseUtmData () {
    if (!document.location.search || document.location.search == '') {
      return null;
    }

    // parse the query strings
    const vars = document.location.search.substring (1).split ('&');
    const queryStrings = {};
    for (let i = 0; i < vars.length; i++) {
      let pair = vars[i].split ('=');
      let name = decodeURIComponent (pair[0]);

      if (name.indexOf ('utm_') !== -1) {
        queryStrings[name] = decodeURIComponent (pair[1]);
      }
    }

    if (Object.keys (queryStrings).length < 1) {
      return null;
    }

    return queryStrings;
  }

  /**
   * Parses the referrer domain name.
   * 
   * Returns 'null' in case of a `direct` access or in case a ref page is another page 
   * on the same domain. In all other cases, it returns an object.
   */
  parseReferrerData () {
    // referrer domain
    const referrer = document.referrer;

    // https://github.com/segmentio/inbound

    if (
      typeof referrer === 'undefined' ||
      referrer === null ||
      !referrer ||
      referrer === ''
    ) {
      return null;
    }

    // before doing any analysis of the referrer, let's check if ref is another internal page
    if (referrer.indexOf ('webiny.com') || referrer.indexOf ('localhost')) {
      return null;
    }

    let network = null;

    // facebook
    if (referrer.indexOf ('facebook.com') !== -1) {
      network = 'facebook';
    }

    // twitter
    if (
      referrer.indexOf ('twitter.com') !== -1 ||
      referrer.indexOf ('t.co') !== -1
    ) {
      network = 'twitter';
    }

    // linkedin
    if (referrer.indexOf ('linkedin.com') !== -1) {
      network = 'linkedin';
    }

    // reddit
    if (referrer.indexOf ('reddit.com') !== -1) {
      network = 'reddit';
    }

    // producthunt
    if (referrer.indexOf ('producthunt.com') !== -1) {
      network = 'producthunt';
    }

    // hackernoon
    if (referrer.indexOf ('hackernoon.com') !== -1) {
      network = 'hackernoon';
    }

    // google ads
    if (
      referrer &&
      referrer.path &&
      referrer.path.indexOf ('/aclk') !== -1 &&
      (referrer.indexOf ('google') !== -1 ||
        referrer.indexOf ('googleadservices.com') !== -1)
    ) {
      network = 'google-ads';
    }

    // google search
    if (
      referrer &&
      referrer.href &&
      referrer.indexOf ('google') !== -1 &&
      (referrer.href.indexOf ('/url?') !== -1 ||
        referrer.href.indexOf ('/search?') !== -1)
    ) {
      network = 'google-search';
    }

    // baidu
    if (referrer && referrer.indexOf ('baidu.com') !== -1) {
      network = 'baidu';
    }

    // yandex
    if (referrer && referrer.indexOf ('yandex.com') !== -1) {
      network = 'yandex';
    }

    // bing
    if (referrer && referrer.indexOf ('bing.com') !== -1) {
      network = 'bing';
    }

    // gmail
    if (referrer && referrer.indexOf ('mail.google.com') !== -1) {
      network = 'google-mail';
    }

    return {
      source: network, // network is null if we haven't matched it
      domain: referrer,
    };
  }
}

export default () => {
  const t = new Tracking ();
  t.activateTracking ();
};
