import Footer from "../Footer";
import Head from "next/head";

export const siteTitle = "Bloom Collective";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.svg" />
        <meta name="description" content="Business-driven content workflows." />
        <meta name="title" content={siteTitle} />
      </Head>
      <main className="main-wrapper text-black text-base">{children}</main>
    </>
  );
}
