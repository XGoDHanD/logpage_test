import Link from "next/link";
import Image from "next/image";
import { AiOutlineInstagram, AiOutlineLinkedin } from "react-icons/ai";

export const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-between bg-gray-300">
      <div className="footer flex flex-col md:flex-row items-center justify-between w-full border-t border-stone-50-500 bg-gray-300 p-2">
        <div className="items-center flex justify-center flex-col ">
          <Image
            src="/logo.png"
            alt="logo da Log Munck"
            width="230"
            height="115"
          />
          <div className="flex items-center justify-end mt-4 md:mt-0">
            <a
              href="https://www.instagram.com/logmunck"
              target="_blank"
              rel="noopener noreferrer"
              className=" text-blue-900 hover:text-orange-500 mr-2"
            >
              <AiOutlineInstagram className="text-3xl" />
            </a>
            <a
              href="https://www.linkedin.com/company/logmunck"
              target="_blank"
              rel="noopener noreferrer"
              className=" text-blue-900 hover:text-orange-500"
            >
              <AiOutlineLinkedin className="text-3xl" />
            </a>
          </div>
        </div>
        <div className="flex items-start justify-start flex-col mt-4 md:mt-0 md:w-1/5">
          <p className="font-roboto text-xl font-bold">Endereço:</p>
          <Link
            href="https://maps.app.goo.gl/8K7HDLdJod8bFjps8"
            className="font-roboto text-base text-blue-900 hover:text-orange-500"
          >
            R. Gatasse Kalume, 22 - Messejana, Fortaleza - CE, 60842-340
          </Link>
        </div>
        <div className="flex items-start justify-start flex-col mt-4 md:mt-0 md:w-1/5">
          <p className="font-roboto text-xl font-bold">Contatos:</p>
          <div className="flex">
            {" "}
            <span className="font-roboto text-base text-gray-900">Tel:</span>
            <a
              href="tel:+558532748455"
              className="font-roboto text-base text-blue-900 hover:text-orange-500 ml-1"
            >
              +55 (85) 3274-8455
            </a>
          </div>

          <div className="flex">
            <span className="font-roboto text-base text-gray-900">
              Contato Comercial:
            </span>
            <a
              href="mailto:log_munck@hotmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="  text-blue-900 hover:text-orange-500 flex items-center justify-center ml-1"
            >
              {" "}
              log_munck@hotmail.com
            </a>
          </div>
          <div className="flex">
            <span className="font-roboto text-base text-gray-900">
              Outros Contatos:
            </span>
            <a
              href="mailto:log_munck@hotmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="  text-blue-900 hover:text-orange-500 flex items-center justify-center ml-1"
            >
              {" "}
              log_munck@hotmail.com
            </a>
          </div>
        </div>
      </div>
      <div className="border-t-2 border-gray-500 w-full items-center justify-center text-center py-2">
        <p className="font-roboto text-base text-gray-700 border-gray-50">
          &copy; 2023 I-VY Tech.
        </p>
      </div>
    </div>
  );
};
