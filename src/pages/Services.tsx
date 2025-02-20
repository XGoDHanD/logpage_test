import Image from "next/image";

const Services = () => {
  return (
    <main className="m-1.5 justify-between flex w-screen flex-col">
      <div className="flex flex-row items-center border-white border-2 p-4">
        <div className="mr-4">
          <Image
            src="/guindaste-_1_.svg"
            alt="Guindaste"
            width={200}
            height={100}
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-2">Guindaste</h1>
          <span className="text-gray-700 p-2">
            Oferecemos soluções de içamento e movimentação de cargas pesadas para diversos setores. Com guindastes modernos e uma equipe capacitada, garantimos serviços de qualidade e segurança. Conte conosco para projetos eficientes e confiáveis.
          </span>
        </div>
      </div>

      <div className="flex flex-row items-center border-white border-2 p-4">
        <div className="mr-4">
          <Image
            src="/transporte.png"
            alt="Retirada-de-carga"
            width={200}
            height={100}
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-2">Transporte</h1>
          <span className="text-gray-700 p-2">
            Oferecemos soluções de içamento e movimentação de cargas pesadas para diversos setores. Com guindastes modernos e uma equipe capacitada, garantimos serviços de qualidade e segurança. Conte conosco para projetos eficientes e confiáveis.
          </span>
        </div>
      </div>

      <div className="flex flex-row items-center border-white border-2 p-4">
        <div className="mr-4">
          <Image
            src="/cesto.png"
            alt="Cesto Aéreo"
            width={200}
            height={100}
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-2">Cesto Aéreo</h1>
          <span className="text-gray-700 p-2">
            Oferecemos soluções de içamento e movimentação de cargas pesadas para diversos setores. Com guindastes modernos e uma equipe capacitada, garantimos serviços de qualidade e segurança. Conte conosco para projetos eficientes e confiáveis.
          </span>
        </div>
      </div>
      <div className="flex flex-row items-center border-white border-2 p-4">
        <div className="mr-4">
          <Image
            src="/carga.svg"
            alt="Retirada-de-carga"
            width={200}
            height={100}
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-2">Retirada de Carga Técnica</h1>
          <span className="text-gray-700 p-2">
            Oferecemos soluções de içamento e movimentação de cargas pesadas para diversos setores. Com guindastes modernos e uma equipe capacitada, garantimos serviços de qualidade e segurança. Conte conosco para projetos eficientes e confiáveis.
          </span>
        </div>
      </div>
    </main>
  );
};

export default Services;
