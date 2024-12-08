/********** react library **********/
import { Link } from "react-router-dom";
/********** icons **********/
import { FaArrowLeftLong } from "react-icons/fa6";
/********** components **********/
import RejectedPost from "../../components/Admin/RejectedPost"

const RejectedPostPage = () => {
  return (
    <>
    <div className='back'>
        <Link to="/admin"><button><FaArrowLeftLong/></button></Link>
    </div>
      <RejectedPost/>
    </>
  )
}

export default RejectedPostPage
