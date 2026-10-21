import { Sora } from "next/font/google";
import Head from "next/head";

import Header from "../components/Header";
import Nav from "../components/Nav";
import TopLeftImg from "../components/TopLeftImg";
import { assetUrl } from "../lib/assetUrl";

// setup font
const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

const Layout = ({ children }) => {
  return (
    <main
      className={`page bg-site text-white bg-cover bg-no-repeat ${sora.variable} font-sora relative`}
      style={{
        "--bg-site-image": `url("${assetUrl("/site-bg.svg")}")`,
        "--bg-explosion-image": `url("${assetUrl("/bg-explosion.png")}")`,
        "--circle-star-image": `url("${assetUrl("/circle-star.svg")}")`,
      }}
    >
      {/* metadata */}
      <Head>
        <title>Raj Vardhan Singh | Portfolio</title>
        <meta
          name="description"
          content="Raj Vardhan Singh is a Computer Science student and Web Developer building modern, responsive, and interactive websites."
        />
        <meta
          name="keywords"
          content="react, next, nextjs, html, css, javascript, js, modern-ui, modern-ux, portfolio, framer-motion, 3d-website, particle-effect"
        />
        <meta name="author" content="Raj Vardhan Singh" />
        <meta name="theme-color" content="#f13024" />
        <link rel="icon" href={assetUrl("/favicon.svg")} type="image/svg+xml" />
        <link
          rel="icon"
          href={assetUrl("/favicon-32x32.png")}
          type="image/png"
          sizes="32x32"
        />
        <link
          rel="icon"
          href={assetUrl("/favicon-16x16.png")}
          type="image/png"
          sizes="16x16"
        />
        <link rel="shortcut icon" href={assetUrl("/favicon.ico")} />
        <link
          rel="apple-touch-icon"
          href={assetUrl("/apple-touch-icon.png")}
          sizes="180x180"
        />
      </Head>

      <TopLeftImg />
      <Nav />
      <Header />

      {/* main content */}
      {children}
    </main>
  );
};

export default Layout;
