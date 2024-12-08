/********** react library **********/
import { useEffect, useState} from "react"
/********** Hooks **********/
import { useEmployerJobPosts } from "../../hooks/usePost"

//para sa collars auto fill
const collarTypes: Record<string, string> = {
  //Pink Collars
  waiter: 'Pink collar',
  cashier: 'Pink collar',
  saleslady: 'Pink collar',
  //Green Collars
  "solar panel installer": 'Green collar',
  "renewable energy technician": 'Green collar',
  "waste management worker": 'Green collar',
  //White Collars
  accountant: "White collar",
  "hr officer": "White collar",
  teacher: "White collar",
  //Blue Collars
  mechanic: "Blue collar",
  "construction worker": "Blue collar",
  "delivery rider": "Blue collar",
  //Grey Collars
  "security guard": "Grey collar",
  "it technician": "Grey collar",
  "linemen": "Grey collar",
};

const PostJobs = () => {
    const {
        loading,
        error,
        formData,
        handleCreateJobPost,
        fetchJobPosts,
        updateFormData,
        handleFileChange
      } = useEmployerJobPosts();

      const [isModalVisible, setIsModalVisible] = useState(false);

      const handleSubmit = async (e: React.FormEvent) => {
        const result = await handleCreateJobPost(e);
        if (result?.success) {
          setIsModalVisible(true); // Show modal on success
        }
      };

      // Fetch job posts when component mounts
  useEffect(() => {
    fetchJobPosts();
  }, [fetchJobPosts]);

 // Update the collar type based on work positions
 const handleWorkPositionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  const workPosition = event.target.value.toLowerCase();
  updateFormData("work_positions", workPosition);

  // PARA SA auto fill work
  const collar = collarTypes[workPosition] || "Unknown";
  updateFormData("collar", collar);
};


  return (
    <>
    <div className="job-post-form-title">
    <h1> Job Post </h1>
    </div>
    <div className="job-post-container">
    <div className="job-post-form">
        <form onSubmit={handleSubmit}>
          {/* layer 1 */}
        <div className="layer1">
          {/* layer left */}
          <div className="post-left">
        <input type="text" placeholder="Business name,Company name or Job offer" value={formData.business_name} onChange={(e) => updateFormData('business_name',e.target.value)} /><br/>
        <input type="text" placeholder="Work Positions" value={formData.work_positions} onChange={handleWorkPositionChange} /><br/>
        <input type="Email" placeholder="Company/Business email" value={formData.company_email} onChange={(e) => updateFormData('company_email',e.target.value)} /><br/>
        <input type="number" placeholder="contact number" value={formData.contact_number} onChange={(e) => updateFormData('contact_number',e.target.value)} /><br/>
        </div>
        <div className="post-right">
          {/* layer right */}
        <input type="text" placeholder="locations" value={formData.locations} onChange={(e) => updateFormData('locations',e.target.value)} /><br/>
        <input type="text" placeholder="collar of your job" value={formData.collar} readOnly /><br/>
        <select value={formData.employment_type} onChange={(e) => updateFormData('employment_type', e.target.value)} >
      <option value="" disabled>Select Employment Type</option>
      <option value="Full-time">Full-time</option>
      <option value="Part-time">Part-time</option></select><br/>
        </div>
        </div>
        {/* layer 2 */}
        <div className="layer2">
        <textarea rows={5} cols={50} placeholder="a Brief Descriptions" value={formData.descriptions} onChange={(e) => updateFormData('descriptions',e.target.value)} /><br/>
        <textarea rows={5} cols={50} placeholder="Explain Work schedule" value={formData.work_schedule} onChange={(e) => updateFormData('work_schedule',e.target.value)} /><br/>
        <textarea rows={5} cols={50} placeholder="Explain skills to be needed (optional)" value={formData.skills_required} onChange={(e) => updateFormData('skills_required',e.target.value)}/><br/>
        <textarea rows={5} cols={50} placeholder="Explain experience (optional)" value={formData.experience} onChange={(e) => updateFormData('experience',e.target.value)}/><br/>
        {/* layer 3 */}
        <div className="layer3">
        <div className="layer3-permit">
        <p>Business permit</p>
        <input type="file" onChange={(e) => handleFileChange('businessPermit', e.target.files ? e.target.files[0] : null)} required/></div>
        <div className="layer3-permit">
        <p>Valid ID</p>
        <input type="file" onChange={(e) => handleFileChange('validId', e.target.files ? e.target.files[0] : null)} required/></div>
        </div><br/>
        <button type="submit" disabled={loading}> {loading ? 'Posting...' : 'Post'}</button>
        </div>
        <div className="error">
        {error && <p style={{ color: 'red', textAlign: 'center', marginTop: '10px' }}>{error}</p>}
        </div>
        
        </form>
        </div>
      </div>

      {/* Modal */}
      {isModalVisible && (
        <div className="modal">
          <div className="modal-content">
            <h1>Successfully posted!</h1>
            <p>Wait for admin approval.</p><br/>
            <button onClick={() => setIsModalVisible(false)}>OK</button>
          </div>
        </div>
      )}
    </>
  )
}

export default PostJobs
