/********** react library **********/
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
/********** icons **********/
import { IoClose } from "react-icons/io5";
import { TiPlus } from "react-icons/ti";
import { FaFolderPlus } from "react-icons/fa6";
import { MdOutlineQuestionMark } from "react-icons/md";
import { MdOutlineLogout } from "react-icons/md";
/********** hooks **********/
import { useAuth } from "../../hooks/useAuth";
/********** components **********/
import Modal1 from "./Modal1";

//para sa modal
interface SidebarProps {
    isOpen: boolean;
    toggleSidebar: () => void;
}

const SideBar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
    const [isModal1, setModal1] = useState<boolean>(false);
    const { logout } = useAuth();
    const [isPostModalVisible, setPostModalVisible] = useState<boolean>(false);
    const navigate = useNavigate();

    const handlePostJobContinue = () => {
        setPostModalVisible(false);
        navigate("/post");
      };

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
            <button onClick={() => setPostModalVisible(true)}><TiPlus/>Post Job  </button>
            <Link to='/view'><button><FaFolderPlus/> See Posts</button></Link>
            <Link to='/about'><button> <MdOutlineQuestionMark/> About Us</button></Link>
            <button onClick={() => setModal1(true)}><MdOutlineLogout/>  Logout</button>
            </div>
        </div>
        {/* para sa modal logout */}
        {isModal1 && (
                <div className="modal1 setopen">
                    <div className="overlay1" onClick={() => setModal1(false)}></div>
                    <Modal1
                        setModal1={setModal1}
                        onConfirmLogout={() => {
                            logout(); // Call the logout function
                            setModal1(false); // Close the modal after logout
                        }}
                    />
          </div>
        )}
    {/* Modal para kung employer need niya mag-agree */}
      {isPostModalVisible && (
        <div className="modal">
          <div className="modal-content">
            <h1>Employer post</h1>
            <p>Only employers can proceed.</p>
            <p> Valid credentials required.</p>
            <p>Are you an employer?</p>
            <br/>
            <div className="modal-content-actions">
            <button onClick={handlePostJobContinue}>Yes</button><br/>
            <button onClick={() => setPostModalVisible(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}
        </>
    );
};

export default SideBar
