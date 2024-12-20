/********** react library **********/
import { Link } from "react-router-dom";
/********** icons **********/
import { FaArrowLeftLong } from "react-icons/fa6";
/********** components **********/
import PostJobs from "../../components/employer & user/PostJobs"

const PostJobPage = () => {
  return (
    <>
    <div className='back'>
        <Link to="/home"><button><FaArrowLeftLong/></button></Link>
    </div>
        <PostJobs/>
    </>
  )
}

export default PostJobPage
