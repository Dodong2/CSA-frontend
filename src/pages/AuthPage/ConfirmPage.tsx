/********** react library **********/
// import { Link } from "react-router-dom"
/********** assests **********/
import svg3 from "../../assets/img/pic3.svg"
/********** components **********/
import MainContainer from "../../components/common/MainContainer"
import Login from "../../components/Authentication/Login"

const ConfirmPage = () => {
  return (
    <>
      <MainContainer>
        <div className="login">
        <div className="pictures-svg">
          <img src={svg3} alt="svg3" />
        </div>
        <div className="title-txt">
          <h1>Confirmations</h1>
          <p>To ensure your username, Email and password</p>
        </div>
        <Login/>
        {/* <div className="link-sign-up-login"><p>Don’t have an account? <Link to='/register'>Sign Up</Link></p></div> */}
        </div>
      </MainContainer>
    </>
  )
}

export default ConfirmPage
