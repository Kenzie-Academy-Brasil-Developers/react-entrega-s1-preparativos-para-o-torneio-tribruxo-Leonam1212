import "./CardStudents.css"
const CardStudents = ({img, name, house, species}) => {

return (
   <div  className= "Card">
       
       <div id = "front">
            <h1>{name}</h1>
            <p>Especie: {species}</p>
            <img  className = "witches" src = {img} alt = {name}/>
            <span>{house}</span>
       </div>
   </div>
  )
}

export default CardStudents