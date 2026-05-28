const footerLinks = [
  { label: "Contact Us", href: "contact-us.html" },
  { label: "Privacy Policy", href: "privacy-policy.html" },
  { label: "Terms and Conditions", href: "terms-and-conditions.html" }
];

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

renderFooterLinks();
