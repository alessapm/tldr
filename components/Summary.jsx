import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'
import Link from 'next/link'

const Summary = ({ title, url, networkImage, summaryText }) => {
//   const [topStories, setTopStories] = useState([]);
//   const [isLoading, setIsLoading] = useState(true)
  

  useEffect(() => {
//     const retrieveSiteInfo = async () => {
//       const topStories = await getTopStories(url);
//       setTopStories(topStories);
//       setIsLoading(false)
//     };

//     retrieveSiteInfo();
  }, []);

  return (
      <div className="items-center h-auto my-3 flex space-between hover:shadow-xl">
        <img src={`${networkImage}`} className="p-[4px] w-[400px] h-[400px] object-cover"/>
        <div className='contents items-center h-auto my-5 hover:shadow-xl'>
            <h1>{title}</h1><br/>
            <p>{summaryText}</p><br/>
            <p>Read more <a href={url} target="_blank" className='cursor-pointer'>here</a></p>
        </div>
      </div>
  )
}

export default Summary;