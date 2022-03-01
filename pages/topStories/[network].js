import { TopStories } from "../../components";
import styles from "../../styles/Home.module.css";

export const getServerSideProps = async (context) => {
  console.log("hmmmmm", context.query);

  return {
    props: {
      title: context.query.title,
      url: context.query.articleUrl,
      networkImage: context.query.networkImage,
      color: context.query.color
    },
  };
};

const topStoriesPage = ({ title, url, networkImage }) => {
  return (
    <>
      <main className={styles.main}>
        <TopStories title={title} url={url} networkImage={networkImage} />
      </main>
    </>
  );
};

export default topStoriesPage;
