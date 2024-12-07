import { useEffect, useState } from "react";
/********** Services **********/
import { getJobs } from "../services/UserPostServices";
import { deleteDetails} from "../services/AdminService";
import { JobListsTypes, UpdateFormData } from "../utils/Types";
import JobLists from "../components/employer & user/JobLists";


export const useJobLists = () => {
    const [loading, setLoading] = useState<boolean>(false)
    const [joblists, setJobLists] = useState<JobListsTypes[]>([])

    useEffect(() => {
        const JobsLists = async () => {
            setLoading(true)
            const result = await getJobs()
            if(result.success) {
                setJobLists(result.joblists)
            }
            setLoading(false)
        }
        JobsLists()
    }, [])


     //update hooks
     const fetchDetailToUpdate = async (id: string, setUpdateData: (data: UpdateFormData) => void) => {
        if (!id || id === "id") {
          console.error("Invalid ID passed:", id);
          return;
        }
        setLoading(true);
        try {
          const response = await getJobs();
          const data = response.joblists; // Access the 'details' array
          if (Array.isArray(data)) {
            const detailsToEdit = data.find((detail: UpdateFormData) => String(detail.id) === String(id));
    
            setUpdateData(detailsToEdit || {
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
            });
          } else {
            console.error("Data is not an array:", data);
          }
        } catch (error) {
          console.error("Failed to fetch detail for update:", error);
        } finally {
          setLoading(false);
        }
      };

    //remove delete 
    const removeDetails = async (id: string) => {
        const result = await deleteDetails(id)
        if (result.success) {
          setJobLists(prev => prev.filter(detail => detail.id !== id))
        }
      }

    return {loading, joblists, removeDetails, fetchDetailToUpdate }
}