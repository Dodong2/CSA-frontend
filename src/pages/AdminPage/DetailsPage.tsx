/********** react library **********/
import { Link } from "react-router-dom"
/********** icons **********/
import { FaArrowLeftLong } from "react-icons/fa6"
/********** components **********/
import Details from "../../components/Admin/Details"


const DetailsPage = () => {
  return (
    <>
        <div className='back'>
        <Link to="/admin"><button><FaArrowLeftLong/></button></Link>
      </div>
          <Details/>
    </>
  )
}

export default DetailsPage
