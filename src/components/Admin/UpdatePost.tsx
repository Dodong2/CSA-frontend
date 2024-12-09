import { useState, useEffect } from "react"
import Modal from "react-modal";
import { IoClose } from "react-icons/io5";
import { useEmployerJobPosts } from "../../hooks/usePost"
import { UpdateDetailsProps } from "../../utils/Types";
import { useHandleUpdate } from "../../hooks/user button functions/userFunction";




const UpdatePost:React.FC<UpdateDetailsProps> = ({ id }) => {
    // const navigate = useNavigate()
    const [loading, setLoading] = useState(true)
    const { fetchDetailToUpdate } = useEmployerJobPosts()
    const {updateData, setUpdateData, handleChange, handleSubmit} = useHandleUpdate()
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalImage, setModalImage] = useState("");

    const openModal = (imagePath: string) => {
      setModalImage(imagePath);
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
      setModalImage("");
    };

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
    <div className="job-post-container">
      <div className="job-post-form">
      <form onSubmit={(e) =>{ e.preventDefault(); handleSubmit()}}>
      <div className="layer1">
      <div className="post-left">
        <input type="text" placeholder="Business name,Company name or Job offer" name="business_name" value={updateData?.business_name || ''} onChange={handleChange} required/><br/>
        <input type="text" placeholder="Work Positions" name="work_positions" value={updateData?.work_positions || ''} onChange={handleChange} required/><br/>
        <input type="text" placeholder="Company/Business email" name="company_email" value={updateData?.company_email || ''} onChange={handleChange} required/><br/>
        <input type="text" placeholder="contact number" name="contact_number" value={updateData?.contact_number || ''} onChange={handleChange} required/><br/>
        </div>
        <div className="post-right">
        <input type="text" placeholder="locations" name="locations" value={updateData?.locations || ''} onChange={handleChange} required/><br/>
        <input type="text" placeholder="collar of your job" name="collar" value={updateData?.collar || ''} onChange={handleChange} required/><br/>
        <input type="text" placeholder="Emplyment Type" name="employment_type" value={updateData?.employment_type || ''} onChange={handleChange} required/><br/>
        </div>
        </div>
        <div className="layer2">
        <textarea rows={5} cols={50} placeholder="a Brief Descriptions" name="descriptions" value={updateData?.descriptions || ''} onChange={handleChange} required/><br/>
        <textarea rows={5} cols={50} placeholder="Explain Work schedule" name="work_schedule" value={updateData?.work_schedule || ''} onChange={handleChange} required/><br/>
        <textarea rows={5} cols={50} placeholder="Explain skills to be needed (optional)" name="skills_required" value={updateData?.skills_required || ''} onChange={handleChange}/><br/>
        <textarea rows={5} cols={50} placeholder="Explain experience (optional)" name="experience" value={updateData?.experience || ''} onChange={handleChange}/><br/>
        {/* business permit */}
        <div className="credentials-images">
              <div className="title-img">
              <strong>Business Permit:</strong>
              {updateData.business_permit_path && (
                <img src={`http://localhost/Career%20Search%20Agency/${updateData.business_permit_path}`} alt="Business Permit"  onClick={() => openModal(`http://localhost/Career%20Search%20Agency/${updateData.business_permit_path}`)}/>
              )}</div>
        {/* Valid ID */}
        <div className="title-img">
              <strong>Valid ID:</strong>
              {updateData.valid_id_path && (
                <img src={`http://localhost/Career%20Search%20Agency/${updateData.valid_id_path}`} alt="Valid ID" onClick={() => openModal(`http://localhost/Career%20Search%20Agency/${updateData.valid_id_path}`)}/>
              )}</div></div>
        <button type="submit" disabled={loading}> {loading ? 'updating...' : 'update'}</button>
        
        </div>
        </form>
      </div>
      </div>

      <Modal isOpen={isModalOpen} onRequestClose={closeModal} style={{
        content: {
          maxWidth: '60%',
          maxHeight: '60%',
          margin: 'auto',
          textAlign: 'center',
          display: 'flex',
          alignItems:'center',
          justifyContent: 'center',  
          flexDirection: 'column',
        },

      }}> <img src={modalImage} alt="Zoomed Image" style={{ maxWidth: "100%", maxHeight: "100%", width: '80%' }} />
        <button onClick={closeModal} className="img-close">
          <IoClose/>
        </button></Modal>
    </>
  )
}

export default UpdatePost
