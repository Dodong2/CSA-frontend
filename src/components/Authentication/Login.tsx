/********** react library **********/
import { useState } from "react"
/********** Hooks **********/
import { useAuth } from "../../hooks/useAuth"


const Login = () => {
    const [input, setInput] = useState('')
    const [password, setPassword] = useState('')
    const {login, loading, error} = useAuth()

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        login(input, password)
    }

  return (
    <>
    <div className="login">
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Username or Email" value={input} onChange={(e) => setInput(e.target.value)}/>
        <input type="text" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
        <button type="submit" disabled={loading}> {loading ? 'Registering...' : 'login'}</button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
      </div>
    </>
  )
}

export default Login
