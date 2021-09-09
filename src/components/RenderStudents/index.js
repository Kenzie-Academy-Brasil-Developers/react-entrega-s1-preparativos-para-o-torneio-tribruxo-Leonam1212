import CardStudents from '../CardStudents/'
import "./RenderStudents.css"
const RenderStudents = ({threeStudents, newSelection}) => {

return(
    <>
      

        {
        threeStudents.map((element, index) => (
            <div className = "render" key = {index}>
                <CardStudents img = {element.image} 
                              name = {element.name} 
                              house = {element.house} 
                              species = {element.species}
                />
            </div>
        ))
        
    }
    


    <div className ="divRanderButton">
        <button className = "renderButton" onClick = {newSelection}>Selecionar novos bruxos</button>
    </div>
    </>
)

}

export default RenderStudents