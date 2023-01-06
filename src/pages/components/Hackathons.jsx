import Coding from "./Images/coding.jpg"
import Maps from "./Images/google-maps.jpg"
import Messenger from "./Images/messenger.png"
import Mask from "./Images/mask.PNG"

const Hackathons = () =>{
    return(
        <>
        <div className ="mcgill-header">
          <img src={Coding} height={100} width={100} alt="" style={{marginLeft: "30px"}}/>
          <h1 className= "hackathon">Hackathon projects</h1>
          <img src={Coding} height={100} width={100} alt="" style={{marginRight: "30px"}}/>
        </div>
        <p>The projects here are the beginning of my coding journey and are here just to show you the growth I've experienced as a developper</p>
        <div className="intership-projects">
        <div className="project-card">
        <h2>Foodbank database</h2>
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
            <div className="project-card">
        <h2>Messenger chatbot</h2>
            <img src={Messenger} height={280} width={350} alt="" />
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
                <a href="https://github.com/SamuelMaltais1/Messenger-chatbot" target="_blank"><button className="nice-button">View code</button></a>
            </div>
            </div>
            <div className="project-card">
        <h2>Different mask simulation</h2>
            <img src={Mask} height={280} width={350} alt="" />
            <h3>Skills used</h3>
            <ul>
              <li>Unity</li>
              <li>C#</li>
            </ul>
            <h3>Role description</h3>
            <p>
                I coded a basic particle creator with velocity that followed the standard deviation of what we had read. I also made a basic UI to change masks.
            </p>
            <div className="button-container">
                <a href="https://mcgill-phys-hack-2020.devpost.com/project-gallery" target="_blank"><button className="nice-button">View code</button></a>
            </div>
            </div>
        </div>
        </>
    )
}
export default Hackathons;