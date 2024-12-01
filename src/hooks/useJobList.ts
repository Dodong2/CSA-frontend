import { useEffect, useState } from "react";
/********** Services **********/
import { getJobs } from "../services/UserPostServices";
import { JobListsTypes } from "../utils/Types";


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

    return {loading, joblists}
}