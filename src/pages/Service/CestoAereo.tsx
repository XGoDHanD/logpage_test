import PhotoGallery from "@/components/PhotoGallery/PhotoGallery";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CestoAereo = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="py-8 text-center">
        <Image
          src="/CESTO.png"
          width={100}
          height={50}
          alt="Imagem de cesto"
          className="mx-auto w-64 h-72 p-2 "
        />
        <h1 className="text-3xl font-semibold mt-4">Cesto Aéreo</h1>
      </header>
      <section className="bg-white p-8 shadow-lg mx-auto my-8 max-w-3xl rounded-lg">
        <p className="text-xl">
          Oferecemos o serviço de utilização de cesto aéreo para a elevação de
          pessoas. A operação envolve o uso de equipamentos especializados para
          elevar trabalhadores e materiais a alturas consideráveis. Essa locação
          é frequentemente necessária em diversas indústrias para realizar
          tarefas em locais de difícil acesso, como manutenção de
          infraestruturas, instalação de equipamentos, poda de árvores ou
          reparos em fachadas. A locação de cesto aéreo oferece uma solução
          eficaz e segura para realizar essas atividades, garantindo acesso a
          alturas elevadas com controle e precisão. É uma opção conveniente para
          empresas que necessitam ocasionalmente desse tipo de acesso sem a
          necessidade de investir na compra desses equipamentos.
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

export default CestoAereo;
