/********** react library **********/
import { useState } from "react"
import { useLocation } from "react-router-dom"
/********** Hooks **********/
import { useAuth } from "../../hooks/useAuth"

const VerifyOTP = () => {
    const location = useLocation()
    const [otp, setOTP] = useState('')
    const { verifyOTP, loading, error } = useAuth()

    const email = location.state?.email

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if(email) {
            verifyOTP(otp, email)
        } else {
           console.log('No email found for verification')
        }
    }

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Enter 4-digit OTP" value={otp} onChange={(e) => setOTP(e.target.value)}
            maxLength={4} required/>
            <button type="submit" disabled={loading}>
                {loading ? 'Verifying...' : 'Verify OTP'}
            </button>
        </form>
        {error && <p style={{color: 'red'}}>{error}</p>}
      </div>
    </>
  )
}

export default VerifyOTP
