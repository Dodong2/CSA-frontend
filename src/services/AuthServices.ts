
//Register
export const registerAcc = async (username: string, email:string, password: string) => {
    try {
    const formData = new FormData()
    formData.append('username', username )
    formData.append('email', email)
    formData.append('password', password)

    const response = await fetch('http://localhost/Career Search Agency/reglog.php?action=register', {
        method: 'POST',
        body: formData
    })

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const result = await response.json()
    return result
    } catch (error) {
        console.log(error)
        throw new error
    }
} 

//Verifications
export const verifyRegistration = async (email: string, otp: string) => {
    try {
        const formData = new FormData()
        formData.append('email', email)
        formData.append('otp', otp)
        const response = await fetch('http://localhost/Career Search Agency/reglog.php?action=verify', {
        method: 'POST',
        body: formData
        })

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json()
        return result

    } catch (error) {
        console.log(error)
        throw error
    }
}

//Login
export const loginAcc = async(email: string, password: string) => {
    const formData = new FormData()
    formData.append('email', email)
    formData.append('password', password)

    const response = await fetch('http://localhost/Career Search Agency/reglog.php?action=login', {
        method: 'POST',
        body: formData,
        credentials: 'include',
    })
    const result = await response.json()
    return result
}

