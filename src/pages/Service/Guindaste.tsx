import PhotoGallery from "@/components/PhotoGallery/PhotoGallery";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Guindaste = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="py-8 text-center">
        <Image
          src="/pGUINDASTE.png"
          width={150}
          height={75}
          alt="Imagem do guindaste"
          className="mx-auto w-64 h-60 "
        />
        <h1 className="text-3xl font-semibold mt-4">Locação de Guindaste</h1>
      </header>
      <section className="bg-white p-8 shadow-lg mx-auto my-8 max-w-3xl rounded-lg">
        <p className="text-xl">
          Oferecemos o serviço de içamento e movimentação de cargas de diversos
          tamanhos e pesos. Os guindastes são equipamentos de elevação robustos
          e versáteis, amplamente utilizados na construção, indústria e projetos
          de grande porte. Ao alugar um guindaste, empresas e empreiteiras podem
          contar com uma solução eficiente para movimentar cargas pesadas,
          posicionar materiais em locais de difícil acesso e realizar tarefas de
          elevação diversas. Essa opção de locação proporciona flexibilidade e
          economia, permitindo o acesso a equipamentos especializados sem a
          necessidade de investimento significativo na compra e manutenção de
          guindastes próprios.
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

export default Guindaste;
