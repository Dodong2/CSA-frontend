import { useState, useEffect } from "react";
import {UpdateFormData} from "../../utils/Types";
import { updateDetails } from "../../services/AdminService";

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





export const useHandleUpdate = () => {
  const [updateData, setUpdateData] = useState<UpdateFormData | null>({
    user_id: '',
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
  collar: '',
  status: 'pending', // Use a valid value
  created_at: '',
  updated_at: '',
  business_permit_path: '',
  valid_id_path: ''
  })

    /* para maaccess yung update na value means mapapaltan pag wala nito hindi ma-access*/
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      // console.log(`Updating ${name} with value: ${value}`)
      setUpdateData(prevData => prevData ? { ...prevData, [name]: value } : null);
    };

    const handleSubmit = async () => {
      if (updateData) {
        try {
          await updateDetails(updateData);
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
