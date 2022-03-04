import { useEffect, useState } from "react";
import { Configuration, OpenAIApi } from "openai";
import Skeleton from "react-loading-skeleton";
import { extractTextFromArticle } from "../../api/scraper";
import { Summary, TopStories } from "../../../components";
import styles from "../../../styles/Home.module.css";

export const getServerSideProps = async (context) => {
  const { title, url, networkImage, brand, domain } = context.query;
  return {
    props: {
      title,
      url,
      networkImage,
      brand,
      domain
    },
  };
};

const articleSummaryPage = ({ title, url, networkImage, brand, domain }) => {
  const [summary, setSummary] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getArticleText(url).then((articleText) => {
      generateSummary(articleText).then((summaryResponse) => {
          const summary = summaryResponse.data.choices[0].text;
          setSummary(summary);
          setIsLoading(false)
      })
    })
  }, []);

  const getArticleText = async(url) => {
    const articleText = await extractTextFromArticle(url)
    return articleText
  };

  const generateSummary = async(articleText) => {
      const configuration = new Configuration({
          organization: process.env.OPENAI_ORG,
          apiKey: process.env.OPENAI_API_KEY
        });
        const openai = new OpenAIApi(configuration);
        
        const response = await openai.createCompletion("text-davinci-001", {
          prompt: `Summarize this for a second-grade student:\n\n${articleText}`,
          temperature: 1,
          max_tokens: 500,
          top_p: 1.0
        });

        return response;
  };

  return (
    <>
      <main className={styles.main}>
      {isLoading && (<Skeleton style={{margin: "2rem 0", width: "640px"}} count={10} />) }
        {!isLoading && (<div>
          <Summary title={title} url={url} networkImage={networkImage} summaryText={summary} brand={brand} domain={domain}/>
          <TopStories className="mx-12 "brand={brand} url={domain} networkImage={networkImage} alternateView={true}/>
          </div>
        )}
      </main>
    </>
  )
};

export default articleSummaryPage;
