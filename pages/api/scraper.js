import axios from "axios";
import JSSoup from "jssoup";


const getWebsiteData = async (url) => {
  const response = await axios.get(url);
  return response.data;
};

export const getTopStories = async (url) => {
  const topStories = [];

  const html = await getWebsiteData(url);


  const soup = new JSSoup(html);

  const articles = soup.findAll("h2", "c-entry-box--compact__title");
  const firstTenArticles = articles.slice(0, 10);


  firstTenArticles.forEach((article) => {

    const href = article.find('a')

    topStories.push({
      title: article.text,
      articleUrl: href.attrs.href,
    });
  });

  return topStories;
};

export const extractTextFromArticle = async (url) => {
  const articleText = []

  const html = await getWebsiteData(url)
  const soup = new JSSoup(html)

  const articleContent = soup.find('div', 'c-entry-content')
  const paragraphTags = articleContent.findAll('p')

  // Due to token limitations we only want the first 10 paragraphs
  const firstTenParagraphs = paragraphTags.slice(0, 10)

  firstTenParagraphs.forEach((paragraph) => {
    articleText.push(paragraph.text)
  })

  return firstTenParagraphs.join(' ')

}
