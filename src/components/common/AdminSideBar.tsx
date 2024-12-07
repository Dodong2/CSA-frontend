/********** icon **********/
// import { GoGraph } from "react-icons/go";
import { MdOutlinePendingActions } from "react-icons/md";
import { BiCommentDetail } from "react-icons/bi";
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
                <Link to='/details'><button>Details <BiCommentDetail/></button></Link>
                <Link to=""><button>Help</button></Link>
                </div>
        </aside>
    </div>
    </>
  )
}

export default AdminSideBar
