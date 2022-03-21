import React, { FC } from "react";

import JobProps from "../../types/job";
import "./index.css";

const Job: FC<JobProps> = ({ description, role, url, city, company, id }) => {
  return (
    <article className="App-job" id={id}>
      <a className="App-job__link" href={url} target="_blank" rel="noreferrer">
        <h2 className="App-job__title">{role}</h2>
        <span className="App-job__meta">
          <span data-testid="company" className="App-job__company">{company.name}</span>
          <span className="App-job__location">{city}</span>
        </span>
        <p className="App-job__abstract">{description}</p>
      </a>
    </article>
  );
};

export default Job;
