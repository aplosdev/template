<div align="center">
<h1>Aplós Template | Guide</h1>
</div>

## Getting Started

This guide will help you get started with the Aplós Template.

## Initialization

1. Aplós provides a convenient template that you can use to kickstart your project. To begin, click on the following link to initialize a repository with the Aplós template: Initialize Aplós Template.

2. After initializing, you have two options:
   - Clone the repository to edit the project locally: `git clone https://github.com/*your_username*/aplos`
   - Use GitHub Codespaces to edit the project online: [GitHub Codespaces](https://codespace.new)

   Make sure to replace *your_username* with your GitHub username.

3. Navigate to the `/pages/` and `/.vitepress/` folders. Locate the config.mts file for further customization.

## Package

Aplós is now available as an NPM package, making it easier to install and use. To get started, follow these steps:

1. Install the Aplós package by running the following command in your terminal:

```bash
npm install aplos
```

2. After installing the package, in your project directory, create a folder named `theme` inside the `.vitepress` folder. Then, create a `index.ts` file inside the `theme` folder. This file will contain the following code:

```ts
import Aplos from "aplos/Layout.vue";
import type { Theme } from "vitepress";
import "aplos";

export default {
  Layout: Aplos,
} satisfies Theme;
```

> If you also want to add aditional styles, you can create a CSS/SCSS file inside the `theme` folder and import it in the `index.ts` file.

> [!WARNING]
> Currently, I recommend to use PNPM if you want to make use of the Blog List Layout, as it's not working with NPM.

### With Blog or Without Blog

Aplós offers two versions: one with a blog and one without. To choose the version that suits your needs, follow these steps:

1. Navigate to the `index.ts` file inside `/.vitepress/theme/` folder that we created earlier, after that change the import of the `Layout.vue` file to either `Layout.vue` or `no-blog/Layout.vue`.

That will disable all the blog related layouts.

#### With Blog

If you want to use the blog, you can follow the steps below:

1. Create a file named `posts.data.ts` inside the `/.vitepress/theme/` folder.
2. Add the following code to the `posts.data.ts` file:

```ts{12}
import { createContentLoader } from "vitepress";

interface Post {
  title: string;
  description: string;
  tags: string[];
}

declare const data: Post[];
export { data };

export default createContentLoader("blog/posts/*.md", {
  excerpt: true,
  transform(raw): Post[] {
    return raw
      .map(({ frontmatter }) => ({
        title: frontmatter.title,
        description: frontmatter.description,
        tags: frontmatter.tags,
        date: formatDate(frontmatter.date),
      }))
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  },
});

function formatDate(raw: string): string {
  const date = new Date(raw);
  date.setUTCHours(12);
  return date.toLocaleDateString("en-GB", {
    year: "numeric",
    month: "long",
    day: "2-digit",
  });
}
```

2. After adding the script, you can change where your posts are located by changing the path in the `posts.data.ts` file on the highlighted line.

3. If you want a page with a list of all your blog posts, you can create a file named however you want and add the following at the start of the file:

```yaml
---
layout: blog-list
---
```

4. Enjoy your blog! (Make sure you read more about setting up the blog in the [Blog](#blog) section)

Replace `!!YOUR_COLOR_HEX!!` with your desired color hex code.

You can also customize any other style of the project under the `$color-accent` variable.

## Customizing Configuration

You can edit the `config.mts` file to tailor the template to your needs. **I've made an page that explains how to do that [here](https://aplos.gxbs.me/guide/edit-configuration).**

## Start Writing!

With the configuration set up, you can now start creating and editing your files. Utilize the `pages` folder to add new pages and [customize the project](https://aplos.gxbs.me/guide/edit-configuration) to suit your preferences.

## Deployment

Once you're happy with your website, you can deploy it to a hosting platform. Here are some resources to help you get started:

- Vitepress Deployment Guide: https://vitepress.dev/guide/deploy
- [![Deploy to Vercel](https://vercel.com/button)](https://vercel.com/import/project?template=https://github.com/GabsEdits/aplos)
