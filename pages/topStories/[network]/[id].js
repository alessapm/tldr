import { useEffect, useState } from "react";
import { Configuration, OpenAIApi } from "openai";
import { extractTextFromArticle } from "../../api/scraper";
import { Summary } from "../../../components";
import styles from "../../../styles/Home.module.css";

export const getServerSideProps = async (context) => {
  return {
    props: {
      title: context.query.title,
      url: context.query.url,
      networkImage: context.query.networkImage,
    },
  };
};

const articleSummaryPage = ({ title, url, networkImage }) => {
  const [summary, setSummary] = useState()

  useEffect(() => {
    getArticleText(url).then((articleText) => {
      generateSummary(articleText).then((summaryResponse) => {
          console.log('generateSummary response: ', summaryResponse);
          const summary = summaryResponse.data.choices[0].text;
          setSummary(summary);
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
        <Summary title={title} url={url} networkImage={networkImage} summaryText={summary} />
      </main>
    </>
  );
};

export default articleSummaryPage;
