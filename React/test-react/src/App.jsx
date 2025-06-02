import StudentList from "./Table";
import Footer from "./Footer";
import "./App.css";

const App = () => {
  const students = [
    { id: 1, name: "Sarah Ali", grade: 95 },
    { id: 2, name: "Omar Tarek", grade: 82 },
    { id: 3, name: "Lina Haddad", grade: 76 },
  ];

  return (
    <div>
      <h1>Student Grades</h1>
      <StudentList students={students} />
      <Footer total={students.length} />
    </div>
  );
};

export default App;
