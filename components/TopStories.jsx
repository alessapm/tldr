import { useEffect, useState } from "react";
import { getTopStories } from "../pages/api/scraper";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'

const TopStories = ({ title, url, networkImage }) => {
  const [topStories, setTopStories] = useState([]);
  const [isLoading, setIsLoading] = useState(true)
  

  useEffect(() => {
    const retrieveSiteInfo = async () => {
      const topStories = await getTopStories(url);
      setTopStories(topStories);
      setIsLoading(false)
    };

    retrieveSiteInfo();
  }, []);

  return (
    <>
      <div>
         <h1 className="font-bold text-3xl mb-10">Top Stories from {title}</h1>
         {isLoading && (<Skeleton style={{margin: "2rem 0", width: "640px"}} count={10} />) }
        {topStories?.map((article, index) => (

          <a target="_blank" href={article.articleUrl}>
            <div
              key={`article-${index}`}
              className="items-center h-auto my-5 w-[326px] flex md:w-[40rem] border-slate-100 rounded-md border-[6px] shadow-md cursor-pointer hover:shadow-xl hover:border-slate-300"
            >
              <div className="h-[100px] w-[100px] flex justify-center items-center">
                <div className="flex justify-center">
                  <img
                    className="p-[4px] rounded-full w-20 h-20 object-cover"
                    src={`${networkImage}`}
                  />
                </div>
              </div>
              <div className="p-4 md:p-4">
                <h1>{article.title}</h1>
                <span className="text-xs text-gray-500">
                  {article.articleUrl}
                </span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </>
  );
};

export default TopStories;
