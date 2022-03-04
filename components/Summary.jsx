import 'react-loading-skeleton/dist/skeleton.css'
import Image from 'next/image'
import { FaRobot, FaLongArrowAltLeft, FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import { MdOutlineArticle } from 'react-icons/md';
import { VscRemove, VscChromeMinimize } from 'react-icons/vsc';
import emDash from '../public/line2.jpg';

const Summary = ({ title, url, networkImage, summaryText }) => {

    return (
        <div>
            <p className="px-4 mx-10 text-c-blue flex"><span><FaLongArrowAltLeft className="text-2xl mr-1" /></span>Back to Vox Articles</p>
            <div className="h-auto my-3 flex p-5 mx-12 border-b-2 border-c-blue">
                <img src={`${networkImage}`} className="p-[4px] w-[300px] h-[300px] object-cover" />
                <div className="font-sans ml-3 relative pb-12">
                    <p className="text-slate-300 font-semibold">Summary Bot</p>
                    <h1 className="text-3xl">{title}</h1><br />
                    <div className='fjdklsa'>
                        <div className="flex justify-center space-between">
                            <FaQuoteLeft className="text-c-yellow text-4xl mr-3 object-top" />
                            <p className="italic max-w-[700px]">{summaryText}</p><br />
                            <FaQuoteRight className="text-c-yellow text-4xl ml-3" />
                        </div>
                        <div className="flex w-[200px] items-center justify-between float-right">
                            <Image width={125} height={1} src={emDash} alt="Em Dash" className="mr-4"/>
                            <FaRobot className="text-6xl" />
                        </div>
                        
                    </div>
                    <p className="text-c-blue flex absolute bottom-0 right-0">
                        <a href={url} target="_blank" className="cursor-pointer">Read more</a>
                     <MdOutlineArticle className="text-2xl ml-1" />   
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Summary;