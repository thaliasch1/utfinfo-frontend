import type { NextPage } from "next";
import Head from "next/head";
import { Slider } from "../src/components/Slider";
import styles from "../styles/Home.module.css";
import React from "react";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>UTFinfo</title>
        <link rel="icon" href="/tv-app.png" />
        <link
          href="http://fonts.cdnfonts.com/css/futura-md-bt"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;1,100&display=swap" rel="stylesheet"></link>
      </Head>

      <Slider />
    </div>
  );
};

export default Home;
