import { JobPost } from "../utils/Types";

// Get pending job posts
export const getPendingJobPosts = async () => {
    try {
        const response = await fetch('http://localhost/Career Search Agency/admin.php?action=get_pending', {
            method: 'GET',
            credentials: 'include'
        })

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json()
        return result.pending_posts as JobPost[]

    } catch (error) {
        console.log(error)
        throw error
    }
}

// Get approved job posts
export const getApprovedJobPosts = async () => {
    try {
        const response = await fetch('http://localhost/Career Search Agency/admin.php?action=get_approve', {
            method: 'GET',
            credentials: 'include'
        })

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json()
        return result.approved_posts as JobPost[]

    } catch (error) {
        console.log(error)
        throw error
    }
}

// Add methods to approve or reject job posts
export const approveJobPost = async (id: number) => {
    try {
        const formData = new FormData()
        formData.append('id', id.toString())

        const response = await fetch('http://localhost/Career Search Agency/admin.php?action=approve_job', {
            method: 'POST',
            credentials: 'include',
            body: formData
        })

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        return await response.json()

    } catch (error) {
        console.log(error)
        throw error
    }
}

export const rejectJobPost = async (id: number, reason: string = 'Not specified') => {
    try {
        const formData = new FormData()
        formData.append('id', id.toString())
        formData.append('reason', reason)

        const response = await fetch('http://localhost/Career Search Agency/admin.php?action=reject_job', {
            method: 'POST',
            credentials: 'include',
            body: formData
        })

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        return await response.json()

    } catch (error) {
        console.log(error)
        throw error
    }
}