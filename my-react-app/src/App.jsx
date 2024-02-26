import Student from "./Student.jsx";

function App() {
  return (
    <>
      <Student name="Magnus" age = {21} isStudent = {true} />
      <Student name="Ole" age = {18} isStudent = {false} />
      <Student name="Jens" age = {11} isStudent = {true} />
      <Student name="Terje" age = {89} isStudent = {false} />
    </>
  );
}

export default App;
