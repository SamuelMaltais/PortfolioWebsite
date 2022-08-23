import Magnetometer from "./Images/magnetometer.jpg"
import Alpha from "./Images/Alpha.PNG"
import TvControl from "./Images/TvControl.PNG"
import McGill from "./Images/mcgill.png"

const McGillComponent = () => {
    return(
        <>
        <div className="mcgill-header">
          <img src={McGill} height={100} width={150} alt="" />
          <h1>McGill physics intership </h1>
          <img src={McGill} height={100} width={150} alt="" />
        </div>
        <div className="intership-projects">
          <div className="project-card">
            <h2>Magnetometer experiment</h2>
            <img src={Magnetometer} height={280} width={350} alt="" />
            <h3>Skills used</h3>
            <ul>
              <li>Lock-in amps</li>
              <li>Generators</li>
              <li>Applied physics</li>
              <li>Arduino & C</li>
            </ul>
            <h3>Role description</h3>
            <p>I tested and revived old equipement in order for students to prove the theoratical relationship between temperature and magnetic propreties of metals. I was tasked to use arduino to read
                and interpret analog data from the many sensors with the maximum 10 bit resolution.
            </p>
          </div>
          <div className="project-card">
            <h2>Alpha anywhere database</h2>
            <img src={Alpha} height={280} width={350} alt="" />
            <h3>Skills used</h3>
            <ul>
              <li>Active directory</li>
              <li>SQL & MySQL</li>
              <li>Node</li>
              <li>Alpha software</li>
            </ul>
            <h3>Role description</h3>
            <p>My role was to migrate the database from static DBF files to a MySQL server hosted on Azure. I was also tasked to update the security system to allow user to login
              with their McGill credentials from the Active Directory.
            </p>
            <a href="https://sky2.campus.mcgill.ca/tabbedui_Main_Page.a5w" target="_blank"><button className="nice-button">View live version</button></a>
          </div>
          <div className="project-card">
            <h2>Webapp to control lobby tv</h2>
            <img src={TvControl} height={280} width={350} alt="" />
            <h3>Skills used</h3>
            <ul>
              <li>Express js</li>
              <li>React js</li>
              <li>AWS S3</li>
              <li>Heroku</li>
            </ul>
            <h3>Role description</h3>
            <p>Built a fullstack website in order for McGill employees to publish pictures to the lobby tv. The website also contains a control page that allows
              to see and delete all pictures on the S3 bucket.
            </p>
            <div className="button-container">
                <a href="https://github.com/SamuelMaltais/TvDisplayForSchool" target="_blank"><button className="nice-button">View code</button></a>
                <a href="https://mcgilldisplay.netlify.app/" target="_blank"><button className="nice-button">View live version</button></a>
            </div>
          </div>
        </div>
        </>
    )
}
export default McGillComponent