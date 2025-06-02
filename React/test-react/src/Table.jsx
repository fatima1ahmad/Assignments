import StudentCard from "./Card";

const StudentList = ({ students }) => {
  return (
    <div className="student-list">
      {students.map((student) => (
        <StudentCard
          key={student.id}
          name={student.name}
          grade={student.grade}
        />
      ))}
    </div>
  );
};

export default StudentList;
