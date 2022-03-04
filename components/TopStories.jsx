import { useEffect, useState } from "react";
import { getTopStories } from "../pages/api/scraper";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'
import Link from 'next/link'

const TopStories = ({ brand, url, networkImage, alternateView = false }) => {
  const [topStories, setTopStories] = useState([]);
  const [isLoading, setIsLoading] = useState(true)
  

  useEffect(() => {
    const retrieveSiteInfo = async () => {
      const topStories = await getTopStories(url);
      setTopStories(topStories);
      setIsLoading(false)
    };

    retrieveSiteInfo()
  }, []);

  return (
    <>
     {alternateView && (
      <div className='flex items-center flex-col mx-12 px-3'>
         <h1 className="text-slate-300 font-semibold text-3xl my-10">More Stories from {brand}</h1>
         <div className="flex flex-wrap justify-around">
        {topStories?.map((article, index) => (
          <Link key={`article-${index}`} href={{pathname: `/topStories/${brand}/${index + 1}`,
          query: {
            title: article.title,
            url: article.articleUrl,
            networkImage,
            brand
          }}}>
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
            </Link>
        ))}
        </div>
      </div>
     )}
    {!alternateView && (
      <div>
         <h1 className="font-bold text-3xl mb-10">Top Stories from {brand}</h1>
         {isLoading && (<Skeleton style={{margin: "2rem 0", width: "640px"}} count={10} />) }
        {topStories?.map((article, index) => (
          <Link key={`article-${index}`} href={{pathname: `/topStories/${brand}/${index + 1}`,
          query: {
            title: article.title,
            url: article.articleUrl,
            networkImage,
            brand,
            domain: url
          },}}>
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
            </Link>
        ))}
      </div>
    )}
    </>
  );
};

export default TopStories;
