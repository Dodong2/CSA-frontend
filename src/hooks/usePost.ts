import { useState, useCallback, useEffect } from 'react';
import { JobPostRequest, JobPost, JobPostUpdate } from '../utils/Types';
import { 
  createJobPost, 
  getEmployerJobPosts, 
  getApprovedEmployerJobPosts,
  updateJobPost, 
  deleteJobPost 
} from '../services/UserPostServices';

export const useEmployerJobPosts = () => {
  const [jobPosts, setJobPosts] = useState<JobPost[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [approvedJobPosts, setApprovedJobPosts] = useState<JobPost[]>([])

  // Initial state for form
  const [formData, setFormData] = useState<JobPostRequest>({
    business_name: '',
    descriptions: '',
    work_schedule: '',
    skills_required: '',
    experience: '',
    employment_type: '',
    work_positions: '',
    company_email: '',
    contact_number: '',
    locations: '',
    collar: '',
  })

  // para makita yung employer job post
  const fetchJobPosts = useCallback(async () => {
    setLoading(true)
    setError(null)

    try {
      const posts = await getEmployerJobPosts()
      setJobPosts(posts || []) //naka array para hindi mag empty array
    } catch (err) {
      setError((err as Error).message);
      setJobPosts([]) //naka array para hindi mag empty array
    } finally {
      setLoading(false)
    }
  }, [])

  // Create a new job post
  const handleCreateJobPost = useCallback(
    async (e?: React.FormEvent) => {
        if (e) e.preventDefault()
        setLoading(true)
        setError(null)

        try {
            const result = await createJobPost(formData)
            
            if (result.success) {
                await fetchJobPosts()
                // Reset form or show success message
                setFormData({
                  business_name: '',
                  descriptions: '',
                  work_schedule: '',
                  skills_required: '',
                  experience: '',
                  employment_type: '',
                  work_positions: '',
                  company_email: '',
                  contact_number: '',
                  locations: '',
                  collar: '',
                });
            } else {
                // Handle unsuccessful response
                setError(result.message || 'Failed to create job post')
            }

            return result
        } catch (err: unknown) {
            const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred'
            setError(errorMessage)
            return null
        } finally {
            setLoading(false)
        }
    },
    [formData, fetchJobPosts]
)

//pang viewpost
useEffect(() => {
    const fetchData = async () => {
      try {
        await fetchJobPosts()
        await fetchApprovedJobPosts()
      } catch (error) {
        console.error('Error fetching job posts:', error)
      }
    }
    fetchData()
  }, [])

  // Update a job post
  const handleUpdateJobPost = useCallback(async (updatedPost: JobPostUpdate) => {
    setLoading(true);
    setError(null);

    try {
      const result = await updateJobPost(updatedPost);
      await fetchJobPosts(); // Refresh pending posts
      await fetchApprovedJobPosts(); // Refresh approved posts
      return result;
    } catch (err) {
      setError((err as Error).message);
      return null;
    } finally {
      setLoading(false);
    }
  }, [fetchJobPosts])


  //update hooks
  const fetchDetailToUpdate = async (id: string, setUpdateData: (data: JobPost) => void) => {
  if (!id || id === "id") {
    console.error("Invalid ID passed:", id);
    return;
  }
  setLoading(true);
  try {
    const data = await getApprovedEmployerJobPosts();
    if (Array.isArray(data)) {
      const detailsToEdit = data.find((detail: JobPost) => String(detail.id) === String(id));

      setUpdateData(detailsToEdit || {
        id: '',
        business_name: '',
        descriptions: '',
        work_schedule: '',
        skills_required: '',
        experience: '',
        employment_type: '',
        work_positions: '',
        company_email: '',
        contact_number: '',
        locations: '',
        collar: '',
        user_id: 0, // Default value
    status: 'pending', // Default value
    created_at: '', // Default value
    updated_at: '', //
      });
    } else {
      console.error("Data is not an array:", data);
    }
  } catch (error) {
    console.error("Failed to fetch detail for update:", error);
  } finally {
    setLoading(false);
  }
};

  // Delete a job post
  const handleDeleteJobPost = useCallback(async (id: string) => {
    setLoading(true)
    setError(null)
  
    try {
      const result = await deleteJobPost(id)
      console.log('Job post deleted:', result)
  
      // Update jobPosts state locally to remove the deleted post
      setJobPosts((prevJobPosts) => prevJobPosts.filter((post) => post.id !== id))
      setApprovedJobPosts((prevApprovedJobPosts) => prevApprovedJobPosts.filter((post) => post.id !== id))
  
      // Optionally, fetch latest data from server for consistency
      await fetchJobPosts()
      await fetchApprovedJobPosts()
  
      return result
    } catch (err) {
      const errorMessage = (err as Error).message;
      setError(errorMessage)
      alert(`Failed to delete job post: ${errorMessage}`)
      return null
    } finally {
      setLoading(false)
    }
  }, [fetchJobPosts, setJobPosts, setApprovedJobPosts])
  

  // Update form data
  const updateFormData = useCallback((key: keyof JobPostRequest, value: string) => {
    setFormData(prev => ({
      ...prev,
      [key]: value,
    }));
  }, []);

  // Fetch approved job posts
  const fetchApprovedJobPosts = useCallback(async () => {
    setLoading(true)
    setError(null)

    try {
      const posts = await getApprovedEmployerJobPosts()
      setApprovedJobPosts(posts || []) //naka array para hindi mag empty array
    } catch (err) {
      setError((err as Error).message)
      setApprovedJobPosts([]) //naka array para hindi mag empty array
    } finally {
      setLoading(false)
    }
  }, []);




  return {
    jobPosts: jobPosts || [], //naka array para hindi mag empty array
    loading,
    error,
    formData,
    handleCreateJobPost,
    fetchJobPosts,
    handleUpdateJobPost,
    handleDeleteJobPost,
    updateFormData,
    approvedJobPosts: approvedJobPosts || [], //naka array para hindi mag empty array
    fetchApprovedJobPosts,
    fetchDetailToUpdate,
  };
};
