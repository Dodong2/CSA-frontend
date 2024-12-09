import { useState } from "react";
/********** hooks **********/
import { useJobLists } from "../../hooks/useJobList"
/********** icon **********/
import { FaTrashCan } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Loading from "../common/Loading";

const Details = () => {
    const {loading, joblists, removeDetails} = useJobLists()
    const [isDeleteModalVisible, setDeleteModalVisible] = useState<boolean>(false); 
    const [selectedJobId, setSelectedJobId] = useState<string | null>(null);

    const handleDelete = (jobId: string) => {
      setSelectedJobId(jobId); // Store the string ID
      setDeleteModalVisible(true); // Show the delete modal
    };

    const confirmDelete = () => {
      if (selectedJobId !== null) {
        removeDetails(selectedJobId); // Pass the string ID to the delete function
      }
      setDeleteModalVisible(false); // Close the modal
      setSelectedJobId(null); // Reset the selected ID
    };

 // If no job posts, show loading or a message
  if (loading) {
    return <Loading/>;
  }

    const truncateText = (text: string, wordLimit: number): string => {
        const words = text.split(' ');
        return words.length > wordLimit
          ? words.slice(0, wordLimit).join(' ') + ' ...'
          : text;
      };

  return (
    <>
    <div className="dashboard-details">
      <div className='dashboard-table-container'>
        <h3>Approved Job Posts</h3><br/>
        <table>
          <thead>
            <tr>
              <th>Business Name</th>
              <th>Descriptions</th>
              <th>Work Schedule</th>
              {/* <th>Skills Required</th> */}
              {/* <th>Experience</th> */}
              <th>Employment Type</th>
              <th>Work Positions</th>
              {/* <th>Company Email</th> */}
              {/* <th>Contact Number</th> */}
              {/* <th>Locations</th> */}
              <th>Collar</th>
              <th>Status</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {joblists.map((detail) => (
              <tr key={detail.id}>
                <td>{detail.business_name}</td>
                <td>{truncateText(detail.descriptions, 5)}</td>
                <td>{truncateText(detail.work_schedule, 5)}</td>
                {/* <td>{truncateText(detail.skills_required, 5)}</td> */}
                {/* <td>{truncateText(detail.experience, 5)}</td> */}
                <td>{detail.employment_type}</td>
                <td>{detail.work_positions}</td>
                {/* <td>{detail.company_email}</td> */}
                {/* <td>{detail.contact_number}</td> */}
                {/* <td>{detail.locations}</td> */}
                <td>{detail.collar}</td>
                <td>{detail.status}</td>
                <td>{detail.created_at}</td>
                <td>
                <Link to={`/update/${detail.id}`}><button>view</button></Link><br/><br/>
                <button onClick={() => handleDelete(detail.id)}><FaTrashCan/></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
        </div>


        {/* Delete Confirmation Modal */}
      {isDeleteModalVisible && (
        <div className="modal">
          <div className="modal-content">
            <h1>Confirm Delete</h1>
            <p>Are you sure you want to delete this job post?</p><br/>
            <div className="modal-content-actions">
              <button onClick={confirmDelete}>Yes</button>
              <button onClick={() => setDeleteModalVisible(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Details
