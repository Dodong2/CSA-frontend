import MainContainer from "../../components/common/MainContainer"
import UpdatePost from "../../components/employer & user/UpdatePost"
import { useParams } from "react-router-dom"



const UpdatePostPage = () => {
    const { id } = useParams<{id: string}>()
    console.log("Extracted ID from useParams:", id);
    if(!id) return <p>Invalid or missing ID</p>
  return (
    <>
      <MainContainer>
        <UpdatePost id={id}/>
      </MainContainer>
    </>
  )
}

export default UpdatePostPage
