import Head from "next/head";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Portfolio from "../components/Portfolio";
import Timeline from "../components/Timeline";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="description" content="Pourya's homepage" />
        <meta name="author" content="Pourya Karami" />
        <meta name="author" content="PK's portfolio" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <title>Pourya Karami - Portfolio</title>
      </Head>
      <Navbar />
      <Hero />
      <Portfolio />
      <Timeline />
      <Footer />
    </>
  );
}
