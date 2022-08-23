import Coding from "./Images/coding.jpg"
const Hackathons = () =>{
    return(
        <>
        <div className ="mcgill-header">
          <img src={Coding} height={100} width={100} alt="" />
          <h1 className= "hackathon">Hackathon projects</h1>
          <img src={Coding} height={100} width={100} alt="" />
        </div>
        </>
    )
}
export default Hackathons;