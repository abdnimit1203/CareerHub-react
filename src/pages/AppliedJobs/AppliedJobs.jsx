import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

import { getstoredJobApplications } from "../../utility/localStorage";
const AppliedJobs = () => {
  const jobs = useLoaderData();
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [displayJobs, setDisplayJobs] = useState([]);

  const handleJobsFilter  = filter =>{
    if(filter === 'all'){
        setDisplayJobs(appliedJobs)
    }else if(filter === 'remote'){
        const remoteJobs = appliedJobs.filter(job => job.remote_or_onsite ==="Remote")
        setDisplayJobs(remoteJobs)
    }else if(filter === "onsite"){
        const onsiteJobs = appliedJobs.filter(job => job.remote_or_onsite ==="Onsite")
        setDisplayJobs(onsiteJobs)
    }
  }

  useEffect(() => {
    const storedJobIds = getstoredJobApplications();
    if (jobs.length > 0) {
      const jobsApplied = [];
      for (const id of storedJobIds) {
        const job = jobs.find((job) => job.id === id);
        if (job) {
          jobsApplied.push(job);
        }
      }
      setAppliedJobs(jobsApplied);
      setDisplayJobs(jobsApplied);
    //   console.log(jobsApplied);
    }
  }, [jobs]);

  return (
    <div className="pt-[64px] p-20">
      <h1>Applied jobs : {appliedJobs.length}</h1>
      <div className="dropdown dropdown-bottom dropdown-end float-right">
        <label tabIndex={0} className="btn m-1">
          Filter
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li onClick={()=>handleJobsFilter('all')}>
            <a>All</a>
          </li>
          <li onClick={()=>handleJobsFilter('remote')}>
            <a>Remote</a>
          </li>
          <li  onClick={()=>handleJobsFilter('onsite')}>
            <a>OnSite</a>
          </li>
        </ul>
      </div>
      {/* div 3*/}
      <div>
            {
                displayJobs.map(job=> (
                    <div key={job.id} className="p-10 border-8 border-blue-300 m-10 w-fit rounded-xl">
                        <h2>{job.job_title}</h2>
                        <h2>{job.company_name}</h2>
                        <p>{job.remote_or_onsite}</p>
                    </div>
                ))
            }
      </div>
    </div>
  );
};

export default AppliedJobs;
