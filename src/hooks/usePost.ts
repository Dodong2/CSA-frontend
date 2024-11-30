import { useState, useCallback } from 'react';
import { JobPostRequest, JobPost } from '../utils/Types';
import { 
  createJobPost, 
  getEmployerJobPosts, 
  getApprovedEmployerJobPosts,
  updateJobPost, 
  deleteJobPost 
} from '../services/UserPostServices';

export const useEmployerJobPosts = () => {
  const [jobPosts, setJobPosts] = useState<JobPost[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [approvedJobPosts, setApprovedJobPosts] = useState<JobPost[]>([]);
  const [showApprovedPosts, setShowApprovedPosts] = useState(false)

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
  });

  // Fetch employer's job posts
  const fetchJobPosts = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const posts = await getEmployerJobPosts();
      setJobPosts(posts);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  }, []);

  // Create a new job post
  const handleCreateJobPost = useCallback(
    async (e?: React.FormEvent) => {
        if (e) e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const result = await createJobPost(formData);
            
            if (result.success) {
                await fetchJobPosts();
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
                setError(result.message || 'Failed to create job post');
            }

            return result;
        } catch (err: unknown) {
            const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred';
            setError(errorMessage);
            return null;
        } finally {
            setLoading(false);
        }
    },
    [formData, fetchJobPosts]
);

  // Update a job post
  const handleUpdateJobPost = useCallback(async (updatedPost: JobPost) => {
    setLoading(true);
    setError(null);

    try {
      const result = await updateJobPost(updatedPost);
      await fetchJobPosts();
      return result;
    } catch (err) {
      setError((err as Error).message);
      return null;
    } finally {
      setLoading(false);
    }
  }, [fetchJobPosts]);

  // Delete a job post
  const handleDeleteJobPost = useCallback(async (id: number) => {
    setLoading(true);
    setError(null);

    try {
      const result = await deleteJobPost(id);
      await fetchJobPosts();
      return result;
    } catch (err) {
      setError((err as Error).message);
      return null;
    } finally {
      setLoading(false);
    }
  }, [fetchJobPosts]);

  // Update form data
  const updateFormData = useCallback((key: keyof JobPostRequest, value: string) => {
    setFormData(prev => ({
      ...prev,
      [key]: value,
    }));
  }, []);

  // Fetch approved job posts
  const fetchApprovedJobPosts = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const posts = await getApprovedEmployerJobPosts();
      setApprovedJobPosts(posts);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  }, []);


  // Toggle showing approved posts
  const toggleApprovedPosts = useCallback(() => {
    setShowApprovedPosts(prev => {
      if (!prev) {
        fetchApprovedJobPosts();
      }
      return !prev;
    });
  }, [fetchApprovedJobPosts]);



  return {
    jobPosts,
    loading,
    error,
    formData,
    handleCreateJobPost,
    fetchJobPosts,
    handleUpdateJobPost,
    handleDeleteJobPost,
    updateFormData,
    approvedJobPosts,
    showApprovedPosts,
    toggleApprovedPosts
  };
};
