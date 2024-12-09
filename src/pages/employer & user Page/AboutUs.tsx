/********** react library **********/
import { Link } from "react-router-dom";
/********** assets **********/
import logo from '../../assets/img/logo.svg'
import devpic from '../../assets/img/sample.png'
/********** icons **********/
import { FaArrowLeftLong } from "react-icons/fa6";


const AboutUs = () => {
  return (
    <>
    <div className='back'>
        <Link to="/home"><button><FaArrowLeftLong/></button></Link>
    </div>
    <div className='about-container'>
      <div className='about'>
        <div className='about-logo'>
            <img src={logo} alt='logo'/>
        </div>
        <div className='about-txt'>
            <p>CSA is a comprehensive platform designed to bridge the gap between job seekers and employers. Whether you're looking for your next career opportunity or seeking the perfect candidate to join your team, CSA provides an intuitive and efficient solution. With user-friendly tools for job discovery and talent matching, CSA simplifies the hiring process and empowers individuals and businesses to achieve their goals.</p>
        </div>
        </div>
        <div className='about'>
        <div className='about-img'>
            <img src={devpic} alt='devpic'/>
        </div> 
        <div className='about-txt-1'>
            <h1>Developers</h1>
            <p>Carl Stephen Arocha</p>
            <p>Alison Rrysaldi C Dizon</p>
            <p>Vaughn Rovin Gironella</p>
            <h1>Team Email</h1>
            <p>careersearchagency@gmail.com</p>
            </div> 
      </div>
      </div>
    </>
  )
}

export default AboutUs
