import { NavLink } from "react-router-dom";
import PropTypes from 'prop-types';

const Job = ({ job }) => {
  const {
    id,
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    job_type,
    location,
    salary,
  } = job;
  return (
    <div className="relative mt-6 w-full min-w-80 flex flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md justify-center mx-auto">
      <div className="p-6 space-y-4">
        <img src={logo} alt="" />
        <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased ">
          {job_title}
        </h5>
        <p className="block font-sans text-lg font-light leading-relaxed text-inherit antialiased">
          {company_name}
        </p>
      </div>
      <div className="p-6 pt-0 flex gap-2">
            <button className="btn btn-sm text-accent border border-accent bg-base-100 rounded-md ">{remote_or_onsite}</button>
            <button className="btn btn-sm text-accent border border-accent bg-base-100 rounded-md">{job_type}</button>
      </div>
      <div className="p-6 pt-0 flex gap-2">
            <div className="flex text-[#757575] font-semibold">
                <img src="/public/assets/icons/Location.png" alt="location" />
                <p>{location}</p>
            </div>
            <div className="flex text-[#757575] font-semibold">
                <img src="/public/assets/icons/money.png" alt="money" />
                <p>Salary: {salary}</p>
            </div>
      </div>
      <div className="p-6 pt-0">
        <NavLink to={`job/${id}`} className="btn btn-accent text-base-100">View Details</NavLink>
      </div>
    </div>
  );
};
Job.propTypes = {
    job: PropTypes.object.isRequired
}
export default Job;
