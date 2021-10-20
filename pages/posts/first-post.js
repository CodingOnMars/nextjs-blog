import Link from 'next/link';

export default function FirstPost() {
  return (
    <>
      <h1>First post</h1>
      <h2>
        <Link href='/'>
          <a>Back to home</a>
        </Link>
      </h2>
    </>
  );
}

// SECTION: Theory notes

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
