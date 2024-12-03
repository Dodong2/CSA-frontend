/********** react library **********/
import { Link } from "react-router-dom"
/********** assests **********/
import svg4 from "../../assets/img/pic4.svg"
/********** components **********/
import MainContainer from "../../components/common/MainContainer"
import Register from "../../components/Authentication/Register"

const RegisterPage = () => {
  return (
    <>
      <MainContainer>
      <div className="register">
        <div className="pictures-svg">
          <img src={svg4} alt="svg4" />
        </div>
        <div className="title-txt">
          <h1>Create Your Account</h1>
          <p>Start your journey to finding the perfect job</p>
        </div>
        <Register/>
        <div className="link-sign-up-login"><p>Don’t have an account? <Link to='/register'>Sign Up</Link></p></div>
        </div>
      </MainContainer>
    </>
  )
}

export default RegisterPage
