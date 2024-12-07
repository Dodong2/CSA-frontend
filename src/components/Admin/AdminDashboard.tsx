/********** react library **********/
import { useEffect } from "react";
/********** hooks **********/
import { useEmployerJobPost } from "../../hooks/useAdmin"
import { useEmployerJobPosts } from "../../hooks/usePost"

/********** components **********/
import Graphs from "./Graphs";
import GraphPie from "./GraphPie";

const AdminDashboard = () => {
  
    const { fetchPendingJobPosts, fetchApprovedJobPosts } = useEmployerJobPost();
    const {fetchJobPosts} = useEmployerJobPosts()

      useEffect(() => {
        fetchPendingJobPosts();
        fetchJobPosts()
        fetchApprovedJobPosts();
      }, [fetchPendingJobPosts, fetchApprovedJobPosts, fetchJobPosts]);
  return (
    <>
      <div className="dashboard-container">
        <div className="dashboard-title"><h1>Dashboard</h1></div>
        <div className="graphs">
          <p></p>
      <Graphs/>
      <GraphPie/>
      </div>
      
      </div>
    </>
  )
}

export default AdminDashboard
