/********** react library **********/
import { useEffect } from "react";
/********** hooks **********/
import { useEmployerJobPost } from "../../hooks/useAdmin"
import { useEmployerJobPosts } from "../../hooks/usePost"

/********** components **********/
import Graphs from "./Graphs";
import GraphPie from "./GraphPie";
import GraphDoughnut from "./GraphDoughnut";

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
          {/* graphs */}
      <Graphs/>
      <GraphPie/>
      </div><br/>
      <div className="graphs-layer1">
      <GraphDoughnut/>
      </div>
      
      </div>
    </>
  )
}

export default AdminDashboard
