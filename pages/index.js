import Head from "next/head";
import styles from "../styles/Home.module.css";
import { MediaSite } from "../components";
import {
  voxDataObj,
  theVergeDataObj,
  polygonDataObj,
  eaterDataObj,
} from "../common/mediaData";

export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <title>TL;DR</title>
        <meta name="description" content="TL;DR - Summarize your favorite vox media articles" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className="flex flex-col tracking-[0.3rem] font-display font-bold px-10 text-3xl text-center mb-5">
          tl;dr
          <span className="font-extralight font-sans mt-3 text-base tracking-wide">[ Summarize articles from your favorite networks ]</span>
        </h1>
        <MediaSite mediaObj={voxDataObj} />
        <MediaSite mediaObj={theVergeDataObj} />
        <MediaSite mediaObj={eaterDataObj} />
        <MediaSite mediaObj={polygonDataObj} />
      </main>
    </div>
  );
}
