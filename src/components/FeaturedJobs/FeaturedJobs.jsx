import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeaturedJobs = () => {

    const [jobs , setJobs ] = useState([])

    //bad way to show all data
    const [datalength,setDatalength] = useState(4)

    useEffect(()=>{
        fetch('jobs.json')
        .then(res => res.json())
        .then(data => setJobs(data))
    },[])

    console.log(jobs);

    return (
        <div className=" space-y-6 mx-auto w-full">
            <div className="text-center mx-auto w-full">
            <h2 className="font-bold text-5xl text-center">Featured Jobs : {jobs.length}</h2>
            <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 mx-auto w-[90%] gap-6 ">
                {
                    jobs.slice(0,datalength).map((job,idx)=>(<Job key={idx} job={job}></Job>))
                }
            </div>
            <div className="flex justify-center">
                {datalength>4? <button onClick={()=>setDatalength(4)} className="btn btn-accent text-base-100">Show Less</button> :<button onClick={()=>setDatalength(jobs.length)} className="btn btn-accent text-base-100">Show All Jobs</button>}
                
            </div>
        </div>
    );
};

export default FeaturedJobs;