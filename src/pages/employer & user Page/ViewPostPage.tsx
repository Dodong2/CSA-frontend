/********** react library **********/
import { Link } from "react-router-dom";
/********** icons **********/
import { FaArrowLeftLong } from "react-icons/fa6";
/********** Components **********/
import ViewPost from "../../components/employer & user/ViewPost"
const ViewPostPage = () => {
  return (
    <>
    <div className='back'>
        <Link to="/home"><button><FaArrowLeftLong/></button></Link>
    </div>
        <ViewPost/>
    </>
  )
}

export default ViewPostPage
