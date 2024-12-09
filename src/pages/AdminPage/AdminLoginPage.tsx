import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import MainContainer from "../../components/common/MainContainer"
import svg4 from '../../assets/img/admin.svg'

const AdminLoginPage = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState<string>('');
    const navigate = useNavigate();
  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();

      const correctEmail = 'careersearchagency@gmail.com';
      const correctPassword = 'csa225';

      if (email === correctEmail && password === correctPassword) {
    navigate('/admin');
      } else {
        setError('Invalid Email or Password');
      }
    };
  return (
    <>
      <MainContainer>
      <div className="login">
        <div className="pictures-svg-admin">
          <img src={svg4} alt="svg4" />
        </div>
        <div className="title-txt">
          <h1>Admin</h1>
          <p>Login to Access into the System</p>
        </div>
        <div className="login">
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="text" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">Login</button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
      </div>
        </div>
      </MainContainer>
    </>
  )
}

export default AdminLoginPage
