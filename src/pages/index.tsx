import Head from "next/head";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Seo from "@/layout/Seo";
import Vol1 from "./vol1";

const inter = Inter({ subsets: ["latin"] });

const Home = () => {
  return (
    <>
      <Head>
        <title>あまてく×CACアイディアソン</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Seo />
      </Head>
      <main className={styles.main}>
        <Vol1 />
      </main>
      <Seo />
    </>
  );
};

export default Home;
