import RenderStudents from './components/RenderStudents'
import HomePage from './components/HomePage'

import {useState, useEffect} from "react"
import './App.css';

function App() {

  const [students, setStudents] = useState([])   
  const [theThree,  setTheThree] = useState([])
  const [isClick, setIsClick] = useState(false)
  
  useEffect (() => {
      fetch("https://hp-api.herokuapp.com/api/characters/students")
      .then((response) => response.json())
      .then((response) => setStudents(response))
      .catch((e) => console.log(e))
  },[])

  
console.log(students)
  
console.log(theThree)
      
const threeStundents = () => {

  const threeWinners = []

  const student1 = students[Math.floor(Math.random() * students.length)]
  threeWinners.push(student1)

  const differentFirst = students.filter((student)=> student.house !== threeWinners[0].house)
  const student2 = differentFirst[Math.floor(Math.random() * differentFirst.length)]
  threeWinners.push(student2)

  const differentFirstAndSecond = students.filter((student) => student.house !== threeWinners[0].house && student.house !== threeWinners[1].house)
  const student3 = differentFirstAndSecond[Math.floor(Math.random() * differentFirstAndSecond.length)]
  threeWinners.push(student3)

setTheThree(threeWinners)
setIsClick(true)

}

  return (
    <div className="App">

      
        <div className = "home">
        { !isClick && <HomePage threeStudents ={threeStundents}/>}
        </div>

     
          { isClick && < RenderStudents threeStudents = {theThree} newSelection = {threeStundents}/>}
        
      </div>
  );
}

export default App;
