import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useEmployerJobPosts } from "../../hooks/usePost"

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

  

  return (
    <>
      <div>
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

        <h3>Approved Job Posts</h3>
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
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {approvedJobPosts?.map((post) => (
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
                <td>
                <Link to={`/update/${post.id}`}><button>edit</button></Link>
                <button onClick={() => handleDeleteJobPost(post.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default ViewPost