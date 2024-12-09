
/********** react library **********/
import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
/********** PWA **********/
import './validations/ServiceWorkerValidation'
/********** CSS **********/
import './assets/css/App.css'
import './assets/css/color.css'
import './assets/css/default.css'
import './assets/css/media.css'
import Loading from "./components/common/Loading";



function App() {


  //Pages
  //Auth Page
  const Register = lazy(() => import('./pages/AuthPage/RegisterPage'))
  const Login = lazy(() => import('./pages/AuthPage/LoginPage'))
  const VerifyOTP = lazy(() => import('./pages/AuthPage/VerifyOTPPages'))
  const Confirm = lazy(() => import('./pages/AuthPage/ConfirmPage'))
  // User Page
  const Introduction = lazy(() => import('./pages/employer & user Page/introductionPage'));
  const RegLog = lazy(() => import('./pages/employer & user Page/RegLogPages'));
  const Home = lazy(() => import('./pages/employer & user Page/HomePage'));
  const PostJob = lazy(() => import('./pages/employer & user Page/PostJobPage'))
  const ViewPost = lazy(() => import('./pages/employer & user Page/ViewPostPage'))
  const About = lazy(() => import('./pages/employer & user Page/AboutUs'))
  //Admin Page
  const AdminDashBoard = lazy(() => import('./pages/AdminPage/AdminDashboardPage'))
  const Pending = lazy(() => import('./pages/AdminPage/PendingPage'))
  const Details = lazy(() => import('./pages/AdminPage/DetailsPage'))
  const Update = lazy(() => import('./pages/AdminPage/UpdatePostPage'))
  const Rejected = lazy(() => import('./pages/AdminPage/RejectedPostPage'))
  const AdminLog = lazy(() => import('./pages/AdminPage/AdminLoginPage'))

  return (
    <>
      <Router>
        <Suspense fallback={<><Loading/></>}>
          <Routes>
            {/* Auth Page */}
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/otp" element={<VerifyOTP />} />
            <Route path="/confirm" element={<Confirm />} />
            {/* User Page */}
            <Route path="/" element={<Introduction />} />
            <Route path="/reglog" element={<RegLog />} />
            <Route path="/home" element={<Home />} />
            <Route path="/post" element={<PostJob />} />
            <Route path="/view" element={<ViewPost />} />
            <Route path="/update/:id" element={<Update />} />
            <Route path="/about" element={<About />} />
            {/* Admin Page */}
            <Route  path="/admin" element={<AdminDashBoard />} />
            <Route path="/pending" element={<Pending />} />
            <Route path="/details" element={<Details />} />
            <Route path="/reject" element={<Rejected />} />
            <Route path="/adminlog" element={<AdminLog />} />
          </Routes>
        </Suspense>
      </Router>
    </>
  );
}

export default App;
