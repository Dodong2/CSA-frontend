/********** react library **********/
import { useEffect } from "react"
/********** Hooks **********/
import { useEmployerJobPosts } from "../../hooks/usePost"

const PostJobs = () => {
    const {
        loading,
        error,
        formData,
        handleCreateJobPost,
        fetchJobPosts,
        updateFormData,
      } = useEmployerJobPosts();
  
      // Fetch job posts when component mounts
  useEffect(() => {
    fetchJobPosts();
  }, [fetchJobPosts]);





  return (
    <>
    <div>
        <form onSubmit={handleCreateJobPost}>
        <input type="text" placeholder="Business name,Company name or Job offer" value={formData.business_name} onChange={(e) => updateFormData('business_name',e.target.value)} required/><br/>
        <textarea rows={5} cols={50} placeholder="a Brief Descriptions" value={formData.descriptions} onChange={(e) => updateFormData('descriptions',e.target.value)} required/><br/>
        <textarea rows={5} cols={50} placeholder="Explain Work schedule" value={formData.work_schedule} onChange={(e) => updateFormData('work_schedule',e.target.value)} required/><br/>
        <textarea rows={5} cols={50} placeholder="Explain skills to be needed (optional)" value={formData.skills_required} onChange={(e) => updateFormData('skills_required',e.target.value)}/><br/>
        <textarea rows={5} cols={50} placeholder="Explain experience (optional)" value={formData.experience} onChange={(e) => updateFormData('experience',e.target.value)}/><br/>
        <input type="text" placeholder="Emplyment Type" value={formData.employment_type} onChange={(e) => updateFormData('employment_type',e.target.value)} required/><br/>
        <input type="text" placeholder="Work Positions" value={formData.work_positions} onChange={(e) => updateFormData('work_positions',e.target.value)} required/><br/>
        <input type="text" placeholder="Company/Business email" value={formData.company_email} onChange={(e) => updateFormData('company_email',e.target.value)} required/><br/>
        <input type="text" placeholder="contact number" value={formData.contact_number} onChange={(e) => updateFormData('contact_number',e.target.value)} required/><br/>
        <input type="text" placeholder="locations" value={formData.locations} onChange={(e) => updateFormData('locations',e.target.value)} required/><br/>
        <input type="text" placeholder="collar of your job" value={formData.collar} onChange={(e) => updateFormData('collar',e.target.value)} required/><br/>
        <button type="submit" disabled={loading}> {loading ? 'Posting...' : 'Post'}</button>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      
      </div>
    </>
  )
}

export default PostJobs
