import styles from "../styles/links.module.css";
import { ExternalLink } from "lucide-react"; // icon library (install if not already)

export default function LinksPage() {
  return (
    <section id="links-page" className={styles.section}>
      <h2 className={styles.heading}>Other University DACE Websites</h2>

      <div className={styles.linkGrid}>
        {/* Link 1 */}
        <a
          href="https://cuhimachal.ac.in/ambedkar_dace/index.php" // put actual URL
          target="_blank"
          rel="noopener noreferrer"
          className={styles.linkCard}
        >
          <span>DACE of Central University Himachal Pradesh</span>
          <ExternalLink className={styles.icon} />
        </a>

        {/* Link 2 */}
        <a
          href="https://curaj.ac.in/acts/dr-ambedkar-centre-excellence-dace" // put actual URL
          target="_blank"
          rel="noopener noreferrer"
          className={styles.linkCard}
        >
          <span>DACE of Central University of Rajasthan</span>
          <ExternalLink className={styles.icon} />
        </a>

        {/* Link 3 */}
        <a
          href="https://www.cuh.ac.in/department.aspx?departmentid=5085&subid=5924" // put actual URL
          target="_blank"
          rel="noopener noreferrer"
          className={styles.linkCard}
        >
          <span>DACE of Central University of Haryana</span>
          <ExternalLink className={styles.icon} />
        </a>
      </div>
    </section>
  );
}
