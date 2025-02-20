import PhotoGallery from "@/components/PhotoGallery/PhotoGallery";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Transporte = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="py-8 text-center">
        <Image
          src="/TRANSPORTE.png"
          width={100}
          height={50}
          alt="Imagem de container"
          className="mx-auto w-64 h-58 "
        />
        <h1 className="text-3xl font-semibold mt-4">Transporte de Cargas</h1>
      </header>
      <section className="bg-white p-8 shadow-lg mx-auto my-8 max-w-3xl rounded-lg">
        <p className="text-xl">
          Oferecemos o serviço de transporte de cargas pesadas que é uma
          atividade logística fundamental em muitas indústrias e setores,
          envolvendo o deslocamento de mercadorias de grande peso de um ponto
          para outro. Esse tipo de transporte requer veículos e equipamentos
          especializados, como caminhões, carretas e guindastes, capazes de
          suportar e manusear cargas pesadas com segurança. O transporte de
          cargas pesadas exige um planejamento cuidadoso, incluindo a escolha do
          veículo adequado, o cálculo de rotas seguras e a conformidade com
          regulamentações de peso e dimensões. É uma parte essencial da cadeia
          de suprimentos, garantindo que produtos e materiais sejam entregues
          onde são necessários, independentemente de seu peso ou tamanho.
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

export default Transporte;
