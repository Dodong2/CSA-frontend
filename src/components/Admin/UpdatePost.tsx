import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { useEmployerJobPosts } from "../../hooks/usePost"
import { JobPost, UpdateDetailsProps } from "../../utils/Types";
import { useHandleUpdate } from "../../hooks/user button functions/userFunction";


const UpdatePost:React.FC<UpdateDetailsProps> = ({ id }) => {
    // const navigate = useNavigate()
    const [loading, setLoading] = useState(true)
    const { fetchDetailToUpdate } = useEmployerJobPosts()
    const {updateData, setUpdateData, handleChange, handleSubmit} = useHandleUpdate()


    useEffect(() => {
        if (id && loading) {
            fetchDetailToUpdate(id, setUpdateData)
            setLoading(false)
        }
    }, [fetchDetailToUpdate, id, loading, setUpdateData])
  
      if(!updateData) return <p>Loading...</p>
      
  return (
    <>
    <div className="job-post-form-title">
    <h1> Job Update </h1>
    </div>
      <div className="job-post-form">
      <form onSubmit={(e) =>{ e.preventDefault(); handleSubmit()}}>
        <input type="text" placeholder="Business name,Company name or Job offer" name="business_name" value={updateData.business_name} onChange={handleChange} required/><br/>
        <textarea rows={5} cols={50} placeholder="a Brief Descriptions" name="descriptions" value={updateData.descriptions} onChange={handleChange} required/><br/>
        <textarea rows={5} cols={50} placeholder="Explain Work schedule" name="work_schedule" value={updateData.work_schedule} onChange={handleChange} required/><br/>
        <textarea rows={5} cols={50} placeholder="Explain skills to be needed (optional)" name="skills_required" value={updateData.skills_required} onChange={handleChange}/><br/>
        <textarea rows={5} cols={50} placeholder="Explain experience (optional)" name="experience" value={updateData.experience} onChange={handleChange}/><br/>
        <input type="text" placeholder="Emplyment Type" name="employment_type" value={updateData.employment_type} onChange={handleChange} required/><br/>
        <input type="text" placeholder="Work Positions" name="work_positions" value={updateData.work_positions} onChange={handleChange} required/><br/>
        <input type="text" placeholder="Company/Business email" name="company_email" value={updateData.company_email} onChange={handleChange} required/><br/>
        <input type="text" placeholder="contact number" name="contact_number" value={updateData.contact_number} onChange={handleChange} required/><br/>
        <input type="text" placeholder="locations" name="locations" value={updateData.locations} onChange={handleChange} required/><br/>
        <input type="text" placeholder="collar of your job" name="collar" value={updateData.collar} onChange={handleChange} required/><br/>
        <button type="submit" disabled={loading}> {loading ? 'updating...' : 'update'}</button>
        </form>
      </div>
    </>
  )
}

export default UpdatePost
