/********** React Library **********/
import React from "react"
import { useState } from "react"
/********** icon **********/
import { TbTie } from "react-icons/tb";
/********** Hooks **********/
import { useJobLists } from "../../hooks/useJobList"
import { handleSendResume, handleOpenMap } from "../../hooks/user button functions/userFunction"
/********** Component **********/
import SearchBar from "../common/SearchBar"

const JobLists = () => {
  const {loading, joblists} = useJobLists()
  const [searchQuery, setSearchQuery] = useState<string>("")
  const [isFocused, setIsFocused] = useState(false);
  

  //filtered details para sa search functions
  const filteredDetails = joblists.filter((detail) =>
    [detail.business_name, detail.work_positions, detail.collar]
      .join(" ") // Combine all searchable fields
      .toLowerCase()
      .includes(searchQuery.toLowerCase())
  );
// para sa button collar suggestions
  const handleButtonClick = (Collar: string) => {
    setSearchQuery(Collar);
  };
// para sa button collar suggestions magpapakita pag na click searchbar
  const handleFocus = () => {
     setIsFocused(true);
  }
  const handleBlur = () => {
    setTimeout(() => setIsFocused(false), 200);
  }
  

  return (
    <>
     <div className="details">
      <div onFocus={handleFocus} onBlur={handleBlur} tabIndex={-1} className="searchbar-container">
              {/* Search Bar */}
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
      </div>
      {/* Buttons search suggestions */}
      {isFocused && (
        <div
        className={`job-collars-container`}>
          <div className="job-collars-button">
            <button onClick={() => handleButtonClick('Blue Collar')}>Blue Collar</button>
            <button onClick={() => handleButtonClick('Green Collar')}>Green Collar</button>
            <button onClick={() => handleButtonClick('White Collar')}>White Collar</button>
            <button onClick={() => handleButtonClick('Grey Collar')}>Grey Collar</button>
            <button onClick={() => handleButtonClick('Pink Collar')}>Pink Collar</button>
          </div>
        </div>
      )}
      
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
    
    
    <div className="job-lists-container">
      {filteredDetails.map((detail) => (
        <React.Fragment key={detail.id}>
            {/*details titles*/}
          <details className="details__container">
            <summary className="details__summary">
              <div className="details__title">
                <div className="titles"><h1>{detail.business_name}</h1></div>  
                <div className="works"><h2>{detail.work_positions}</h2></div>
                <div className="collars"><p>Type of Collar: {detail.collar} <TbTie/></p></div>
              </div>
            </summary>
          </details>
          {/*contents descriptions to */}
          <div className="details__desc">
            <div className="details__desc-inner">
                <div><div className="title-details"><h3>Descriptions:</h3></div><div className="description">{detail.descriptions}</div></div><br/>
                <div><div className="title-details"><h3>Work Schedule:</h3></div><div className="description">{detail.work_schedule}</div></div><br/>
                <div><div className="title-details"><h3>Skills requirement:</h3></div><div className="description">{detail.skills_required}</div></div><br/>
                <div><div className="title-details"><h3>experience needed:</h3></div><div className="description">{detail.experience}</div></div><br/>
                <div><div className="title-details"><h3>Employment type:</h3></div><div className="description">{detail.employment_type}</div></div><br/>
                <div><div className="title-details"><h3>Work positions</h3></div><div className="description">{detail.work_positions}</div></div><br/>
                <div><div className="title-details"><h3>Company Email adress:</h3></div><div className="description">{detail.company_email}</div></div><br/>
                <div><div className="title-details"><h3>Locations:</h3></div><div className="description">{detail.locations}</div></div><br/>
                <div><div className="title-details"><h3>Contact number:</h3></div><div className="description">{detail.contact_number}</div></div><br/>
                <div><div className="title-details"><h3>Admin Approval:</h3></div><div className="description">{detail.status}</div></div><br/>
              <div className="details-btn">
                <button onClick={() => handleSendResume(detail.company_email)}>Send Resume</button> 
                <button onClick={() => handleOpenMap(detail.locations)}>Locations</button>
              </div>
            </div>
          </div>
          <div className="footer-desc"></div><br/>
        </React.Fragment>
      ))}
      </div>
      </div>
    </>
  )
}

export default JobLists
