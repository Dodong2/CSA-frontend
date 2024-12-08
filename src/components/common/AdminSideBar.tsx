/********** icon **********/
// import { GoGraph } from "react-icons/go";
// import { FcApproval } from "react-icons/fc";
import { MdOutlinePendingActions } from "react-icons/md";
import { MdNotInterested } from "react-icons/md";
import { FaRegCheckCircle } from "react-icons/fa";
/********** assets **********/
import logo from '../../assets/img/logo.svg'
/********** react library **********/
import { Link } from "react-router-dom";



const AdminSideBar = () => {
  return (
    <>
      <div className="dashboard-sidebar">
        <aside className="dashboard">
            <div className="logo-svg">
                <img src={logo} alt="csa"/>
            </div>
            <div className="admin-btn">
                {/* <Link to=""><button>Overview <GoGraph/></button></Link> */}
                <Link to="/pending"><button>Pending Post <MdOutlinePendingActions/></button></Link>
                <Link to='/details'><button>Approve Jobs <FaRegCheckCircle/></button></Link>
                <Link to='/reject'><button>Rejected Jobs <MdNotInterested/></button></Link>
                <Link to=""><button>Help</button></Link>
                </div>
        </aside>
    </div>
    </>
  )
}

export default AdminSideBar
