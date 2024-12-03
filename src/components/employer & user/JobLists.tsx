/********** React Library **********/
import React from "react"
import { useState } from "react"
/********** Hooks **********/
import { useJobLists } from "../../hooks/useJobList"
import { handleSendResume, handleOpenMap } from "../../hooks/user button functions/userFunction"
/********** Component **********/
import SearchBar from "../common/SearchBar"

const JobLists = () => {
  const {loading, joblists} = useJobLists()
  const [searchQuery, setSearchQuery] = useState<string>("")
  

  //filtered details para sa search functions
  const filteredDetails = joblists.filter((detail) =>
    [detail.business_name, detail.work_positions, detail.collar]
      .join(" ") // Combine all searchable fields
      .toLowerCase()
      .includes(searchQuery.toLowerCase())
  );

  return (
    <>
     <div className="details">
     <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
    {/* Validations kung mabagal yung request or internet */}
    {loading && <p>Loading...</p>}
    {/* validations para kung walanng jobs */}
    {!loading && joblists.length === 0 && <p>No job posts available.</p>}
    {/* validations kung hindi existing yung search jobs */}
    {!loading && searchQuery && filteredDetails.length === 0 && (
      <div className="no-results">
      <p>No matching job posts exist.</p>
    </div>
    )}
    
    <div className="job-lists-details">
      {filteredDetails.map((detail) => (
        <React.Fragment key={detail.id}>
            {/*details titles*/}
          <details className="details__container">
            <summary className="details__summary">
              <h2 className="details__title">
                <div>{detail.business_name}</div>  
                <div>{detail.work_positions}</div>
                <div>{detail.collar}</div>
              </h2>
            </summary>
          </details>
          {/*contents descriptions to */}
          <div className="details__desc">
            <div className="details__desc-inner">
                <div><h3>Descriptions:</h3>{detail.descriptions}</div>
                <div><h3>Work Schedule:</h3>{detail.work_schedule}</div>
                <div><h3>Skills requirement:</h3>{detail.skills_required}</div>
                <div><h3>experience needed:</h3>{detail.experience}</div>
                <div><h3>Employment type:</h3>{detail.employment_type}</div>
                <div><h3>Work positions</h3>{detail.work_positions}</div>
                <div><h3>Company Email adress:</h3> {detail.company_email}</div>
                <div><h3>Locations:</h3> {detail.locations}</div>
                <div><h3>Contact number:</h3> {detail.contact_number}</div>
                <div><h3>Admin Approval:</h3> {detail.status}</div>
              <div className="buttons">
                <button onClick={() => handleOpenMap(detail.locations)}>See Locations</button>
                <button onClick={() => handleSendResume(detail.company_email)}>Send Resume</button>
              </div>
            </div>
          </div><br/>
        </React.Fragment>
      ))}
      </div>

</div>
    </>
  )
}

export default JobLists
