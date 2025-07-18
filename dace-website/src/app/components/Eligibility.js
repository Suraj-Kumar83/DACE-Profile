import styles from "../styles/eligibility.module.css"; // Adjust the path as necessary

export default function Eligibility() {
  return (
    <section id="eligibility" className={styles.section}>
      <h2 className={styles.heading}>Eligibility Criteria for Selection</h2>
      <ul className={styles.list}>
        <li>
          Only students belonging to SCs and OBCs, having total family income of
          Rs. 8.00 lakh or less per annum from all sources will be eligible for
          benefits under the Scheme.
        </li>
        <li>
          SC/OBC candidates belonging to a Minority community may apply under
          the similar scheme(s) of Ministry of Minority Affairs, or the State
          Govts. as the case may be.
        </li>
        <li>
          The student should have a valid Aadhaar number and a bank account
          seeded therewith, allotted to him/her. At the time of application, if
          the student does not have Aadhaar number, he/ she can submit his/her
          EID number. However, the payment shall be released only after
          obtaining the Aadhaar Number and shall be disbursed to the Aadhaar
          seeded bank account of the student only.
        </li>
        <li>
          Income Certificate: Income declaration of self-employed
          parents/guardian should be in the form of a certificate issued by a
          Revenue Officer not below the rank of Tehsildar. Employed
          parents/guardians are required to obtain income certificate from their
          employer and submit consolidated certificate from Revenue Officer
          including any other additional source of income.
        </li>
        <li>
          Students having less than 50% marks in their class XII exam, shall not
          be considered under the scheme.
        </li>
        <li>
          The students/candidate must have a graduation degree from a recognized
          University/Deemed University/Institution established by law by the
          central government or state government.
        </li>
        <li>
          A candidate appearing in the last semester or final year of graduation
          can also apply, but they must have a graduation degree at the time of
          admission to the program.
        </li>
        <li>
          Benefit under the Scheme can be availed by a particular student not
          more than twice, irrespective of the number of chances he/she may be
          entitled to take in a particular competitive examination and
          irrespective of the number of stages in the exam. The student will be
          required to provide a declaration that he/she has not taken benefit
          more than twice under the Scheme or any other similar coaching scheme
          run by the Central or State Government.
        </li>
        <li>
          The candidate shall be precluded from availing benefit under any other
          coaching scheme of the Centre or State Government and will be required
          to provide a declaration to this effect. A list of beneficiaries
          availing the scheme will also be uploaded on the portal of the scheme
          and shall be shared with Central University to avoid possibility of
          the candidate availing benefits of similar coaching scheme
          simultaneously or more than twice.
        </li>
        <li>
          The selection of the candidates for admission to the DACE Scheme
          (i.e. UPSC/UKPSC CSE course) shall be strictly based on the merit.
        </li>
      </ul>

      <p className={styles.contact}>
        <strong>For More details:</strong> candidates/aspirants may contact Prof.
        M.M. Semwal, Coordinator, Dr. Ambedkar Centre of Excellence.
        <br />
        <strong>Contact No.:</strong> +91-9412079266
      </p>
    </section>
  );
}
