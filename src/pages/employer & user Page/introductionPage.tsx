import { Link } from "react-router-dom"

import MainContainer from "../../components/common/MainContainer"

const introductionPage = () => {
  return (
    <>
        <MainContainer>
        <Link to="/register"><button>register</button></Link>
        <Link to="/login"><button>Login</button></Link>
        <Link to="/admin"><button>Admin</button></Link>
        </MainContainer>
    </>
  )
}

export default introductionPage