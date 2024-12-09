// import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useEmployerJobPosts } from "../../hooks/usePost"
import { FaTrashCan } from "react-icons/fa6";



const ViewPost = () => {
  const {
    jobPosts = [], //naka array para hindi mag empty array
    approvedJobPosts=[], //naka array para hindi mag empty array
    loading,
    fetchJobPosts,
    fetchApprovedJobPosts,
    handleDeleteJobPost
  } = useEmployerJobPosts();

  useEffect(() => {
    fetchJobPosts();
    fetchApprovedJobPosts();
  }, [fetchJobPosts, fetchApprovedJobPosts]);

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
      <div className='job-view'>
        <h3>Pending Job Posts</h3>
        <table>
          <thead>
            <tr>
              <th>Business Name</th>
              <th>Descriptions</th>
              <th>Work Schedule</th>
              <th>Employment Type</th>
              <th>Work Positions</th>
              <th>Company Email</th>
              <th>Contact Number</th>
              <th>Locations</th>
              <th>Collar</th>
              <th>Skills Required</th>
              <th>Experience</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {jobPosts?.map((post) => (
              <tr key={post.id}>
                <td>{post.business_name}</td>
                <td>{post.descriptions}</td>
                <td>{post.work_schedule}</td>
                <td>{post.employment_type}</td>
                <td>{post.work_positions}</td>
                <td>{post.company_email}</td>
                <td>{post.contact_number}</td>
                <td>{post.locations}</td>
                <td>{post.collar}</td>
                <td>{post.skills_required}</td>
                <td>{post.experience}</td>
                <td>{post.status}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className='table-container'>
        <h3>Approved Job Posts</h3><br/>
        <table>
          <thead>
            <tr>
              <th>Business Name</th>
              <th>Descriptions</th>
              <th>Work Schedule</th>
              <th>Skills Required</th>
              <th>Experience</th>
              <th>Employment Type</th>
              <th>Work Positions</th>
              <th>Company Email</th>
              <th>Contact Number</th>
              <th>Locations</th>
              <th>Collar</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {approvedJobPosts?.map((post) => (
              <tr key={post.id}>
                <td>{post.business_name}</td>
                <td>{truncateText(post.descriptions, 5)}</td>
                <td>{truncateText(post.work_schedule, 5)}</td>
                <td>{truncateText(post.skills_required, 5)}</td>
                <td>{truncateText(post.experience, 5)}</td>
                <td>{post.employment_type}</td>
                <td>{post.work_positions}</td>
                <td>{post.company_email}</td>
                <td>{post.contact_number}</td>
                <td>{post.locations}</td>
                <td>{post.collar}</td>
                <td>{post.status}</td>
                <td>
                {/* <Link to={`/update/${post.id}`}><button>Edit</button></Link><br/><br/> */}
                <button onClick={() => handleDeleteJobPost(post.id)}><FaTrashCan/></button>
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

export default ViewPost