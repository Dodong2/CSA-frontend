import { useState, useEffect } from "react";
import { JobPost } from "../../utils/Types";
import { updateDetails } from "../../services/UserPostServices";

//pang open ng gmail at makapagsend resume JobPosts.tsx
export const handleSendResume = (email: string) => {
    if(!email) {
       alert("No Email address available")
       return
    }
   
    const subject = "Job Application: Resume Submission";
    const body = "Dear Hiring Manager,\n\nPlease find my resume attached for your consideration.\n\nBest regards,";
    const mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
       email
     )}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
   
     window.open(mailtoLink, '_blank')
   }
   
//pang open ng map para sa location for JobPosts.tsx
    export const handleOpenMap = (location: string) => {
       if(!location) {
         alert("Location information is not available.")
         return
       }
       const url = `https://www.google.com/maps?q=${encodeURIComponent(location)}`
       window.open(url, '_blank')
     }

//pang Sidebar 
export const useSidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        if (isOpen) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
        return () => {
            document.body.classList.remove('no-scroll'); // Clean up on unmount
        };
    }, [isOpen]);

    return { isOpen, toggleSidebar };
};





// pang update
     export const useHandleUpdate = () => {
      const [updateData, setUpdateData] = useState<Partial<JobPost>>({
        id: '',
        business_name: '',
        descriptions: '',
        work_schedule: '',
        skills_required: '',
        experience: '',
        employment_type: '',
        work_positions: '',
        company_email: '',
        contact_number: '',
        locations: '',
        collar: ''
      })

      /* para maaccess yung update na value means mapapaltan pag wala nito hindi ma-access*/
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      // console.log(`Updating ${name} with value: ${value}`)
      setUpdateData(prevData => ({
        ...prevData, // Spread the previous state, even if it's `null` or `undefined`, the result will be an empty object
        [name]: value,
      }));
    };

    const handleSubmit = async () => {
      if (updateData) {
        try {
          // Ensure all required properties are present
          const completeData: JobPost = {
            id: updateData.id || "", // Provide default values where necessary
            user_id: updateData.user_id || 0, // Replace with actual values or defaults
            status: updateData.status || "pending", // Default or existing value
            created_at: updateData.created_at || new Date().toISOString(), // Provide sensible defaults
            updated_at: new Date().toISOString(), // Update timestamp
            business_name: updateData.business_name || "",
            descriptions: updateData.descriptions || "",
            work_schedule: updateData.work_schedule || "",
            skills_required: updateData.skills_required || "",
            experience: updateData.experience || "",
            employment_type: updateData.employment_type || "",
            work_positions: updateData.work_positions || "",
            company_email: updateData.company_email || "",
            contact_number: updateData.contact_number || "",
            locations: updateData.locations || "",
            collar: updateData.collar || "",
          };
    
          // Pass the complete object to the update function
          await updateDetails(completeData);
          alert("Details updated successfully");
        } catch (error) {
          console.error("Failed to update details:", error);
        }
      }
    };

    return {
      updateData,
      setUpdateData,
      handleChange,
      handleSubmit
    }
  }