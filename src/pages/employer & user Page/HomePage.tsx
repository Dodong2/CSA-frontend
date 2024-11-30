import { Link } from "react-router-dom"
import MainContainer from "../../components/common/MainContainer"
import JobLists from "../../components/employer & user/JobLists"

const HomePage = () => {
  return (
    <>
      <MainContainer>
        <JobLists/>
        <Link to='/post'><button>Post Job</button></Link>
        <Link><button>See your posts</button></Link>
      </MainContainer>
    </>
  )
}

export default HomePage
