import { TopStories } from "../../components";
import styles from "../../styles/Home.module.css";

export const getServerSideProps = async (context) => {

  return {
    props: {
      brand: context.query.brand,
      url: context.query.articleUrl,
      networkImage: context.query.networkImage,
      color: context.query.color
    },
  };
};

const topStoriesPage = ({ brand, url, networkImage }) => {
  return (
    <>
      <main className={styles.main}>
        <TopStories brand={brand} url={url} networkImage={networkImage} />
      </main>
    </>
  );
};

export default topStoriesPage;
