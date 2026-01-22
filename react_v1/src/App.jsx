import './App.css'
import Card2 from './components/card2'

function App() {

  return (
   <>
   <h1> This is my first day with react </h1>
   <p> Jazilyn Velasco </p>
   
   {/*must call the component*/}
   <Card2 stu_name = {"Isaac Santos"} stu_class = {"advanced prog"} stu_exam={"react_day1"} stu_grade={78} />
   <Card2 stu_name = {"Jazilyn Velasco"} stu_class = {"advanced prog"} stu_exam={"react_day1"} stu_grade={80} />
   <Card2 stu_name = {"Jared Meza"} stu_class = {"advanced prog"} stu_exam={"react_day1"} stu_grade={100} />
   <Card2 stu_name = {"Bryan Alves"} stu_class = {"advanced prog"} stu_exam={"react_day1"} stu_grade={0} />
   <Card2 stu_name = {"Mateus D Souza"} stu_class = {"advanced prog"} stu_exam={"react_day1"} stu_grade={95} />

   
   </>
  )
}

export default App

