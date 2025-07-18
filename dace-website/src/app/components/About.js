import Image from "next/image";
import styles from "../styles/about.module.css"; // Adjust the path as necessary

export default function About() {
  return (
    <section id="about" className={styles.aboutSection}>
      <h2 className={styles.heading}>About</h2>

      {/* First Paragraph */}
      <p className={styles.paragraph}>
        Dr. Ambedkar Centre of Excellence (DACE) at the H.N.B. Garhwal
        University was established in the month of April 2022 by Dr. Ambedkar
        Foundation, Ministry of Social Justice &amp; Empowerment, Government of
        India. Dr. Ambedkar Centre of Excellence (DACE) scheme is to empower
        Scheduled Caste (SC) and Other Backward Classes (OBC) students in
        competitive exams by providing better opportunities for learning and
        excellence through quality coaching, personality development and
        acquisition of competitive skills. The Scheme is called, Free Coaching
        Scheme (FCS) for SC and OBC Students. A total of 100 seats have been
        allocated to the Dr. Ambedkar Centre of Excellence, H.N.B. Garhwal
        University under the Free Coaching Scheme for SC and OBC students by the
        Dr. Ambedkar Foundation, Ministry of Social Justice and Empowerment,
        Govt. of India, New Delhi.
      </p>

      {/* ✅ First Image (Next.js format) */}
      <div className={styles.imageWrapper}>
        <Image
          src="/Picture1.png" // put your image in /public/images
          alt="DACE Building"
          width={800}    // desired width
          height={500}   // desired height
          className={styles.responsiveImage}
        />
      </div>

      {/* Second Paragraph */}
      <p className={styles.paragraph}>
        DACE plays a significant role in the holistic development and nurturing
        of SC and OBC students. The objective of the scheme is to provide
        high-quality free coaching facilities to the Scheduled Caste and Other
        Backward Classes students for the Civil Services examination conducted
        by Union Public Service Commission (UPSC) and State Public Service
        Commission (SPSC) competitive examinations. It empowers meritorious
        candidates through good quality coaching and fulfil the goal of
        enhancing their competitive skills. Stipend of Rs. 4000 (Four thousand
        Rupees) per month for full duration of the course not exceeding 12 months
        shall be paid to all the students by Ministry of Social Justice and
        Empowerment, Govt. of India. Additionally, each student who succeeds in
        Central Civil Services/State Civil Services Exams for Class 1 and Class
        2 posts will receive Rs. 15,000 as incentive for preparation of
        interview.
      </p>

      {/* ✅ Second Image (Next.js format) */}
      <div className={styles.imageWrapper}>
        <Image
          src="/Picture2.jpg" // put your image in /public/images
          alt="Coaching Session"
          width={800}
          height={500}
          className={styles.responsiveImage}
        />
      </div>

      {/* DACE Classes */}
      <h3 className={styles.subHeading}>DACE Classes</h3>
      <ul className={styles.list}>
        <li>
          THE COURSE(S) FOR WHICH COACHING IS IMPARTED AT DACE-HNBGU: Union
          Public Service Commission (UPSC-CSE)/Uttarakhand Public Service
          Commission (UKPSC-PCS) Examination
        </li>
        <li>Duration of the Course: One Year</li>
        <li>Total Seats: 100 seats</li>
        <li>Qualification: Graduate in any discipline</li>
        <li>Admission Opens: September/October Month</li>
      </ul>
    </section>
  );
}
