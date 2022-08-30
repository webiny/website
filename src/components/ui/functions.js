function trackGoToGithub() {
    if (window.wts) {
        window.wts.trackEvent("website-action", { action: "Go to GitHub" });
    }
    window.gtag("config", "UA-35527198-1", {
        page_title: "Go to GitHub",
        page_path: "/goal-ga-github",
    });
}

function trackBookADemo(params) {
    if (window.wts) {
        window.wts.trackEvent("website-action", { action: "Book a demo", ...params });
    }
}

function trackJoinSlack(params) {
    if (window.wts) {
        window.wts.trackEvent("website-action", { action: "Join Slack", ...params });
    }
}

export { trackGoToGithub, trackBookADemo, trackJoinSlack };
