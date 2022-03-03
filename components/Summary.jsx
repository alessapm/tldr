import 'react-loading-skeleton/dist/skeleton.css'
import Image from 'next/image'
import { FaRobot, FaLongArrowAltLeft, FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import { MdOutlineArticle } from 'react-icons/md';
import { VscRemove, VscChromeMinimize } from 'react-icons/vsc';
import emDash from '../public/line2.jpg';

const Summary = ({ title, url, networkImage, summaryText }) => {

    return (
        <div>
            <p className="p-4 mx-10 text-c-blue flex"><span><FaLongArrowAltLeft className="text-2xl mr-1" /></span>Back to Vox Articles</p>
            <div className="h-auto my-3 flex p-4 mx-12">
                <img src={`${networkImage}`} className="p-[4px] w-[300px] h-[300px] object-cover" />
                <div className="font-sans ml-3 relative">
                    <p className="text-slate-300 font-semibold">Summary Bot</p>
                    <h1 className="text-3xl">{title}</h1><br />
                    <div className="relative">
                        <div className="flex">
                            <FaQuoteLeft className="text-c-yellow text-5xl mr-3 object-top" />
                            <p className="italic">{summaryText}</p><br />
                            <FaQuoteRight className="text-c-yellow text-5xl ml-3" />
                        </div>
                        <div className="absolute right-0 flex items-center">
                            {/* <VscRemove className="text-2xl mr-2"/> */}
                            
                            <Image width={125} src={emDash} alt="Em Dash" />
                            <FaRobot className="text-6xl" />
                        </div>
                        
                    </div>
                    <p className="text-c-blue flex absolute bottom-0 right-0">
                        
                        <a href={url} target="_blank" className="cursor-pointer">Read more </a>
                        <MdOutlineArticle className="text-2xl ml-1" />
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Summary;