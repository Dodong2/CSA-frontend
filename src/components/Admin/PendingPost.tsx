/********** react library **********/
import { useEffect } from "react";
/********** hooks **********/
import { useEmployerJobPost } from "../../hooks/useAdmin"

const PendingPost = () => {
    const {pendingPosts, handleApproveJobPost, handleRejectJobPost, fetchPendingJobPosts,fetchApprovedJobPosts} = useEmployerJobPost()
    
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
    </>
  )
}

export default PendingPost
