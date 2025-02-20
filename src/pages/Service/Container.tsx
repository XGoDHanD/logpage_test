import PhotoGallery from "@/components/PhotoGallery/PhotoGallery";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Container = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="py-8 text-center">
        <Image
          src="/container.png"
          width={100}
          height={50}
          alt="Imagem de container"
          className="mx-auto w-64 h-64"
        />
        <h1 className="text-3xl font-semibold mt-4">Transporte de Container</h1>
      </header>
      <section className="bg-white p-8 shadow-lg mx-auto my-8 max-w-3xl rounded-lg">
        <p className="text-xl">
          Oferecemos o serviço de transporte de containers de armazenamento.
          Esses containers são estruturas metálicas resistentes e impermeáveis,
          projetadas para armazenar uma variedade de bens e mercadorias de forma
          segura e protegida contra intempéries e furtos. Empresas e indivíduos
          podem alugar containers para várias finalidades, como armazenar
          pertences durante uma mudança, guardar produtos em canteiros de obras,
          ou até mesmo como espaço de armazenamento temporário em eventos.
          Oferecemos todo o suporte na operação de transporte e movimentação
          deste tipo de material.
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
        <div className="bg-white p-4 rounded-lg shadow">
          <PhotoGallery />
        </div>
      </section>
    </div>
  );
};

export default Container;
