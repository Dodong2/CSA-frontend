/********** react library **********/
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom"
/********** icons **********/
import { FaArrowLeftLong } from "react-icons/fa6";
/********** components **********/
import UpdatePost from "../../components/Admin/UpdatePost"



const UpdatePostPage = () => {
    const { id } = useParams<{id: string}>()
    console.log("Extracted ID from useParams:", id);
    if(!id) return <p>Invalid or missing ID</p>
  return (
    <>
    <div className='back'>
        <Link to="/details"><button><FaArrowLeftLong/></button></Link>
    </div>
        <UpdatePost id={id}/>
    </>
  )
}

export default UpdatePostPage
