import Link from "next/link";
import { ImHome3 } from "react-icons/im";
import mainLogo from '../public/Voxmedia-logo.png'
import Image from 'next/image'

const Navbar = () => {
  return (
    <>
      <div className="drop-shadow sticky opacity-90 bg-stone-100 top-0 z-50 flex items-center flex-wrap p-4 justify-between">
        <Link href="/">
          <h1 className="md:ml-10 cursor-pointer text-slate-900 font-light text-3xl">
            <ImHome3 />
          </h1>
        </Link>
        <a href="https://www.voxmedia.com" target="_blank">
        <div className="md:mr-10 mt-2"><Image width={125} height={16.5} src={mainLogo} alt="Vox Media Logo" /></div>
        </a>
      </div>
    </>
  );
};

export default Navbar;
