import Image from "next/image";
import styles from "../styles/leaders.module.css";

export default function LeadershipSection() {
  return (
    <section className={styles.leadersSection}>

      <div className={styles.cardsContainer}>
        {/* Vice Chancellor */}
        <div className={styles.card}>
          <div className={styles.imageWrapper}>
            <Image
              src="/Picture12.jpg" 
              alt="Vice Chancellor"
              fill
              sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
              style={{ marginTop: "0.1rem"}}
            />
          </div>
          <h3 className={styles.cardTitle}>Prof. Shri Prakash Singh</h3>
          <p className={styles.cardSubtitle}>Hon’ble Vice Chancellor</p>
          <p className={styles.cardDesc}>
           Prof. Shri Prakash Singh is the Hon’ble Vice Chancellor of H.N.B.
            Garhwal University. Under his visionary leadership, DACE strives to
            empower SC and OBC students by providing quality education and
            guidance for competitive examinations and holistic development.
          </p>
        </div>

        {/* DACE Coordinator */}
        <div className={styles.card}>
          <div className={styles.imageWrapper}>
            <Image
              src="/Picture13.png" // place in /public
              alt="DACE Coordinator"
              fill
              sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
              style={{ marginTop: "-0.1rem" }}
            />
          </div>
          <h3 className={styles.cardTitle}>Prof. M.M. Semwal</h3>
          <p className={styles.cardSubtitle}>DACE Program Coordinator</p>
          <p className={styles.cardDesc}>
            Prof. M.M. Semwal coordinates the Dr. Ambedkar Centre of Excellence,
            ensuring smooth implementation of the Free Coaching Scheme and
            mentoring students to achieve excellence in UPSC and State PSC
            exams.
          </p>
        </div>
      </div>
    </section>
  );
}
