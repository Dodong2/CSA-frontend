
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



function App() {


  //Pages
  //Auth Page
  const Register = lazy(() => import('./pages/AuthPage/RegisterPage'))
  const Login = lazy(() => import('./pages/AuthPage/LoginPage'))
  const VerifyOTP = lazy(() => import('./pages/AuthPage/VerifyOTPPages'))
  // User Page
  const Introduction = lazy(() => import('./pages/employer & user Page/introductionPage'));
  const Home = lazy(() => import('./pages/employer & user Page/HomePage'));
  const PostJob = lazy(() => import('./pages/employer & user Page/PostJobPage'))
  const ViewPost = lazy(() => import('./pages/employer & user Page/ViewPostPage'))
  const Update = lazy(() => import('./pages/employer & user Page/UpdatePostPage'))
  //Admin Page
  const AdminDashBoard = lazy(() => import('./pages/AdminPage/AdminDashboardPage'))

  return (
    <>
      <Router>
        <Suspense fallback={<>Loading...</>}>
          <Routes>
            {/* Auth Page */}
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/otp" element={<VerifyOTP />} />
            {/* User Page */}
            <Route path="/" element={<Introduction />} />
            <Route path="/home" element={<Home />} />
            <Route path="/post" element={<PostJob />} />
            <Route path="/view" element={<ViewPost />} />
            <Route path="/update/:id" element={<Update />} />
            {/* Admin Page */}
            <Route path="/admin" element={<AdminDashBoard />} />
          </Routes>
        </Suspense>
      </Router>
    </>
  );
}

export default App;
