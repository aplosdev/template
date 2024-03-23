<div align="center">
<h1>Aplós Template | Guide</h1>
</div>

## Getting Started

This guide will help you get started with the Aplós Template.

### Clone the Template Repo

Clone this template repository by running the following command in your terminal:

```bash
git clone https://github.com/*your_username*/aplos
```

<details>
<summary>GitHub Codespaces</summary>

**Alternatively**, you have the option to edit your project using GitHub Codespaces. Simply open the following link in your preferred web browser:

[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://github.com/codespaces/new?hide_repo_select=true&ref=main&repo=737827959)
</details>

## Install Dependencies and Start Development Server

Once you've cloned the repository (or opened it in Codespaces), follow these steps:

1. Install Dependencies:

```bash
npm install
```

2. Start Development Server:

```bash
npm run pages:dev
```

This will start the development server and open your project in your default browser.

## Configuration

The Aplós Template uses a configuration file `(pages/.vitepress/config.mts)` to control various aspects of the website, such as theme, navigation, and SEO.

You can edit this file to customize your website. Here's an example snippet showing some configuration options:

```ts
export default defineConfig({
  lang: "en-US",
  title: "Aplós Template",
  description:
    "This is a cool template for vitepress, it has a lot of features, and it's easy to use",

  lastUpdated: true,
  cleanUrls: true,

  themeConfig: {
    // Main Theme
    author: "You", // Your name
    nav: {
      // Navigation
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
  head: [
    // The head of the page, this is where you put your meta tags
    // Add what ever you want
  ],
  sitemap: {
    // The sitemap, for SEO
    hostname: "https://template.aplos.gxbs.me", // The hostname (domain) of your site
  },
});
```

> [!NOTE]
> Make sure to replace "You" with your actual name in the `author` field.

## Colors

You can change the accent color of your website by editing the `pages/.vitepress/custom.scss` file.\
The file should look something like this:

```scss
$color-accent: #9eb036;
```

Change the value of `$color-accent` to your desired color code.

## Creating New Pages

New pages can be created inside the `pages` folder. To add a new link to the navigation bar, edit the `nav` section in the `config.mts` file following the existing format.

## Deployment

Once you're happy with your website, you can deploy it to a hosting platform. Here are some resources to help you get started:

- Vitepress Deployment Guide: https://vitepress.dev/guide/deploy
- [![Deploy to Vercel](https://vercel.com/button)](https://vercel.com/import/project?template=https://github.com/GabsEdits/aplos)
