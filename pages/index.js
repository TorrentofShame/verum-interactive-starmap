import Head from 'next/head'
import dynamic from "next/dynamic";

import InteractiveMap from "../components/InteractiveMap";


export default function Home() {
  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#724c98" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="robots" content="noindex, nofollow" />
        <title>Interactive Verum Starmap</title>
        <meta property="og:description" name="description" content="An interactive star map for Arcadum's world of Verum. Art is by Yowto." />
        <meta name="author" content="TorrentofShame <simon@torrentofshame.com>; Yowto (twitter.com/yowto_)" />
        <meta property="og:title" content="Interactive Verum Starmap" />
        <meta property="og:type" content="website" />
      </Head>
      <noscript>You need to enable JavaScript to run this app.</noscript>

      <InteractiveMap />
    </div>
  )
}
