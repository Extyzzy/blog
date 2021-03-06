import React from "react";
import Header from '../Header';
import Footer from '../Footer';

export default function Layout({ children }: any) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}
