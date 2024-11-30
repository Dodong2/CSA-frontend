import { JobPostRequest, JobPost } from "../utils/Types"
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
        const response = await fetch('http://localhost/Career Search Agency/admin.php?action=get_employer_post',{
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
export const updateJobPost = async (data: JobPost) => {
    try {
        const formData =  new FormData()
        formData.append('id', data.id.toString())
        Object.entries(data).forEach(([key, value]) => {
            if(key !== 'id' && key !== 'user_id' && key !== 'created_at' && key !== 'updated_at') {
                formData.append(key, value)
            }
        })

        const response = await fetch('http://localhost/Career Search Agency/admin.php?action=update_job_post', {
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

// para sa employer delete job post
export const deleteJobPost = async (id: number) => {
    try {
        const formData = new FormData()
        formData.append('id', id.toString())
        const response = await fetch('http://localhost/Career Search Agency/admin.php?action=delete_job_post', {
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
      const response = await fetch('http://localhost/Career Search Agency/admin.php?action=get_approved_employer_posts', {
        method: 'GET',
        credentials: 'include', // Important for session-based authentication
      });
  
      // Check if the response is ok
      if (!response.ok) {
        // Attempt to get error details from response
        const errorText = await response.text();
        throw new Error(`HTTP error! status: ${response.status}, message: ${errorText}`);
      }
  
      // Try to parse the response as JSON
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