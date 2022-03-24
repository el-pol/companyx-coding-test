import React, { FC } from "react";

import JobDefinition from "../../types/job";
import { OrderTypes } from "../../types/order";
import Job from "../Job";
import "./index.css";

type JobListProps = {
  jobs: JobDefinition[]
  orderBy: OrderTypes
};

const JobList: FC<JobListProps> = ({ jobs, orderBy }) => {

  const getJobs = (jobsArray: JobDefinition[], orderBy: OrderTypes) => {
    const copyOfArray = [...jobsArray]
    const sortedArray =  copyOfArray.sort((a, b) => a.priority - b.priority)
	  if (orderBy === OrderTypes.Random) {
		  return jobs.map((job) => <Job key={job.id} {...job} />) 
	  } else {
      return ( 
		    sortedArray.map((job) => <Job key={job.id} {...job} />) 
		);
	}
  }

  return (
    <ul className="App-joblist" data-testid="job-list">
     {getJobs(jobs, orderBy)}
	</ul>
  );
};

export default JobList;