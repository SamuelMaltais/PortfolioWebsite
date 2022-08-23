import Coding from "./Images/coding.jpg"
import Maps from "./Images/google-maps.jpg"

const Hackathons = () =>{
    return(
        <>
        <div className ="mcgill-header">
          <img src={Coding} height={100} width={100} alt="" />
          <h1 className= "hackathon">Hackathon projects</h1>
          <img src={Coding} height={100} width={100} alt="" />
        </div>
        <div className="intership-projects">
        <div className="project-card">
        <h2>Foodbank database with Google cloud services</h2>
            <img src={Maps} height={280} width={350} alt="" />
            <h3>Skills used</h3>
            <ul>
              <li>Google cloud API</li>
              <li>Python & Flask</li>
              <li>SQL alchemy</li>
              <li>JSON</li>
            </ul>
            <h3>Role description</h3>
            <p>
                This was the very beginning of my coding journey. We managed with our minimal knowledge to have a basic webserver that would get adresses from a spreedsheet,
                then find its coordinates on map and put it on the index.php page. 
            </p>
            <div className="button-container">
                <a href="https://github.com/SamuelMaltais/marihacks2021" target="_blank"><button className="nice-button">View code</button></a>
            </div>
            </div>
        </div>
        </>
    )
}
export default Hackathons;