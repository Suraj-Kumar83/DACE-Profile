import Image from "next/image";
import styles from "../styles/faculties.module.css";

export default function Faculties() {
  return (
    <section id="faculties" className={styles.section}>
      <h2 className={styles.heading}>Our Faculties</h2>
      <div className={styles.grid}>
        {/* Faculty 1 */}
        <div className={styles.card}>
          <Image
            src="/Picture7.jpg"
            alt="Dr. Prakash K. Singh"
            width={400}
            height={400}
            className={styles.image}
          />
          <h3 className={styles.name}>Dr. Prakash K. Singh</h3>
          <p className={styles.details}>
            (Social Sciences)<br />
            (Joined on 7 Nov. 2022)<br />
            M.A. Geography<br />
            NET-JRF Qualified<br />
            03 times UPSC mains exam appeared<br />
            Multiple State Services Exams Qualified
          </p>
        </div>

        {/* Faculty 2 */}
        <div className={styles.card}>
          <Image
            src="/Picture8.jpg"
            alt="Dr. Ashish Bahuguna"
            width={400}
            height={400}
            className={styles.image}
          />
          <h3 className={styles.name}>Dr. Ashish Bahuguna</h3>
          <p className={styles.details}>
            (Science &amp; Technology)<br />
            (Joined on 10 Nov. 2022)<br />
            M.Sc. Chemistry<br />
            NET-JRF, GATE, U-SET Qualified<br />
            PhD from IIT Mandi<br />
            Postdoc (Israel)<br />
            02 Times UPSC-CDS Qualified
          </p>
        </div>

        {/* Faculty 3 */}
        <div className={styles.card}>
          <Image
            src="/Picture9.jpg"
            alt="Dr. Bharat K. Rajak"
            width={400}
            height={400}
            className={styles.image}
          />
          <h3 className={styles.name}>Dr. Bharat K. Rajak</h3>
          <p className={styles.details}>
            (Social Sciences)<br />
            (Joined on 18 Nov. 2022)<br />
            M.A. Economics<br />
            M.A. Commerce<br />
            NET-JRF Qualified<br />
            PhD (Commerce)<br />
            Ex-faculty Unacademy
          </p>
        </div>
      </div>
    </section>
  );
}
