import Link from 'next/link';
import Head from 'next/head';
import Layout from '../../components/layout';

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First post</h1>
      <h2>
        <Link href='/'>
          <a>Back to home</a>
        </Link>
      </h2>
    </Layout>
  );
}

// Theory notes

// SECTION: Navigate between pages

/* NOTES:
1. To link pages in Next.js we wrap <a></a> tag to Link component like this:

<Link href='/path'>
  <a>Name of a link</a>
</Link>

No routing libs are required. You create routes as files under pages and use Link component.

Link component enables Client-side navigation. 
Page transition happens using JS, it faster than navigation by browser.

<Link href="…" - browser does NOT full refresh

<a href="…"> - browser does full refresh

2. Next.js does code splitting automatically. 

Each page loads only what necessary for the page. 

Pages are isolated. If one fails, others will work.

In production build Next.js uses prefetch to load linked pages in the background (like Chrome does).

*/

// SECTION: Assets, metadata, CSS

/* NOTES:

1. Static assets go to public folder. This also includes robots.txt.

2. Images.

Next.js perks out of a box:

- responsive images;
- auto optimising images*;
- lazy loading by default (hmmm, it's not necessary mean that it will be fast or save data)

* - What is cool Next.js serves images in modern formats if a browser supports them;
  - Work with any image source, including CMS.

3. Metadata

In Next.js built-in <Head></Head> component is used instead of <head></head>

To customize html tag, for example, to add lang='', 
we need to create a separate _document.js file under pages folder

LINK: https://nextjs.org/docs/advanced-features/custom-document 

4. CSS Styling

Next.js has built-in support for CSS (with modules!), Sass, styled-jsx (meh).

CSS Modules

NOTE: to use CSS modules, CSS file name must end with .module.css

If we use CSS modules, class names will be generated automatically. 
So we don't have to worry about names collisions. 

Next.js code splitting works on CSS modules, loading only minimal CSS for each page. 

Next.js generate css files from modules and load them automatically in production.

Global styles

To load global CSS file, we need to create _app.js with App component under pages folder.

App component is common across different pages.

We need to restart dev server after adding _app.js.

NOTE: we can import global CSS files only inside pages/_app.js

*/
