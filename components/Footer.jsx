import { RxFigmaLogo } from "react-icons/rx";
import Link from "next/link";
import {
  FaXTwitter,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="p-4 md:px-16 grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-start md:justify-items-center lg:justify-items-start gap-2">
      <div className="max-w-80 px-2 md:px-6 py-3 flex flex-col">
        <Link href={"/"} >
        <h1 className="logo text-lg font-semibold flex justify-start items-center mb-3">
          <RxFigmaLogo className="text-2xl font-semibold" /> Figma
        </h1>
        </Link>
        <div className="social-newtwork-link flex justify-start items-center gap-3">
            <Link href={'/'}><FaXTwitter className="text-2xl" /></Link>
            <Link href={'/'}><FaInstagram className="text-2xl" /></Link>
            <Link href={'/'}><FaYoutube className="text-2xl" /></Link>
            <Link href={'/'}><FaLinkedin className="text-2xl" /></Link>
        </div>
      </div>

      <div className="max-w-80 px-2 md:px-6 py-3">
        <h3 className="logo text-lg font-semibold flex justify-start items-center mb-3">
          Use Case
        </h3>
        <ul className="flex flex-col gap-1">
            <li><Link href={"/"} className="font-light">UI Design</Link></li>
            <li><Link href={"/"} className="font-light">UX Design</Link></li>
            <li><Link href={"/"} className="font-light">Wireframing</Link></li>
            <li><Link href={"/"} className="font-light">Diagramming</Link></li>
            <li><Link href={"/"} className="font-light">Brainstorming</Link></li>
            <li><Link href={"/"} className="font-light">Online whiteboard</Link></li>
            <li><Link href={"/"} className="font-light">Team collaboration</Link></li>
        </ul>
        
        
      </div>

      <div className="max-w-80 px-2 md:px-6 py-3">
        <h3 className="logo text-lg font-semibold flex justify-start items-center mb-3">
          Explore
        </h3>
        <ul className="flex flex-col gap-1">
            <li><Link href={"/"} className="font-light">Design</Link></li>
            <li><Link href={"/"} className="font-light">Prototyping</Link></li>
            <li><Link href={"/"} className="font-light">Development features</Link></li>
            <li><Link href={"/"} className="font-light">Design systems</Link></li>
            <li><Link href={"/"} className="font-light">Collaboration features</Link></li>
            <li><Link href={"/"} className="font-light">Design process</Link></li>
            <li><Link href={"/"} className="font-light">FigJam</Link></li>
        </ul>
      </div>

      <div className="max-w-80 px-2 md:px-6 py-3">
        <h3 className="logo text-lg font-semibold flex justify-start items-center mb-3">
          Resources
        </h3>
        <ul className="flex flex-col gap-1">
            <li><Link href={"/"} className="font-light">Blog</Link></li>
            <li><Link href={"/"} className="font-light">Best practices</Link></li>
            <li><Link href={"/"} className="font-light">Colors</Link></li>
            <li><Link href={"/"} className="font-light">Color wheel</Link></li>
            <li><Link href={"/"} className="font-light">Support</Link></li>
            <li><Link href={"/"} className="font-light">Developers</Link></li>
            <li><Link href={"/"} className="font-light">Resource library</Link></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
