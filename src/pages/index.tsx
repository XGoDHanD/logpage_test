import { useState } from "react";
import Image from "next/image";
import Head from "next/head";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import Link from "next/link";

const images = ["/home3.jpg", "/home2.jpg", "/home1.jpg"];

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNextImage = () => {
    if (currentImageIndex < images.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  const handlePreviousImage = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  return (
    <>
      <Head>
        <title>home | logmuck</title>
      </Head>
      <main className="flex flex-col items-center justify-center min-h-screen w-screen bg-slate-50">
        <div className="flex items-center justify-center mt-4 w-screen relative">
          <button
            onClick={handlePreviousImage}
            disabled={currentImageIndex === 0}
            className="mr-2 p-2 rounded-full  text-blue-900 text-3xl hover:text-orange-500 bg-gray-300 hover:bg-gray-50 focus:bg-blue-50 disabled:hidden disabled:cursor-not-allowed absolute left-0 top-1/2 transform -translate-y-1/2"
          >
            <AiOutlineLeft size={20} />
          </button>
          <div className="max-w-full max-h-full">
            <Image
              src={images[currentImageIndex]}
              alt="Image"
              layout="responsive"
              width={1800}
              height={1080}
            />
          </div>
          <button
            onClick={handleNextImage}
            disabled={currentImageIndex === images.length - 1}
            className="flex mr-4 p-2 rounded-full  text-blue-900 text-3xl hover:text-orange-500 bg-gray-300 hover:bg-gray-50 focus:bg-blue-50 disabled:hidden disabled:cursor-not-allowed absolute right-0 top-1/2 transform -translate-y-1/2"
          >
            <AiOutlineRight size={20} />
          </button>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-between m-4 w-3/5 p-10 bg-gray-200 rounded-lg ">
          <Link
            href="/Service/Guindaste"
            className="mb-2 flex flex-col items-center text-center  text-blue-900 hover:text-orange-500"
          >
            <Image
              src="/pGUINDASTE.png"
              alt="Image"
              width={150}
              height={75}
              className="mx-auto"
            />
            <span className="text-lg mr-4">Guindaste</span>
          </Link>
          <Link
            href="/Service/Container"
            className="mb-2 flex flex-col items-center text-center  text-blue-900 hover:text-orange-500"
          >
            <Image
              src="/container.png"
              alt="Image"
              width={150}
              height={75}
            />
            <span className="text-lg">Container</span>
          </Link>
          <Link
            href="/Service/CestoAereo"
            className="mb-2 flex flex-col items-center text-center  text-blue-900 hover:text-orange-500"
          >
            <Image src="/CESTO.png" alt="Image" width={150} height={75} />
            <span className="text-lg">Cesto aéreo</span>
          </Link>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-between m-4 w-3/5 p-10 bg-gray-200 rounded-lg ">
          <Link
            href="/Service/Munck"
            className="mb-2 flex flex-col items-center text-center  text-blue-900 hover:text-orange-500"
          >
            <Image src="/MUNCK.png" alt="Image" width={150} height={75} />
            <span className="text-lg">Munck</span>
          </Link>
          <Link
            href="/Service/RemocaoTecnica"
            className="mb-2 flex flex-col items-center text-center  text-blue-900 hover:text-orange-500"
          >
            <Image
              src="/remoção.png"
              alt="Image"
              width={130}
              height={75}
            />
            <span className="text-lg">Remoção Técnica</span>
          </Link>
          <Link
            href="/Service/Transporte"
            className="mt-3 flex flex-col items-center text-center  text-blue-900 hover:text-orange-500"
          >
            <Image
              src="/TRANSPORTE.png"
              alt="Image"
              width={200}
              height={100}
            />
            <span className="text-lg">Transporte</span>
          </Link>
        </div>
      </main>
    </>
  );
}
