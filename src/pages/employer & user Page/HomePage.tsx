import { Link } from "react-router-dom"
import MainContainer from "../../components/common/MainContainer"
import JobLists from "../../components/employer & user/JobLists"

const HomePage = () => {
  return (
    <>
      <MainContainer>
        <Link to='/post'><button>Post Job</button></Link>
        <Link to='/view'><button>See your posts</button></Link>
        <JobLists/>
      </MainContainer>
    </>
  )
}

export default HomePage
