import { toast } from "react-toastify";

const getstoredJobApplications = () =>{
    const storedJobApplications = localStorage.getItem("job-application")
    if(storedJobApplications){
        return JSON.parse(storedJobApplications);
    }
    return [];
 }
const saveJobApplication = id =>{
     const storedJobApplications = getstoredJobApplications();
    const exists = storedJobApplications.find(jobId => jobId ===id )
    if(!exists){
        storedJobApplications.push(id);
        localStorage.setItem('job-application',JSON.stringify(storedJobApplications))
        toast.success('Applied for the Job!')
    }else{
        toast.error("THAMMMM! Already Appied!! 😡")
    }

}

export {getstoredJobApplications,saveJobApplication}