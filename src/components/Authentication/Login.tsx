/********** react library **********/
import { useState } from "react"
/********** Hooks **********/
import { useAuth } from "../../hooks/useAuth"


const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {login, loading, error} = useAuth()

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        login(email, password)
    }

  return (
    <>
    <div className="login">
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Username or Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        <input type="text" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
        <button type="submit" disabled={loading}> {loading ? 'Registering...' : 'login'}</button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
      </div>
    </>
  )
}

export default Login
