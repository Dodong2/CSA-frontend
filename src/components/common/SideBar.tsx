/********** react library **********/
import { Link } from "react-router-dom";


interface SidebarProps {
    isOpen: boolean;
    toggleSidebar: () => void;
}

const SideBar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
    return (
        <>
        <div className={`overlay ${isOpen ? 'visible' : '' }`} onClick={toggleSidebar}></div>
        <div className={`sidebar ${isOpen ? 'open' : ''}`}>
            <div className="sidebar-content">
            <Link to='/post'><button>Post Job</button></Link>
            <Link to='/view'><button>See your posts</button></Link>
            </div>
        </div>
        </>
    );
};

export default SideBar
