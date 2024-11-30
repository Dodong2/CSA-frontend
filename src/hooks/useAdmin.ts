import { useState, useCallback } from "react"; 
import { JobPost } from "../utils/Types"; 
import { 
    // createJobPost, 
    // getEmployerJobPosts, 
    // updateJobPost, 
    // deleteJobPost,
    getPendingJobPosts,
    getApprovedJobPosts,
    approveJobPost,
    rejectJobPost
} from "../services/AdminService";  

export const useEmployerJobPost = () => {
    // const [jobPosts, setJobPosts] = useState<JobPost[]>([])
    const [pendingPosts, setPendingPosts] = useState<JobPost[]>([])
    const [approvedPosts, setApprovedPosts] = useState<JobPost[]>([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)

    // ... existing code ...

    // Fetch pending job posts
    const fetchPendingJobPosts = useCallback(async () => {
        setLoading(true);
        setError(null);
        
        try {
            const posts = await getPendingJobPosts();
            setPendingPosts(posts);
        } catch (err: unknown) {
            setError((err as Error).message);
        } finally {
            setLoading(false);
        }
    }, []);

    // Fetch approved job posts
    const fetchApprovedJobPosts = useCallback(async () => {
        setLoading(true);
        setError(null);
        
        try {
            const posts = await getApprovedJobPosts();
            setApprovedPosts(posts);
        } catch (err: unknown) {
            setError((err as Error).message);
        } finally {
            setLoading(false);
        }
    }, []);

    // Approve a job post
    const handleApproveJobPost = useCallback(async (id: number) => {
        setLoading(true);
        setError(null);
        
        try {
            const result = await approveJobPost(id);
            await fetchPendingJobPosts(); // Refresh pending posts
            await fetchApprovedJobPosts(); // Refresh approved posts
            return result;
        } catch (err) {
            setError((err as Error).message);
            return null;
        } finally {
            setLoading(false);
        }
    }, [fetchPendingJobPosts, fetchApprovedJobPosts]);

    // Reject a job post
    const handleRejectJobPost = useCallback(async (id: number, reason?: string) => {
        setLoading(true);
        setError(null);
        
        try {
            const result = await rejectJobPost(id, reason);
            await fetchPendingJobPosts(); // Refresh pending posts
            return result;
        } catch (err) {
            setError((err as Error).message);
            return null;
        } finally {
            setLoading(false);
        }
    }, [fetchPendingJobPosts]);

    return {
        error,
        loading,
        pendingPosts,
        approvedPosts,
        fetchPendingJobPosts,
        fetchApprovedJobPosts,
        handleApproveJobPost,
        handleRejectJobPost,
    };
}