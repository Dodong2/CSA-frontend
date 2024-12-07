/********** hooks **********/
import { useJobLists } from "../../hooks/useJobList"
/********** icon **********/
import { FaTrashCan } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Details = () => {
    const {loading, joblists, removeDetails} = useJobLists()

 // If no job posts, show loading or a message
  if (loading) {
    return <p>Loading job posts...</p>;
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
                <button onClick={() => removeDetails(detail.id)}><FaTrashCan/></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
        </div>
    </>
  )
}

export default Details
