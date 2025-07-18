import styles from "../styles/mission.module.css";
import { AiOutlineCheckCircle } from "react-icons/ai";

export default function Mission() {
  return (
    <section id="mission" className={styles.missionSection}>
         <h2 className={styles.heading}>Mission</h2>
      <ul className={styles.list}>
        <li className={styles.item}>
          <AiOutlineCheckCircle className={styles.icon} />
          <p>
            The mission of Dr Ambedkar Centre of Excellence (DACE) is to provide
            specialized coaching exclusively to Scheduled Castes and Other
            Backward Class students for the preparation of Civil Services
            Examinations conducted by UPSC and SPSCs.
          </p>
        </li>
        <li className={styles.item}>
          <AiOutlineCheckCircle className={styles.icon} />
          <p>
            DACE aims to offer high-quality coaching facilities to economically
            disadvantaged SCs and OBCs, enabling them to pursue appropriate jobs
            in the public/private sector and secure admission in reputed
            technical and professional higher education institutions.
          </p>
        </li>
      </ul>
    </section>
  );
}
