import Footer from "../Footer";
import Nav from "../Nav";
import Head from "next/head";

export const siteTitle = "Bloom Collective";

export default function Layout({ children, lightNav }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.svg" />
        <meta name="description" content="Business-driven content workflows." />
        <meta name="title" content={siteTitle} />
      </Head>
      {lightNav ? (
        <Nav textColor="text-white" logoColor="/bloom_logo_white.svg" />
      ) : (
        <Nav textColor="text-black" logoColor="/bloom_logo_black.svg" />
      )}
      <body className="text-black text-base">
        {children}
        <Footer />
      </body>
    </>
  );
}
