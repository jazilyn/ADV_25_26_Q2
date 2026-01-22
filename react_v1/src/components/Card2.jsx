import { useState } from "react";
import styles from "./Card2.module.css";

function Card2({stu_name, stu_class, stu_exam, stu_grade}){ 
    const [Name, setName]=useState(stu_name);
    const[Class,setClass]=useState(stu_class);
    const[Exam, setExam]=useState(stu_exam);
    const[Grade,setGrade]=useState(stu_grade);
    
    const addGrade=()=>{
        setGrade(Grade+1);
    }
    
    return(
        <div className = {styles.card_container}> 
            <p> Name: {stu_name} </p>
            <p> Class: {stu_class} </p>
            <p> Exam: {stu_exam} </p>
            <p className = {styles.grade_font}> Grade: {stu_grade} </p>
            <button onClick={addGrade}> Add Grade </button> 
        </div>
    );
}

export default Card2;