"use client";
import { useState } from "react";
import styles from "../styles/navbar.module.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Vision", id: "vision" },
    { label: "Mission", id: "mission" },
    { label: "About", id: "about" },
    { label: "Selection Procedures", id: "selection-procedures" },
    { label: "Eligibility", id: "eligibility" },
    { label: "Other Activities", id: "other-activities" },
    { label: "Faculties", id: "faculties" },
  ];

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logo}>Hemvati Nandan Bahuguna Garhwal University <br/> (A Central University)</div>
        <ul className={`${styles.navLinks} ${isOpen ? styles.showMenu : ""}`}>
          {navItems.map((item) => (
            <li key={item.id}>
              <a href={`#${item.id}`} onClick={() => setIsOpen(false)}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className={styles.hamburger} onClick={() => setIsOpen(!isOpen)}>
          <div className={isOpen ? styles.bar1Active : styles.bar1}></div>
          <div className={isOpen ? styles.bar2Active : styles.bar2}></div>
          <div className={isOpen ? styles.bar3Active : styles.bar3}></div>
        </div>
      </div>
    </nav>
  );
}
