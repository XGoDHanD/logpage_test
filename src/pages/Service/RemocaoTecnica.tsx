import PhotoGallery from "@/components/PhotoGallery/PhotoGallery";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const RemocaoTecnica = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="py-8 text-center">
        <Image
          src="/remoção.png"
          width={100}
          height={50}
          alt="Imagem de container"
          className="mx-auto w-64 h-64 "
        />
        <h1 className="text-3xl font-semibold mt-4">Remoção de Técnica</h1>
      </header>
      <section className="bg-white p-8 shadow-lg mx-auto my-8 max-w-3xl rounded-lg">
        <p className="text-xl">
          Oferecemos o serviço de remoção técnica que é um processo
          especializado envolvendo a retirada controlada e segura de elementos,
          equipamentos ou materiais de um determinado local. Geralmente, é
          aplicada em situações em que a remoção convencional seria complexa,
          perigosa ou inviável. Essa técnica pode ser empregada em diversas
          áreas, como engenharia, construção civil, indústria, meio ambiente e
          até mesmo na área da saúde, quando se trata da remoção de equipamentos
          médicos complexos. A remoção técnica requer planejamento detalhado,
          equipamentos adequados e profissionais especializados para garantir a
          execução segura e eficiente do processo, minimizando riscos e danos ao
          ambiente.
        </p>
      </section>
      <div className=" flex justify-center items-center  text-blue-900 hover:text-orange-500">
        <Link href="https://wa.me/5585985493434 ">
          <span className="text-5xl font-sans font-extrabold mt-4">
            {" "}
            Solicite seu orçamento !!!!
          </span>
        </Link>
      </div>
      <section className="bg-gray-100 py-8">
        <div className="bg-white p-4 rounded-lg shadow text-center ">
          <PhotoGallery />
        </div>
      </section>
    </div>
  );
};

export default RemocaoTecnica;
