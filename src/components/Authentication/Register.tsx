/********** react library **********/
import { useState } from "react"
/********** Hooks **********/
import { useAuth } from "../../hooks/useAuth"

const Register = () => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {register, loading, error} = useAuth()

    //button function
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        register(username, email, password)
    }


  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)}/>
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <input type="text" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            <button type="submit" disabled={loading}> {loading ? 'Registering...' : 'Register'}</button>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </div>
    </>
  )
}

export default Register
