import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineWhatsApp, AiOutlineMenu } from "react-icons/ai";
import { AiOutlineInstagram, AiOutlineLinkedin, AiFillPhone , AiFillMail} from "react-icons/ai";
import Dropdown from "../dropdown/Dropdown";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleWhatsAppClick = () => {
    window.location.href = "https://wa.me/5585985493434";
  };

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

 
  return (
    <header className="bg-gray-300  flex-row">
      <div className="hidden sm:flex items-center justify-between w-screen mt-0.5 px-80 bg-blue-800">
      <div className="flex items-center justify-center ">
        <a
          href="tel:+558532748455"
          target="_blank"
          rel="noopener noreferrer"
          className=" text-gray-200 hover:text-orange-500 flex items-center justify-center mr-2 "
        >
          <AiFillPhone className="text-xl mr-1" />
          <span className="text-center text-base pt-1">85 3274-8455</span>
        </a>
        <span className="text-gray-200">|</span>
        <a
          href="mailto:log_munck@hotmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="  text-gray-200 hover:text-orange-500 flex items-center justify-center "
        >
          <AiFillMail className="text-xl ml-2 mr-1" />
          <span>log_munck@hotmail.com</span>
        </a>
        </div>
        <div className="flex items-center justify-center">
          <a
          href="https://www.instagram.com/logmunck"
          target="_blank"
          rel="noopener noreferrer"
          className="  text-gray-200 hover:text-orange-500 mr-2"
        >
          <AiOutlineInstagram className="text-3xl" />
        </a>
        <a
          href="https://www.linkedin.com/company/logmunck"
          target="_blank"
          rel="noopener noreferrer"
          className="  text-gray-200 hover:text-orange-500 mr-2"
        >
          <AiOutlineLinkedin className="text-3xl" />
        </a>
        <a
          href="https://wa.me/5585985493434"
          target="_blank"
          rel="noopener noreferrer"
          className="  text-gray-200 hover:text-orange-500"
        >
          <AiOutlineWhatsApp className="text-3xl" />
        </a>
        </div>
      </div>
      <div className="flex items-center justify-between max-w-screen-xl mx-auto">
        <div className="w-1/4 p-2">
         <Link href="/">
          <Image
            src="/logo.png"
            alt="logo da logmunck"
            layout="responsive"
            width={200}
            height={100}
          /></Link> 
        </div>
        <nav className="hidden sm:flex flex-grow ml-10 justify-between items-center">
          <>
            <Link
              href="/"
              className="font-sans text-2xl text-blue-900 hover:text-orange-500 ml-4"
            >
              Início
            </Link>
            <Dropdown/>
            <Link
              href="/About"
              className="font-sans text-2xl text-blue-900 hover:text-orange-500 ml-4"
            >
              Quem somos
            </Link>
            <Link
              href="/Gallery"
              className="font-sans text-2xl text-blue-900 hover:text-orange-500 ml-4"
            >
              Galeria
            </Link>
          </>
          <div className=" flex items-center justify-center ">
            <button
              onClick={handleWhatsAppClick}
              className="w-full border-blue-900 border-2 flex items-center rounded-lg p-1 transition-colors duration-300 hover:border-orange-500 text-xl text-blue-900 hover:text-orange-500"
            >
              <AiOutlineWhatsApp size="2em" />
              <span className="ml-2">Atendimento</span>
            </button>
          </div>
        </nav>
        <div className="flex items-center justify-end w-1/4 sm:w-auto">
          <div className="ml-3 sm:ml-10 sm:hidden">
            <button
              onClick={handleMenuToggle}
              className="text-2xl p-2 focus:outline-none"
            >
              <AiOutlineMenu />
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="bg-gray-300  mt-5 p-2 sm:hidden">
          <Link href="/" className="font-sans text-2xl block py-2 text-blue-900 hover:text-orange-500">
            Início
          </Link>
          <div className=" flex -ml-6" ><Dropdown/></div>
          
          <Link href="/About" className="font-sans text-2xl block py-2 text-blue-900 hover:text-orange-500">
            Quem somos
          </Link>
          <Link href="/Gallery" className="font-sans text-2xl block py-2 text-blue-900 hover:text-orange-500">
            Galeria
          </Link>
          <button
            onClick={handleWhatsAppClick}
            className="w-full border-blue-900 border-2 flex items-center rounded-md p-1 transition-colors duration-300 hover:border-orange-500 text-2xl text-blue-900 hover:text-orange-500 mt-4"
          >
            <AiOutlineWhatsApp size="3em" />
            <span className="ml-2">Atendimento</span>
          </button>
        </div>
      )}
    </header>
  );
};
