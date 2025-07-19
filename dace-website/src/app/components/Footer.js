"use client";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import styles from "../styles/footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div>
          <h3 className={styles.heading}>Important Links</h3>
<ul className={styles.linkList}>
  <li>
    <a
      href="https://email.gov.in/"
      target="_blank"
      rel="noopener noreferrer"
    >
      HNBGU Mail Access
    </a>
  </li>
  <li>
    <a
      href="https://www.hnbgu.ac.in/convocation/notifications"
      target="_blank"
      rel="noopener noreferrer"
    >
      12th Convocation
    </a>
  </li>
  <li>
    <a
      href="https://www.hnbgu.ac.in/phonebook"
      target="_blank"
      rel="noopener noreferrer"
    >
      Phonebook
    </a>
  </li>
</ul>
        </div>
        <div>
          <h3 className={styles.heading}>For Contact</h3>
          <p className={styles.textBlock}>Dr. Ambedkar Centre of Excellence (DACE)</p>
          <p className={styles.textBlock}>
            HEMVATI NANDAN BAHUGUNA GARHWAL UNIVERSITY( A Central University ) <br />
            6RH3+4CF, Madhi Chauras, Srinagar, Naur, Uttarakhand 246174
          </p>
          <p className={styles.textBlock}><strong>Phone:</strong> +91-9412079266</p>
          <p className={styles.textBlock}><strong>Email:</strong> mmsemwal@gmail.com</p>
        </div>

        {/* Column 3 - About */}
        <div>
          <h3 className={styles.heading}>Introduction</h3>
          <p className={styles.textBlock}>
             DACE at the H.N.B. Garhwal University was established in the month of April 2022 by Dr. Ambedkar Foundation, Ministry of Social Justice & Empowerment, Government of India. Dr. Ambedkar Centre of Excellence (DACE) scheme is to empower Scheduled Caste (SC) and Other Backward Classes (OBC) students in competitive exams by providing better opportunities for learning and excellence through quality coaching, personality development and acquisition of competitive skills.
          </p>

          <p className={styles.textBlock}>Designed and Developed by <a href="https://www.linkedin.com/in/varun-barthwal-623876202/" alt="portfoilio links" style={{textDecoration:"none", color:"white"}} >Dr. Varun Barthwal ,</a> Assistant Professor, B.Tech., HoD
            (IT Department), HNBGU. and <a href="https://my-portfolio-ebon-three-20.vercel.app/" alt="portfoilio links" style={{textDecoration:"none", color:"white"}} >Suraj Kumar,</a> B.Tech. 4th Year (CSE).
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className={styles.bottomBar}>
        © {new Date().getFullYear()} Dr. Ambedkar Centre of Excellence, HNBGU. All rights reserved. <br />  

      </div>
    </footer>
  );
}
