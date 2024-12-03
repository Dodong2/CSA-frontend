/********** assets **********/
import csa from '../../assets/img/csa.svg'
/********** Icons **********/
import { FiMenu } from "react-icons/fi";
import { IoClose } from 'react-icons/io5';
/********** Hooks **********/
import { useSidebar } from "../../hooks/user button functions/userFunction";
/********** components **********/
import JobLists from "../../components/employer & user/JobLists"
import SideBar from "../../components/common/SideBar"

const HomePage = () => {
  const { isOpen, toggleSidebar } = useSidebar()
  return (
    <>
    <nav>
      <div className='header'>
        <div>
          <img src={csa} alt={csa}/>
        </div>
        <div className="navbar-menu">
            <button onClick={toggleSidebar}>{ isOpen ? <IoClose/> : <FiMenu/>}</button> 
            <SideBar isOpen={isOpen} toggleSidebar={toggleSidebar} />
        </div>
      </div>
    </nav>
    <div className="job-list">
      <JobLists/>
    </div>
    </>
  )
}

export default HomePage
