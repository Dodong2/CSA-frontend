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
      <div className="otp">
        <h1>Please check your Gmail inbox for the OTP and enter it below to proceed.</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Enter 4-digit OTP" value={otp} onChange={(e) => setOTP(e.target.value)}
            maxLength={4}/>
            <button type="submit" disabled={loading}>
                {loading ? 'Verifying...' : 'Verify OTP'}
            </button>
        </form>
        <div className="error-otp">
        {error && <p style={{color: 'red'}} >{error}</p>}
        </div>  
      </div>
    </>
  )
}

export default VerifyOTP
