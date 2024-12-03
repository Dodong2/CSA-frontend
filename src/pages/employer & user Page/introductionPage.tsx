/********** react library **********/
import { Link } from "react-router-dom"
/********** assests **********/
import svg1 from "../../assets/img/pic1.svg"
/********** components **********/
import MainContainer from "../../components/common/MainContainer"

const introductionPage = () => {
  return (
    <>
      <MainContainer>
        <div className="introductions">
        <div className="title-txt">
          <h1>Career Search Agency</h1>
          <p>Your Future Begins Here</p>
        </div>
        <div className="pictures-svg">
          <img src={svg1} alt="svg1" />
        </div>
        <div className="btn">
          <Link to="/reglog"><button>Get Started</button></Link>
        </div>
        </div>
      </MainContainer>


    </>
  )
}

export default introductionPage