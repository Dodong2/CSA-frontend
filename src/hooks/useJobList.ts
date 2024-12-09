import { useEffect, useState } from "react";
import { getJobs } from "../services/UserPostServices";
import { deleteDetails, getRejected } from "../services/AdminService";
import { JobListsTypes, UpdateFormData } from "../utils/Types";

export const useJobLists = () => {
    const [loading, setLoading] = useState<boolean>(false)
    const [joblists, setJobLists] = useState<JobListsTypes[]>([])
    const [jobreject, setJobReject] = useState<JobListsTypes[]>([])

    const fetchJobs = async () => {
        setLoading(true)
        try {
            const result = await getJobs()
            if(result.success) {
                setJobLists(result.joblists)
            }
        } catch (error) {
            console.error("Error fetching jobs:", error)
        } finally {
            setLoading(false)
        }
    }

    const fetchRejectedJobs = async () => {
        setLoading(true)
        try {
            const result = await getRejected()
            if(result.success) {
                setJobReject(result.jobreject)
            }
        } catch (error) {
            console.error("Error fetching rejected jobs:", error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchJobs()
        fetchRejectedJobs()
    }, [])

    const fetchDetailToUpdate = async (id: string): Promise<UpdateFormData | null> => {
        if (!id || id === "id") {
            console.error("Invalid ID passed:", id);
            return null;
        }

        try {
            const response = await getJobs();
            const data = response.joblists;

            if (Array.isArray(data)) {
                const detailsToEdit = data.find((detail: UpdateFormData) => String(detail.id) === String(id));

                return detailsToEdit || null;
            } else {
                console.error("Data is not an array:", data);
                return null;
            }
        } catch (error) {
            console.error("Failed to fetch detail for update:", error);
            return null;
        }
    };

  const removeDetails = async (id: string) => {
    const result = await deleteDetails(id);
    if (result.success) {
        setJobLists(prev => prev.filter(detail => detail.id !== id));
    } else {
        console.error("Failed to delete");
    }
};

       //pang get ng mga job
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

    return { 
        loading, 
        joblists, 
        jobreject, 
        removeDetails, 
        fetchDetailToUpdate,
        refetchJobs: fetchJobs 
    }
}