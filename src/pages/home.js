import React from "react";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import AboutMe from "../components/homeBody/homeBody";
export default function HomePage() {
  return (
    <div>
      <Header />
      <AboutMe />
      <Footer />
    </div>
  );
}
