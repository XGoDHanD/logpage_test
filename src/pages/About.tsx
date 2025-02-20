import Head from "next/head";
import Link from "next/link";
import {
  AiOutlineEye,
  AiOutlineBulb,
  AiOutlineSafetyCertificate,
} from "react-icons/ai";

const About = () => {
  return (
    <div className="bg-gray-100 w-screen">
      <div className="container mx-auto py-10 max-w-screen-xl">
        <div className=" flex justify-center items-center">
          {" "}
          <h1 className="text-5xl flex font-extrabold mb-6 items-center">
            Log Munck - Transporte e Remoção Técnica
          </h1>
        </div>

        <div className="bg-white rounded-lg p-8 shadow-md">
          <div className="flex items-center mb-8">
            <AiOutlineEye className="text-4xl mr-4" />
            <h2 className="text-3xl font-bold flex items-center">Visão</h2>
          </div>
          <p className="text-lg text-gray-700 mb-6">
            Ser uma referência no setor de locação de veículos, remoções
            técnicas e prestação de serviços no Nordeste, oferecendo sempre os
            melhores serviços e garantindo o máximo custo-benefício para nossos
            clientes.
          </p>
          <div className="flex items-center mb-8">
            <AiOutlineBulb className="text-4xl mr-4" />
            <h2 className="text-3xl font-bold flex items-center">Missão</h2>
          </div>
          <p className="text-lg text-gray-700 mb-6">
            Atender com eficiência e excelência, garantindo a máxima satisfação
            de clientes, parceiros e colaboradores. Buscamos constantemente a
            qualidade em nossos serviços, preços competitivos e o
            desenvolvimento contínuo em um cenário econômico nacional
            desafiador.
          </p>
          <div className="flex items-center mb-8">
            <AiOutlineSafetyCertificate className="text-4xl mr-4" />
            <h2 className="text-3xl font-bold flex items-center">Valores</h2>
          </div>
          <ul className="list-disc list-inside text-lg text-gray-700">
            <li>
              Qualidade: Compromisso com serviços de excelência, seguindo os
              mais altos padrões do mercado.
            </li>
            <li>
              Eficiência: Encontrar soluções eficientes e otimizadas para
              atender às necessidades dos nossos clientes.
            </li>
            <li>
              Pontualidade: Cumprir prazos acordados, garantindo confiabilidade
              em nossos serviços.
            </li>
            <li>
              Ética: Agir com integridade, transparência e honestidade em todas
              as nossas operações e relacionamentos.
            </li>
            <li>
              Segurança: Priorizar a segurança em todas as atividades, adotando
              medidas adequadas para proteger pessoas e bens.
            </li>
            <li>
              Responsabilidade Socioambiental: Compromisso com práticas
              sustentáveis e responsáveis, minimizando o impacto ambiental das
              nossas operações.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
