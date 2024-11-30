/********** react library **********/
import { useEffect, useState } from "react"
/********** Hooks **********/
import { useEmployerJobPosts } from "../../hooks/usePost"
import { JobPost } from "../../utils/Types";

const PostJobs = () => {
    const {
        jobPosts,
        loading,
        error,
        formData,
        handleCreateJobPost,
        fetchJobPosts,
        handleDeleteJobPost,
        updateFormData,
        approvedJobPosts,
    showApprovedPosts,
    toggleApprovedPosts
      } = useEmployerJobPosts();
    const [editingPost, setEditingPost] = useState<JobPost | null>(null);
      // Fetch job posts when component mounts
  useEffect(() => {
    fetchJobPosts();
  }, [fetchJobPosts]);

  const handleEditClick = (post: JobPost) => {
    setEditingPost({...post}); // Create a copy to avoid direct mutation
};



  return (
    <>
    <div>
        <form onSubmit={handleCreateJobPost}>
        <input type="text" placeholder="Business name,Company name or Job offer" value={formData.business_name} onChange={(e) => updateFormData('business_name',e.target.value)} required/><br/>
        <textarea rows={5} cols={50} placeholder="a Brief Descriptions" value={formData.descriptions} onChange={(e) => updateFormData('descriptions',e.target.value)} required/><br/>
        <textarea rows={5} cols={50} placeholder="Explain Work schedule" value={formData.work_schedule} onChange={(e) => updateFormData('work_schedule',e.target.value)} required/><br/>
        <textarea rows={5} cols={50} placeholder="Explain skills to be needed (optional)" value={formData.skills_required} onChange={(e) => updateFormData('skills_required',e.target.value)} required/><br/>
        <textarea rows={5} cols={50} placeholder="Explain experience (optional)" value={formData.experience} onChange={(e) => updateFormData('experience',e.target.value)} required/><br/>
        <input type="text" placeholder="Emplyment Type" value={formData.employment_type} onChange={(e) => updateFormData('employment_type',e.target.value)} required/><br/>
        <input type="text" placeholder="Work Positions" value={formData.work_positions} onChange={(e) => updateFormData('work_positions',e.target.value)} required/><br/>
        <input type="text" placeholder="Company/Business email" value={formData.company_email} onChange={(e) => updateFormData('company_email',e.target.value)} required/><br/>
        <input type="text" placeholder="contact number" value={formData.contact_number} onChange={(e) => updateFormData('contact_number',e.target.value)} required/><br/>
        <input type="text" placeholder="locations" value={formData.locations} onChange={(e) => updateFormData('locations',e.target.value)} required/><br/>
        <input type="text" placeholder="collar of your job" value={formData.collar} onChange={(e) => updateFormData('collar',e.target.value)} required/><br/>
        <button type="submit" disabled={loading}> {loading ? 'Posting...' : 'Post'}</button>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <div>
                    <h2 className="text-2xl font-bold mb-4">Your Job Posts</h2>
                    
                    {/* Toggle Approved Posts Button */}
                    <button 
                        onClick={toggleApprovedPosts}
                        className="mb-4 p-2 bg-green-500 text-white rounded"
                    >
                        {showApprovedPosts ? 'Hide Approved Posts' : 'Show Approved Posts'}
                    </button>

                    {/* Pending Job Posts Section */}
                    <div>
                        <h3 className="text-xl font-semibold mb-2">Pending Job Posts</h3>
                        {loading ? (
                            <p>Loading pending job posts...</p>
                        ) : jobPosts?.length > 0 ? (
                            jobPosts.map((post) => (
                                <div 
                                    key={post.id} 
                                    className="border p-4 mb-4 rounded shadow-sm"
                                >
                                    <h4 className="font-bold">{post.business_name}</h4>
                                    <p className="text-gray-600">Status: {post.status}</p>
                                    <p>{post.descriptions}</p>
                                    <div className="mt-2 space-x-2">
                                        <button 
                                            onClick={() => handleDeleteJobPost(post.id)}
                                            className="bg-red-500 text-white p-2 rounded"
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p>No pending job posts found.</p>
                        )}
                    </div>

                    {/* Approved Job Posts Section */}
                    {showApprovedPosts && (
                        <div className="mt-6">
                            <h3 className="text-xl font-semibold mb-2">Approved Job Posts</h3>
                            {loading ? (
                                <p>Loading approved job posts...</p>
                            ) : approvedJobPosts?.length > 0 ? (
                                approvedJobPosts.map((post) => (
                                    <div 
                                        key={post.id} 
                                        className="border p-4 mb-4 rounded shadow-sm"
                                    >
                                        {editingPost && editingPost.id === post.id ? (
                                            // Edit Form for Approved Posts
                                           <h1>a</h1>
                                        ) : (
                                            <>
                                                <h4 className="font-bold">{post.business_name}</h4>
                                                <p>{post.descriptions}</p>
                                                <div className="mt-2 space-x-2">
                                                    <button 
                                                        onClick={() => handleEditClick(post)}
                                                        className="bg-blue-500 text-white p-2 rounded"
                                                    >
                                                        Edit
                                                    </button>
                                                    <button 
                                                        onClick={() => handleDeleteJobPost(post.id)}
                                                        className="bg-red-500 text-white p-2 rounded"
                                                    >
                                                        Delete
                                                    </button>
                                                </div>
                                            </>
                                        )}
                                    </div>
                                ))
                            ) : (
                                <p>No approved job posts found.</p>
                            )}
                        </div>
                    )}
                </div>
      </div>
    </>
  )
}

export default PostJobs
