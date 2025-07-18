import styles from "../styles/vision.module.css";
import { AiOutlineCheckCircle } from "react-icons/ai";

export default function Vision() {
  return (
    <section id="vision" className={styles.visionSection}>
      <h2 className={styles.heading}>Vision</h2>
      <ul className={styles.list}>
        <li className={styles.item}>
          <AiOutlineCheckCircle className={styles.icon} />
          <p>
            Dr Ambedkar Centre of Excellence (DACE) aims to empower Scheduled
            Caste (SC) and Other Backward Class (OBC) students by providing them
            with quality coaching and opportunities for learning, excellence,
            personality development, and acquisition of competitive skills.
          </p>
        </li>
        <li className={styles.item}>
          <AiOutlineCheckCircle className={styles.icon} />
          <p>
            DACE seeks to play a significant role in the holistic development of
            SC and OBC students, focusing on preparing them for competitive
            exams such as the Civil Services Examination conducted by UPSC and
            State Public Service Commissions.
          </p>
        </li>
      </ul>
    </section>
  );
}
