"use client";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Vision from "./components/Vision";
import Mission from "./components/Mission";
import About from "./components/About";
import SelectionProcedure from "./components/SelectionProcedures";
import Eligibility from "./components/Eligibility";
import OtherActivities from "./components/OtherActivities";
import Faculties from "./components/Faculties";
import LinksPage from "./components/Links";
import DACECarousel from "./components/Carousel";
import LeadershipSection from "./components/Leader";
import Footer from "./components/Footer";
import Header from "./components/Header";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main>
      <Navbar />
       <section id="header" style={{ scrollMarginTop: "80px", maxWidth: "95rem", margin: "0 auto" }}>
        <Header/>
      </section>
      
      <section id="carousel" style={{ scrollMarginTop: "80px", maxWidth: "95rem", margin: "0 auto" }}>
        <DACECarousel/>
      </section>
      <section id="leaders" style={{ scrollMarginTop: "80px", padding: "3rem 1rem", maxWidth: "64rem", margin: "0 auto" }}>
        <LeadershipSection/>
      </section>
      <section id="mission" style={{ scrollMarginTop: "80px", padding: "3rem 1rem", maxWidth: "64rem", margin: "0 auto" }}>
        <Vision/>
      </section>
      <section id="mission" style={{ scrollMarginTop: "80px", padding: "3rem 1rem", maxWidth: "64rem", margin: "0 auto" }}>
        <Mission/>
      </section>

      <section id="about" style={{ scrollMarginTop: "80px", padding: "3rem 1rem", maxWidth: "64rem", margin: "0 auto" }}>
        <About/>
      </section>

      <section id="selection-procedures" style={{ scrollMarginTop: "80px", padding: "3rem 1rem", maxWidth: "64rem", margin: "0 auto" }}>
        <SelectionProcedure />
      </section>

      <section id="eligibility" style={{ scrollMarginTop: "80px", padding: "3rem 1rem", maxWidth: "64rem", margin: "0 auto" }}>
        <Eligibility />
      </section>

      <section id="other-activities" style={{ scrollMarginTop: "80px", padding: "3rem 1rem", maxWidth: "64rem", margin: "0 auto" }}>
        <OtherActivities/>
      </section>

      <section id="faculties" style={{ scrollMarginTop: "80px", padding: "3rem 1rem", maxWidth: "64rem", margin: "0 auto" }}>
        <Faculties />
      </section>


      <section id="links" style={{ scrollMarginTop: "80px", padding: "3rem 1rem", maxWidth: "64rem", margin: "0 auto" }}>
        <LinksPage />
      </section>
      <section id="footer" style={{ scrollMarginTop: "80px", maxWidth: "100rem", margin: "0 auto" }}>
        <Footer />
      </section>
    </main>
  );
}
