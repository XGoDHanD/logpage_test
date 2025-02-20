import Link from "next/link";
import { useEffect, useState } from "react";
import { AiOutlineDownCircle } from "react-icons/ai";
import { useRouter } from "next/router";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    // Close the dropdown when the route changes
    const handleRouteChange = () => {
      setIsOpen(false);
    };

    router.events.on("routeChangeStart", handleRouteChange);

    return () => {
      // Clean up the event listener when the component unmounts
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, [router]);

  // Verifique se window está definido antes de usá-lo
  const isClient = typeof window !== "undefined";

  const isMobile = isClient && window.innerWidth <= 768; // Define seu próprio limite de tela

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={toggleDropdown}
        type="button"
        className="inline-flex justify-center items-center p-2 text-blue-900 hover:text-orange-500 focus:outline-none"
      >
        <span className="font-sans text-2xl ml-4">Serviços</span>
        <AiOutlineDownCircle className="font-sans text-2xl ml-4" />
      </button>
      {isOpen && (
        <div
          className={`origin-top-right z-50 absolute right-0 ${
            isMobile ? "w-full" : "w-56"
          } rounded-md shadow-lg bg-gray-300 ring-1 ring-black ring-opacity-5`}
        >
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <Link
              href="/Service/Guindaste"
              className="block px-4 py-2 text-base text-blue-900 hover:text-orange-500"
              role="menuitem"
            >
              Guindaste
            </Link>
            <Link
              href="/Service/Munck"
              className="block px-4 py-2 text-base text-blue-900 hover:text-orange-500"
              role="menuitem"
            >
              Munck
            </Link>
            <Link
              href="/Service/Container"
              className="block px-4 py-2 text-base text-blue-900 hover:text-orange-500"
              role="menuitem"
            >
              Container
            </Link>
            <Link
              href="/Service/CestoAereo"
              className="block px-4 py-2 text-base text-blue-900 hover:text-orange-500"
              role="menuitem"
            >
              Cesto Aereo
            </Link>
            <Link
              href="/Service/RemocaoTecnica"
              className="block px-4 py-2 text-base text-blue-900 hover:text-orange-500"
              role="menuitem"
            >
              Remoçao Tecnica
            </Link>
            <Link
              href="/Service/Transporte"
              className="block px-4 py-2 text-base text-blue-900 hover:text-orange-500"
              role="menuitem"
            >
              Transporte
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
