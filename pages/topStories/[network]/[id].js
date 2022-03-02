import { useEffect, useState } from "react";
import { extractTextFromArticle } from "../../api/scraper";
import { Configuration, OpenAIApi } from "openai";

export const getServerSideProps = async (context) => {
  console.log("url to article", context.query);
  return {
    props: {
      title: context.query.title,
      url: context.query.url,
      networkImage: context.query.networkImage,
    },
  };
};

const articleSummaryPage = ({ title, url, networkImage }) => {
    const [response, setResponse] = useState()

    useEffect(() => {

        const getArticleText = async(url) => {
            const articleText = await extractTextFromArticle(url)
            return articleText
            // console.log('articleText: ', articleText)
        }

        const generateSummary = async(articleText) => {
            const configuration = new Configuration({
                apiKey: process.env.OPENAI_API_KEY,
              });
              const openai = new OpenAIApi(configuration);
              
              const response = await openai.createCompletion("text-davinci-001", {
                prompt: `Summarize this for a second-grade student:\n\n${articleText}`,
                temperature: 0.7,
                max_tokens: 60,
                top_p: 1.0,
                frequency_penalty: 0.0,
                presence_penalty: 0.0,
              });

              return response;
    
            //   console.log('response: ', response)
        }


        getArticleText(url).then((response) => {
            generateSummary(response).then((response) => {
                console.log('generateSummary response: ', response)
            })
        })
       
    }, [])


  return (
    <>
      <h1>{response}</h1>
    </>
  );
};

export default articleSummaryPage;
