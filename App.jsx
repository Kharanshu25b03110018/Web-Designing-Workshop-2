// import Student from "./Student " // without this nothing display on screen, / means it already exist in src
// function App(){
//   return(
//     <div>
// <h1>Student Card</h1>         
// <Student/>                      
// <Student/>               


//     </div>
//   )
// }
// export default App;


import Header from "./components/header";
import StudentCard from "./components/studentcard";
function App() {
  return (
    <div>
      <Header title="📋 Student App" />
<StudentCard name="Aman" marks={92} />
      <StudentCard name="Priya" marks={78} />
      <StudentCard name="Rahul" marks={85} />
    </div>
  );
}
export default App;