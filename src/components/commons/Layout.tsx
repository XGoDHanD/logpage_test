
import { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

interface LayoutProps {
    children: ReactNode;
}

export const Layout = ({ children}: LayoutProps ) => {
  return ( <>
    <Header/>
    {children}
    <Footer/>
    </>
  )
}