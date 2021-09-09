import "./HomePage.css"

const Start = ({threeStudents}) => {

    return (
        <div className = "homePage">
                <h1>Boas vindas ao Torneio Tribruxo!!</h1>

                <p className = "description">Os bruxos de Hogwarts estão ansiosos para as Preparatórias do Torneio Tribruxo. Três bruxos foram escolhidos para o Torneio de preparatória, neste torneio apenas um bruxo sairá triunfante.</p>

                <button className = "homeButton" onClick={threeStudents}>Que comece o torneio!!</button>

        </div>
    )


}
export default Start