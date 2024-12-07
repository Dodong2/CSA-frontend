/********** react library **********/
import { Link } from "react-router-dom";
/********** icons **********/
import { FaArrowLeftLong } from "react-icons/fa6";
/********** components **********/
import PendingPost from "../../components/Admin/PendingPost"

const PendingPage = () => {
  return (
    <>
    <div className='back'>
        <Link to="/admin"><button><FaArrowLeftLong/></button></Link>
    </div>
      <PendingPost/>
    </>
  )
}

export default PendingPage
