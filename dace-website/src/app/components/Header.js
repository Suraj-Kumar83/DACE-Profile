"use client";
import styles from "../styles/header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      {/* Left Image */}
      <div className={styles.imageWrapper}>
        <img
          src="/Picture10.jpg" // put your image in /public folder
          alt="Dr. B.R. Ambedkar"
          className={styles.image}
        />
      </div>

      {/* Center Text */}
      <div className={styles.centerText}>
        <h1>Dr. Ambedkar Centre of Excellence (DACE)</h1>
        <h2>H.N.B. Garhwal University</h2>
      </div>

      {/* Right Image */}
      <div className={styles.imageWrapper}>
        <img
          src="/Picture11.png" // put your image in /public folder
          alt="HNBGU Logo"
          className={styles.image}
        />
      </div>
    </header>
  );
}
