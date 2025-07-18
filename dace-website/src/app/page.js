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

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main>
      <Navbar />
      <header
  style={{
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "1.5rem 1rem",
    backgroundColor: "#d4f3d5ff",
    flexWrap: "wrap", // ensures responsiveness on small screens
    textAlign: "center",
  }}
>
  {/* Left Image */}
  <div style={{ flex: "0 0 auto", marginBottom: "0.5rem" }}>
    <img
      src="/Picture10.jpg" // replace with your image path
      alt="Dr. B.R. Ambedkar"
      style={{
        height: "180px",
        width: "auto",
        maxWidth: "100%",
        borderRadius: "50%", // optional: to make it circular
        boxShadow: "0 2px 4px rgba(0, 0,0, 0.1)", // optional: to add a subtle shadow
      }}
    />
  </div>

  {/* Center Text */}
  <div style={{ flex: "1 1 auto", minWidth: "200px" }}>
    <h1
      style={{
        fontSize: "1.75rem",
        fontWeight: "bold",
        color: "#1e40af",
        margin: 0,
      }}
    >
      Dr. Ambedkar Centre of Excellence (DACE)
    </h1>
    <h2
      style={{
        fontSize: "1.25rem",
        fontWeight: "500",
        color: "#374151",
        margin: 0,
      }}
    >
      H.N.B. Garhwal University
    </h2>
  </div>

  {/* Right Image */}
  <div style={{ flex: "0 0 auto", marginBottom: "0.5rem" }}>
    <img
      src="/Picture11.png" // replace with your image path
      alt="HNBGU Logo"
      style={{
        height: "180px",
        width: "auto",
        maxWidth: "100%",
        borderRadius: "50%", // optional: to make it circular
        boxShadow: "0 2px 4px rgba(0, 0,0, 0.1)", // optional: to add a subtle shadow
      }}
    />
  </div>
</header>
      
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
