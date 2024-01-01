import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "en-US",
  title: "Aplós Template",
  description:
    "This is a cool template for vitepress, it has a lot of features, and it's easy to use",

  lastUpdated: true,
  cleanUrls: true,

  themeConfig: { // Main Theme
    author: "You", // Your name
    nav: { // Navigation
      links: [ 
        { text: "Guide", link: "https://aplos.gxbs.me/guide/" },
        { text: "Demo", link: "/demo" },
        // To add more links, just add more objects to the array, with the text and link like so:
        // { text: "Text (The text for the link)", link: "Link" },
      ],
      git: "https://github.com/GabsEdits/aplos-template", // Link to the source code of your site
    },
    footer: {
      // To disable any of these, just set them to false, to enable them, set them to true
      copyright: true,
      poweredBy: true,

      // To change the text of any of these, just change the text in the quotes, if you want to disable it entirely, set show to false
      madeby: {
        show: true,
        name: "You",
        link: "#",
      },
    },
  },
  markdown: {
    container: { // The markdown cards
      warningLabel: "⚠ Warning",
      tipLabel: "Tip",
      dangerLabel: "⚠ Danger",
      infoLabel: "Info",
    },
  },
  head: [ // The head of the page, this is where you put your meta tags
    ["link", { rel: "icon", href: "/favicon.ico" }],
    ["meta", { name: "og:type", content: "website" }],
    ["meta", { name: "og:locale", content: "en" }],
    ["meta", { name: "og:site_name", content: "Template" }],
    [
      "meta",
      {
        name: "og:image",
        content: "https://aplos.gxbs.me/images/aplos-banner.jpg",
      },
    ],
    ["meta", { name: "twitter:card", content: "summary_large_image" }],
    [
      "meta",
      {
        name: "twitter:image",
        content: "https://aplos.gxbs.me/images/aplos-banner.jpg",
      },
    ],
    ["meta", { name: "twitter:title", content: "Aplós" }],
    [
      "meta",
      {
        name: "twitter:description",
        content: "Aplós is a cool template for vitepress",
      },
    ],
    [
      "meta",
      { name: "twitter:url", content: "https://template.aplos.gxbs.me" },
    ],
  ],
  sitemap: { // The sitemap, for SEO
    hostname: "https://template.aplos.gxbs.me", // The hostname (domain) of your site
  },
});
