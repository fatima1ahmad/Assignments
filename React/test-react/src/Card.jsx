import PropTypes from "prop-types";
import AlertButton from "./Button";
import styles from "./Card";

function StudentCard({ name, grade, id }) {
  const message = `Student: ${name} — Grade: ${grade}`;

  return (
    <div
      className={
        grade >= 85 ? styles.cardExcellent : styles.cardNeedsImprovement
      }
    >
      <h2>{name}</h2>
      <p>Grade: {grade}</p>
      <p className={styles.badge}>
        {grade >= 85 ? "Excellent Student" : "Needs Improvement"}
      </p>
      <AlertButton message={message} />
    </div>
  );
}

StudentCard.propTypes = {
  name: PropTypes.string.isRequired,
  grade: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
};

export default StudentCard;
