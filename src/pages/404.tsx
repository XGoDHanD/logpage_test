import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const NotFound = () => {
  return (
    <>
      <Head>
        <title>logmuck | 404</title>
      </Head>
      <div>
        <div className="flex  flex-col items-center min-h-screen w-screen bg-slate-50">
          <div className=" mt-24 mb-20 flex flex-col items-center">
            <Image
              src="/erro-404.png"
              alt={"erro 404"}
              width={300}
              height={480}
            />
          </div>

          <div className="mb-12">
            <p className="text-3xl font-semibold">
              Oops, Página Não Encontrada
            </p>
          </div>
          <div className="flex flex-col items-center">
            <samp className="text-2xl font-normal text-blue-900 ">
              Clique no botão abaixo para{" "}
            </samp>
            <samp className="text-2xl font-normal text-blue-900 ">
              Voltar a pagina inicial.
            </samp>
            <Link href="/">
              <button className="mt-4 p-2 text-blue-900 text-3xl hover:text-orange-500 bg-gray-400 hover:bg-gray-50 focus:bg-blue-50">
                Voltar ao inicio
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
