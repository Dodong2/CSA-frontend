import { JobPostRequest, JobPost } from "../utils/Types"
import { JobPostUpdate } from "../utils/Types"
//para sa employer Job post request
export const createJobPost = async (data: JobPostRequest) => {
    try {
        const formData = new FormData()
        Object.entries(data).forEach(([key, value]) => {
            formData.append(key, value)
        })

        const response = await fetch('http://localhost/Career Search Agency/admin.php?action=create_post_employer', {
            method: 'POST',
            credentials: 'include',
            body: formData
        })

        for (const [key, value] of formData.entries()) {
            console.log(`${key}: ${value}`);
        }

        if (!response.ok) {
            const errorText = await response.text();
            console.error('Error response:', errorText);
            throw new Error(`HTTP error! status: ${response.status}`);
          }

        const result = await response.json()
        return result

    } catch (error) {
        console.log(error)
        throw error
    }
}

// para sa get employer job post
export const getEmployerJobPosts = async () => {
    try {
        const response = await fetch('http://localhost/Career Search Agency/employer.php?action=get_employer_post',{
            method: 'GET',
            credentials: 'include'
        })

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json()
        return result.JobPost as JobPost[]

    } catch (error) {
        console.log(error)
        throw new error
    }
}

//para sa employer update job post
export const updateJobPost = async (data: JobPostUpdate) => {
    try {
        const formData = new FormData()
        formData.append('id', data.id.toString())
        
        // Append all fields except id
        Object.entries(data).forEach(([key, value]) => {
            if (key !== 'id' && value !== undefined) {
                formData.append(key, value.toString())
            }
        })

        const response = await fetch('http://localhost/Career Search Agency/employer.php?action=update_job_post', {
            method: 'POST',
            credentials: 'include',
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

        const response = await fetch('http://localhost/Career Search Agency/employer.php?action=update_job_post', {
            method: 'GET',
            body: formData,
            credentials: 'include'
        })

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`)
        }

        const result = await response.json()
        return result.success ? result.data : null;   

    } catch (error) {
        console.log(error)
        throw error
    }
};



// para sa employer delete job post
export const deleteJobPost = async (id: number) => {
    try {
        const formData = new FormData()
        formData.append('id', id.toString())
        const response = await fetch('http://localhost/Career Search Agency/employer.php?action=delete_job_post', {
            method: 'POST',
            credentials: 'include',
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

// In UserPostServices.ts
export const getApprovedEmployerJobPosts = async (): Promise<JobPost[]> => {
    try {
      const response = await fetch('http://localhost/Career Search Agency/employer.php?action=get_approved_employer_posts', {
        method: 'GET',
        credentials: 'include', // Important for session-based authentication
      });
  
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`HTTP error! status: ${response.status}, message: ${errorText}`);
      }
  
      const responseData = await response.json();
  
      // Check if the response has the expected structure
      if (responseData.success === false) {
        throw new Error(responseData.message || 'Failed to fetch approved job posts');
      }
  
      // Return the job posts, defaulting to an empty array if not present
      return responseData.job_posts || [];
    } catch (error) {
      console.error('Error fetching approved job posts:', error);
      
      // If it's a parsing error, provide more context
      if (error instanceof SyntaxError) {
        console.error('JSON Parsing Error: The response may be malformed or empty');
      }
  
      // Rethrow or return an empty array based on your error handling strategy
      throw error;
    }
};

/* pang get ng mga jobs list */
export const getJobs = async () => {
    try {
        const response = await fetch('http://localhost/Career Search Agency/employer.php?action=joblist')
        
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


