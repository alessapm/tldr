import { useEffect, useState } from "react";
import { getTopStories } from "../pages/api/scraper";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'
import Link from 'next/link'

const Summary = ({ title, url, networkImage, summaryText }) => {
//   const [topStories, setTopStories] = useState([]);
//   const [isLoading, setIsLoading] = useState(true)
  

  useEffect(() => {
      console.log('network img: ', networkImage);
//     const retrieveSiteInfo = async () => {
//       const topStories = await getTopStories(url);
//       setTopStories(topStories);
//       setIsLoading(false)
//     };

//     retrieveSiteInfo();
  }, []);

  return (
      <div>
        <img src={`${networkImage}`} className="p-[4px] w-20 h-20 object-cover"/>
        <h1>{title}</h1><br/>
        <p>{summaryText}</p><br/>
        <p>Read more <a href={url} target="_blank">here</a></p>
      </div>
  )
}

export default Summary;