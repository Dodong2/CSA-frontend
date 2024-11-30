import { useEffect } from "react";
import { useEmployerJobPost } from "../../hooks/useAdmin"

const AdminDashboard = () => {
    const {
        // ... existing destructuring ...
        pendingPosts,
        approvedPosts,
        fetchPendingJobPosts,
        fetchApprovedJobPosts,
        handleApproveJobPost,
        handleRejectJobPost,
      } = useEmployerJobPost();
    
      useEffect(() => {
        fetchPendingJobPosts();
        fetchApprovedJobPosts();
      }, [fetchPendingJobPosts, fetchApprovedJobPosts]);

  return (
    <>
      <div>
        <h2>Pending Job Posts</h2>
        {pendingPosts?.map((post) => (
          <div key={post.id}>
            <h3>{post.business_name}</h3>
            <p>{post.descriptions}</p>
            <button onClick={() => handleApproveJobPost(post.id)}>Approve</button>
            <button onClick={() => handleRejectJobPost(post.id, "Reason for rejection")}>Reject</button>
          </div>
        ))}
      </div>

      <div>
        <h2>Approved Job Posts</h2>
        {approvedPosts?.map((post) => (
          <div key={post.id}>
            <h3>{post.business_name}</h3>
            <p>{post.descriptions}</p>
          </div>
        ))}
      </div>
    </>
  )
}

export default AdminDashboard
