const footerLinks = [
  { label: "Home", href: "index.html" },
  { label: "Contact Us", href: "contact-us.html" },
  { label: "Privacy Policy", href: "privacy-policy.html" },
  { label: "Terms and Conditions", href: "terms-and-conditions.html" }
];

const googleAnalyticsId = "G-RYL2K7SVN7";
const statCounterProject = "13123746";
const statCounterSecurity = "2916c11a";
const footerRoot = new URL(".", document.currentScript.src);

function rootHref(href) {
  return new URL(href, footerRoot).href;
}

function renderFooterLinks() {
  document.querySelectorAll(".site-footer nav").forEach((nav) => {
    nav.replaceChildren(
      ...footerLinks.map((link) => {
        const anchor = document.createElement("a");
        anchor.href = rootHref(link.href);
        anchor.textContent = link.label;
        return anchor;
      })
    );
  });
}

function loadGoogleAnalytics() {
  if (!googleAnalyticsId || window.gtag) {
    return;
  }

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    window.dataLayer.push(arguments);
  };
  window.gtag("js", new Date());
  window.gtag("config", googleAnalyticsId);
}

function loadStatCounter() {
  if (!statCounterProject || document.querySelector('script[src*="statcounter.com/counter/counter.js"]')) {
    return;
  }

  window.sc_project = statCounterProject;
  window.sc_invisible = 1;
  window.sc_security = statCounterSecurity;
  window.sc_remove_link = 1;

  const script = document.createElement("script");
  script.async = true;
  script.src = "https://www.statcounter.com/counter/counter.js";
  document.head.appendChild(script);
}

loadGoogleAnalytics();
loadStatCounter();
renderFooterLinks();
