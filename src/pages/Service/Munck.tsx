import PhotoGallery from "@/components/PhotoGallery/PhotoGallery";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Munck = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="py-8 text-center">
        <Image
          src="/MUNCK.png"
          width={100}
          height={50}
          alt="Imagem de container"
          className="mx-auto w-64 h-64 "
        />
        <h1 className="text-3xl font-semibold mt-4">
          Locação de Caminhao Munck
        </h1>
      </header>
      <section className="bg-white p-8 shadow-lg mx-auto my-8 max-w-3xl rounded-lg">
        <p className="text-xl">
          Oferecemos o aluguel de veículos equipados com guindastes tipo munck.
          Esses caminhões são projetados para realizar diversas operações de
          elevação e transporte de cargas pesadas em diferentes tipos de
          projetos, como construção civil, logística, indústria e muito mais. Ao
          optar pelo aluguel de um caminhão munck, empresas e profissionais têm
          acesso a uma solução versátil para movimentar materiais, máquinas e
          estruturas de forma eficiente e segura. Essa opção de locação
          proporciona flexibilidade operacional e elimina a necessidade de
          investir em um caminhão munck próprio, economizando recursos e
          garantindo a disponibilidade do equipamento quando necessário.
        </p>
      </section>
      <div className=" flex justify-center items-center  text-blue-900 hover:text-orange-500">
        <Link href="https://wa.me/5585985493434">
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

export default Munck;
