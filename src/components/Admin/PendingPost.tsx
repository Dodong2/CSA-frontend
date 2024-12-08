/********** react library **********/
import { useEffect, useState } from "react";
import Modal from "react-modal";
/********** icon **********/
import { RiArrowDropDownLine } from "react-icons/ri";
import { FaBookmark } from "react-icons/fa";
import { FcApproval } from "react-icons/fc";
import { IoClose } from "react-icons/io5";
/********** assets **********/
import noresult from '../../assets/img/no_result.svg'
/********** hooks **********/
import { useEmployerJobPost } from "../../hooks/useAdmin"

const collarColors: Record<string, string> = {
  "Pink collar": "pink",
  "Green collar": "green",
  "White collar": "white",
  "Blue collar": "blue",
  "Grey collar": "gray",
};

const PendingPost = () => {
    const {pendingPosts, handleApproveJobPost, handleRejectJobPost, fetchPendingJobPosts,fetchApprovedJobPosts, loading} = useEmployerJobPost()
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
        fetchPendingJobPosts();
        fetchApprovedJobPosts();
      }, [fetchPendingJobPosts, fetchApprovedJobPosts]);

  return (
    <>
    {/* {!loading && pendingPosts.length === 0 && <p>No Pending Job Post</p>} */}

     
    <div className="pending-details">
    <h2>Pending Job Posts</h2>
    {/* validations kung may pending jobs */}
    {!loading && pendingPosts.length === 0 && (
      <div className="no-results">
        <div className="no-result-img">
      <img src={noresult} alt="noresult"/>
      </div>
      <p>no pendings</p>
    </div>
    )}
    {/* pending jobs */}
  <div className="job-lists-container">
    {pendingPosts?.map((post) => (
      <div key={post.id}>
        {/*details titles*/}
        <details className="details__container">
          <summary className="details__summary">
          <div className="details__title">
          <div className="arrow-button"><RiArrowDropDownLine/></div>
          <div className="titles"><h1> {post.business_name}</h1></div>
          <div className="titles"><h1> {post.work_positions}</h1></div>
          <div className="collars"><p>Type of Collar: {post.collar} <span style={{color: collarColors[post.collar] || "black", }}> <FaBookmark /></span></p>
              </div>
        </div><br/>
          </summary>
          </details>
          {/*contents descriptions to */}
          <div  className="details__desc">
          <div className="details__desc-inner">
          <div><div className="title-details"><h3>Descriptions:</h3></div><div className="description">{post.descriptions}</div></div><br/>
                <div><div className="title-details"><h3>Work Schedule:</h3></div><div className="description">{post.work_schedule}</div></div><br/>
                <div><div className="title-details"><h3>Skills requirement:</h3></div><div className="description">{post.skills_required}</div></div><br/>
                <div><div className="title-details"><h3>experience needed:</h3></div><div className="description">{post.experience}</div></div><br/>
                <div><div className="title-details"><h3>Employment type:</h3></div><div className="description">{post.employment_type}</div></div><br/>
                <div><div className="title-details"><h3>Work positions</h3></div><div className="description">{post.work_positions}</div></div><br/>
                <div><div className="title-details"><h3>Company Email adress:</h3></div><div className="description">{post.company_email}</div></div><br/>
                <div><div className="title-details"><h3>Locations:</h3></div><div className="description">{post.locations}</div></div><br/>
                <div><div className="title-details"><h3>Contact number:</h3></div><div className="description">{post.contact_number}</div></div><br/>
                <div><div className="title-details"><h3>Admin Approval:</h3></div><div className="description">{post.status} <FcApproval/></div></div><br/>
            {/* business permit */}
            <div className="credentials-images">
              <div className="title-details">
              <strong>Business Permit:</strong>
              {post.business_permit_path && (
                <img src={`http://localhost/Career%20Search%20Agency/${post.business_permit_path}`} alt="Business Permit"  onClick={() => openModal(`http://localhost/Career%20Search%20Agency/${post.business_permit_path}`)}/>
              )}</div>
            {/* Valid ID */}
            <div className="title-details">
              <strong>Valid ID:</strong>
              {post.valid_id_path && (
                <img src={`http://localhost/Career%20Search%20Agency/${post.valid_id_path}`} alt="Valid ID" onClick={() => openModal(`http://localhost/Career%20Search%20Agency/${post.valid_id_path}`)}/>
              )}</div>
            </div>
            <div className="details-btn">
              <button onClick={() => handleApproveJobPost(post.id)}>Approve</button>
              <button onClick={() => handleRejectJobPost(post.id, "Reason for rejection")}>Reject</button>
            </div>
            </div>    
          </div>
          <div className="footer-desc"></div><br/>
      </div>
    ))}
      {/* Modal for Image */}
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
        </div>
        </div>
    </>
  )
}

export default PendingPost
