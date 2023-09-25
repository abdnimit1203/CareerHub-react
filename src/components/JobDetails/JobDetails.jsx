import { NavLink, useLoaderData, useParams } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { saveJobApplication } from "../../utility/localStorage";

const JobDetails = () => {
  const jobs = useLoaderData();
  console.log(jobs);
  const { id } = useParams();
  const idInt = parseInt(id)
  const job = jobs.find((job) => job.id == id);
  console.log(job);
const handleApplyJob = ()=>{
    saveJobApplication(idInt)
    
}
  return (
    <div>
      <div className="bg-slate-50 flex items-center justify-center job-details h-80 ">
        <h2>Job Details</h2>
      </div>
      <div className="flex p-16 pt-20 gap-8  justify-center">
        <div className="space-y-4 max-w-4xl">
          <h2 className="font-medium text-lg">
            Job Description :{" "}
            <span className="font-thin">{job.job_description}</span>
          </h2>
          <h2 className="font-medium text-lg">
            Job Responsibility :{" "}
            <span className="font-thin">{job.job_responsibility}</span>
          </h2>
          <h2 className="font-medium text-lg">Educational Requirements:</h2>
          <p>{job.educational_requirements}</p>
          <h2 className="font-medium text-lg">Experiences:</h2>
          <p>{job.experiences}</p>
        </div>
        <div className="flex flex-col ">
          <div className="bg-indigo-100 p-10 rounded-xl w-80">
            <h2 className="font-medium text-lg">Job Details</h2>
            <hr className="border-t-4 border-blue-400 opacity-25 my-3" />
            <h3 className="font-medium text-lg">
              Salary: <span className="font-light">{job.salary}</span>{" "}
            </h3>
            <h3 className="font-medium text-lg">
              Job Title: <span className="font-light">{job.job_title}</span>
            </h3>
            <h2 className="font-medium text-lg pt-4"> Contact Information</h2>
            <hr className="border-t-4 border-blue-400 opacity-25 my-3" />
            <h3 className="font-medium text-lg">
              {" "}
              Phone:{" "}
              <span className="font-light">
                {job.contact_information.phone}
              </span>
            </h3>
            <h3 className="font-medium text-lg">
              Email :{" "}
              <span className="font-light">
                {job.contact_information.email}
              </span>
            </h3>
            <h3 className="font-medium text-lg">
              Address:{" "}
              <span className="font-light">
                {job.contact_information.address}
              </span>
            </h3>
          </div>
          <NavLink>
            <button onClick={handleApplyJob} className="btn btn-accent text-white w-full mt-6">
              Apply now
            </button>
          </NavLink>
        </div>
        {/* Same as */}
        <ToastContainer />
      </div>
    </div>
  );
};

export default JobDetails;
