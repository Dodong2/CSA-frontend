/********** react library **********/
import { Link } from "react-router-dom"
/********** assests **********/
import svg2 from "../../assets/img/pic2.svg"
/********** components **********/
import MainContainer from "../../components/common/MainContainer"


const RegLogPages = () => {
  return (
    <>
      <>
        <MainContainer>
        <div className="reg-log">
        <div className="title-txt">
          <h1>Start Accessing your full potential by
          Login your account or creating new account  </h1>
        </div>
        <div className="pictures-svg">
          <img src={svg2} alt="svg2" />
        </div>
        <div className="btn">
        <Link to="/login"><button className="button1">Login</button></Link>
        <Link to="/register"><button className="button2">Sign Up</button></Link>
        </div>
        </div>
        {/* <Link to="/admin"><button>Admin</button></Link> */}
        </MainContainer>
      </>
    </>
  )
}

export default RegLogPages
