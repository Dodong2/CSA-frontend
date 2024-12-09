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
export const approveJobPost = async (id: string) => {
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

export const rejectJobPost = async (id: string, reason: string = 'Not specified') => {
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

//Delete
export const deleteDetails = async(id: string) => {
    try {
        const formData = new FormData()
        formData.append('id', id)
        const response = await fetch('http://localhost/Career Search Agency/admin.php?action=delete_detail', {
            method: 'POST',
            body: formData
        })

        if(!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`)
        }

        const result = await response.json()
        return result
    } catch (error) {
        console.log(error)
        throw error
    }
}

export const updateDetails = async (data: JobPost) => {
    try {
        const formData = new FormData();
        formData.append('id', data.id);
        formData.append('business_name', data.business_name)
        formData.append('descriptions', data.descriptions)
        formData.append('work_schedule', data.work_schedule)
        formData.append('skills_required', data.skills_required)
        formData.append('experience', data.experience)
        formData.append('employment_type', data.employment_type)
        formData.append('work_positions', data.work_positions)
        formData.append('company_email', data.company_email)
        formData.append('contact_number', data.contact_number)
        formData.append('locations', data.locations)
        formData.append('collar', data.collar)
       

        const response = await fetch('http://localhost/Career Search Agency/admin.php?action=update_job', {
            method: 'POST',
            body: formData,
        })

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`)
        }

        const result = await response.json()
        return result  

    } catch (error) {
        console.log(error)
        throw error
    }
};

//pang get ng mga rejected na jobs 
export const getRejected = async () => {
    try {
        const response = await fetch('http://localhost/Career Search Agency/employer.php?action=get_reject')
        
        if(!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`)
        }

        const result = await response.json()
        console.log("Fetched data:", result);
        return result

    } catch (error) {
        console.error("Fetch error:", error);
        return { success: false, jobDetails: [] }; // Provide a fallback response
    }
}

export const getJobPostDetails = async (id: string) => {
    try {
        const response = await fetch(`http://localhost/Career Search Agency/admin.php?action=update_list&id=${id}`, {
            method: 'GET',
            credentials: 'include',
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        return result;
    } catch (error) {
        console.error("Fetch error:", error);
        return { success: false, jobPost: null }; 
    }
}