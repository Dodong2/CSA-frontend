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
            <div>
              <strong>Business Permit:</strong>
              {post.business_permit_path && (
                <img
                  src={`http://localhost/Career%20Search%20Agency/${post.business_permit_path}`}
                  alt="Business Permit"
                  style={{ maxWidth: '200px', display: 'block', margin: '10px 0' }}
                />
              )}
            </div>
            <div>
              <strong>Valid ID:</strong>
              {post.valid_id_path && (
                <img
                  src={`http://localhost/Career%20Search%20Agency/${post.valid_id_path}`}
                  alt="Valid ID"
                  style={{ maxWidth: '200px', display: 'block', margin: '10px 0' }}
                />
              )}
            </div>
            <button onClick={() => handleApproveJobPost(post.id)}>Approve</button>
            <button onClick={() => handleRejectJobPost(post.id, "Reason for rejection")}>Reject</button>
          </div>
        ))}
      </div>
    </>
  )
}

export default PendingPost
