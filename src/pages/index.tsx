import Head from "next/head";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Seo from "@/layout/Seo";
import { Vol1 } from "./eventLp/vol-1";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Seo />
      <Head>
        <title>あまてく×CACアイディアソン</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={styles.main}>
        <Vol1 />
      </main>
    </>
  );
}
