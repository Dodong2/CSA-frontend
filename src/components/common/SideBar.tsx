/********** react library **********/
import { Link } from "react-router-dom";
import { useState } from "react";
/********** icons **********/
import { IoClose } from "react-icons/io5";
import { TiPlus } from "react-icons/ti";
import { FaFolderPlus } from "react-icons/fa6";
import { MdOutlineQuestionMark } from "react-icons/md";
import { MdOutlineLogout } from "react-icons/md";
/********** components **********/
import Modal1 from "./Modal1";

//para sa modal
interface SidebarProps {
    isOpen: boolean;
    toggleSidebar: () => void;
}

const SideBar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
    const [isModal1, setModal1] = useState<boolean>(false);

    //para sa modal logout
    if (isModal1) {
        document.body.classList.add("active-modal");
      } else {
        document.body.classList.remove("active-modal");
      }
    

    return (
        <>
        <div className={`overlay ${isOpen ? 'visible' : '' }`} onClick={toggleSidebar}></div>
        <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-close"><button onClick={toggleSidebar}>{ isOpen ? <IoClose/> : <IoClose/>}</button></div>     
            <div className="sidebar-content">
            <Link to='/post'><button><TiPlus/>Post Job  </button></Link>
            <Link to='/view'><button><FaFolderPlus/> See Posts</button></Link>
            <Link to='/about'><button> <MdOutlineQuestionMark/> About Us</button></Link>
            <button onClick={() => setModal1(!isModal1)}><MdOutlineLogout/>  Logout</button>
            </div>
        </div>
        {/* para sa modal logout */}
        {isModal1 && (
          <div className="modal1 setopen">
            <div
              className="overlay1"
              onClick={() => setModal1(false)}
            ></div>
            <Modal1 setModal1={setModal1} />
          </div>
        )}
        </>
    );
};

export default SideBar
