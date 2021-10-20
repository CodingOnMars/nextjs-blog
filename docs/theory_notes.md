## Theory notes

### SECTION: Navigate between pages

#### NOTES:

1. To link pages in Next.js we wrap `<a></a>` tag to Link component like this:

```
<Link href='/path'>
  <a>Name of a link</a>
</Link>
```

No routing libs are required. You create routes as files under pages and use Link component.

Link component enables Client-side navigation.
Page transition happens using JS, it faster than navigation by browser.

`<Link href="…"` - browser does NOT full refresh

`<a href="…">` - browser does full refresh

2. Next.js does code splitting automatically.

Each page loads only what necessary for the page.

Pages are isolated. If one fails, others will work.

In production build Next.js uses prefetch to load linked pages in the background (like Chrome does).

### SECTION: Assets, metadata, CSS

#### NOTES:

1. Static assets go to public folder. This also includes robots.txt.

2. Images.

Next.js perks out of the box:

- responsive images;
- auto optimising images\*;
- lazy loading by default (hmmm, it's not necessary mean that it will be fast or save data)

* - What is cool Next.js serves images in modern formats if a browser supports them;
  - Work with any image source, including CMS.

3. Metadata

In Next.js built-in `<Head></Head>` component is used instead of `<head></head>`

To customize html tag, for example, to add lang='',
we need to create a separate \_document.js file under pages folder

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

To load global CSS file, we need to create \_app.js with App component under pages folder.

App component is common across different pages.

We need to restart dev server after adding \_app.js.

NOTE: we can import global CSS files only inside pages/\_app.js

### SECTION: Pre-rendering and Data Fetching

#### NOTES:

Pre-rendering

1. By default Next.js pre-renders every page, i.e. generates HTML for each page in advance.

Hydration is used. User can see page UI (static HTML) before JS loads and can start to interact with the page when it's fully loaded (when React components are initialized). For example, <Link/> component won't be active until JS loads.

2. Next.js has two forms of pre-rendering:

- SG (Static generation): generates HTML at build time. Pre-rendered HTML is then reused on each request;

- SSR (server-side rendering): generates HTML on each request.

NOTE: in dev mode (npm run dev) every page is pre-rendered on each request, including pages that use SG.

We can choose which pre-rendering form to use for each page.

For most cases SG is OK (landings, blog posts, docs, e-commerce product listings).

If a page data changes on every request or it shows frequently updated data, SSR is a better option. Alternatively, we can skip pre-rendering and use client-side JS to fill frequently updated data.

3. SG can be used with and without Data.

Pages that don't fetch external data will be statically generated when the app is built for prod.

Next.js supports SG with data out of the box.

4. SG with data using getStaticProps:

```
export default function Home(props) { ... }

export async function getStaticProps() {
  // Get external data from the file system, API, DB, etc.
  const data = ...

  // The value of the `props` key will be
  //  passed to the `Home` component
  return {
    props: ...
  }
}

```

- In dev mode getStaticProps runs on each request. In prod it runs at build time.

- getStaticProps only runs in the server-side, it won't be included in JS bundle for the browser.

- We don't need to import fetch(), Next.js polyfills it on both client and server.

- We can query database directly.

- getStaticProps can only be exported from a page. We can't export it from non-page files.

5. For SSR we use getServerSideProps:

```
export async function getServerSideProps(context) {
  return {
    props: {
      // props for your component
    }
  }
}

```

This way is slower than getStaticProps because server must compute result on every request

6. Client-side rendering

Private, user-specific pages where SEO is not relevant.

7. SWR hook for data fetching is recommended when fetching data on the client-side.

LINK: https://swr.vercel.app/

### SECTION: Dynamic routing

#### NOTES:

1. Pages that begin with `[ and end with ]` are dynamic routes in Next.js.

![Dynamic routes](https://nextjs.org/static/images/learn/dynamic-routes/how-to-dynamic-routes.png)
