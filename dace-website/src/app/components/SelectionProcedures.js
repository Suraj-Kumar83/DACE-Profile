import styles from "../styles/selectionProcedures.module.css"; // Adjust the path as necessary

export default function SelectionProcedure() {
  return (
    <section id="selection-procedures" className={styles.section}>
      <h2 className={styles.heading}>Selection Procedure for Admission</h2>

      <p className={styles.paragraph}>
        The students will be selected through a Common Entrance Test (CET)
        conducted by the H.N.B. Garhwal University. The syllabus of the CET for
        admission in the DACE Scheme will be similar to the syllabus of the UPSC
        CSE Preliminary examination General Studies (GS) and Civil Services
        Aptitude (CSAT) paper pattern. There will be 100 MCQs with one mark for
        each question (Total Marks 100, Exam Duration Two hours) from the
        following subjects:
      </p>

      <ul className={styles.list}>
        <li>Current Affairs of National and International importance</li>
        <li>History of India and the Indian National Movement</li>
        <li>Indian and World Geography</li>
        <li>Economic and Social Development</li>
        <li>Indian Polity and Governance</li>
        <li>Environment and Ecology, Bio-diversity and Climate Change</li>
        <li>General Science and Technology</li>
        <li>Reasoning and Mental ability</li>
        <li>General English</li>
        <li>General Hindi</li>
      </ul>

      <h3 className={styles.subHeading}>Category-Wise Ratio of Candidates</h3>
      <p className={styles.paragraph}>
        A total number of 100 seats are to be allocated. The percentage of SC
        and OBC students shall be 70% and 30%, respectively. In case of
        non-availability of adequate number of candidates in the SC category,
        the number of OBC Students may be enhanced. However, in any case, the
        number of SC Candidates shall not be less than 50% of the total
        candidates. Also, under each category, 30% of the slots shall be
        reserved for female candidates. In case sufficient numbers of female
        candidates are not available under any category, male candidates from
        the same category shall be considered.
      </p>
    </section>
  );
}
