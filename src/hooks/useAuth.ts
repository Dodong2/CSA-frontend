/********** react library **********/
import { useState } from "react";
import { useNavigate } from "react-router-dom";
/********** Services **********/
import { registerAcc, verifyRegistration, loginAcc, logoutAcc } from "../services/AuthServices";

export const useAuth = () => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const [registerEmail, setRegisterEmail] = useState<string | null>(localStorage.getItem('registrationEmail'))
    const navigate = useNavigate()

    //Register Hooks
    const register = async (username: string, email: string, password:string) => {
        setLoading(true)
        setError(null)
        try {
            const result = await registerAcc(username, email, password)
            if (result.success) {
                setRegisterEmail(result.email)
                localStorage.setItem('registrationEmail', result.email)
                navigate('/otp', { state: { email } })
            } else {
                setError(result.message)
            }
        } catch (err) {
            setError('Registration failed. Please try again.')
        } finally {
            setLoading(false)
        }
    }

    //Verify
    const verifyOTP = async (otp: string, email?: string) => {
        const verificationEmail = email || registerEmail || localStorage.getItem('registrationEmail')
        if(!verificationEmail) {
            setError('No email found for verification')
            return
        }

        setLoading(true)
        setError(null)
        try {
            const result = await verifyRegistration(verificationEmail, otp)
            if(result.success) {
                setRegisterEmail(null)
                localStorage.removeItem('registrationEmail')
                navigate('/confirm')
            } else {
                setError(result.message)
            }
        } catch (err) {
            setError('OTP verification failed. Please try again.')
        } finally {
            setLoading(false)
        }
    }

    //Login Hooks
    const login = async (input: string, password:string) => {
        setLoading(false)
        setError(null)
        try {
            const result = await loginAcc(input, password)
            if (result.success) {
                navigate('/home')
            } else {
                setError(result.message)
            }
        } catch (err) {
            setError('Login failed. Please try again.')
        } finally {
            setLoading(false)
        }
    }

    const logout = async () => {
        setLoading(true);
        setError(null);
        try {
            const result = await logoutAcc();
            if (result.success) {
                navigate('/login'); // Redirect to login page
            } else {
                setError(result.message);
            }
        } catch (err) {
            setError('Logout failed. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return {register, verifyOTP, login, loading, error, logout  }

}