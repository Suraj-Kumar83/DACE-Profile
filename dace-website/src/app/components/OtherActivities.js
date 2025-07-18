import Image from "next/image";
import styles from "../styles/otherActivities.module.css";

export default function OtherActivities() {
  return (
    <section id="other-activities" className={styles.section}>
      <h2 className={styles.heading}>DACE Other Activities</h2>

      {/* Activity 1 */}
      <div className={styles.activity}>
        <p className={styles.text}>Mock Test to Monitor the progress periodically</p>
        <div className={styles.imageWrapper}>
          <Image
            src="/Picture3.png"
            alt="Motivational Lecture"
            width={800}
            height={500}
            className={styles.image}
          />
        </div>
      </div>

      {/* Activity 2 */}
      <div className={styles.activity}>
        <p className={styles.text}>Motivational Lecture and Nasha Mukti Abhiyaan</p>
        <div className={styles.imageWrapper}>
          <Image
            src="/Picture4.png"
            alt="Motivational Lecture and Nasha Mukti Abhiyaan"
            width={800}
            height={500}
            className={styles.image}
          />
        </div>
      </div>

      {/* Activity 3 */}
      <div className={styles.activity}>
        <p className={styles.text}>
          Talk on Climate Change
        </p>
        <div className={styles.imageWrapper}>
          <Image
            src="/Picture5.png"
            alt="Talk on Climate Change"
            width={800}
            height={500}
            className={styles.image}
          />
        </div>
      </div>

      {/* Activity 4 (Optional, if you want to add a final picture) */}
      <div className={styles.activity}>
        <p className={styles.text}>UPSC Preparation Guidance by Civil Servants and Domain Experts</p>
        <div className={styles.imageWrapper}>
          <Image
            src="/Picture6.png"
            alt="Special Sessions"
            width={800}
            height={500}
            className={styles.image}
          />
        </div>
      </div>
    </section>
  );
}
