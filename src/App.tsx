import React, { useEffect, useState } from "react";

import Nav from "./components/Nav";
import OrderBy from "./components/OrderBy";
import { OrderTypes } from "./types/order";
import JobDefinition from "./types/job";

import "./App.css";
import JobList from "./components/JobList";

const App: React.FC = () => {
  const [jobs, setJobs] = useState<JobDefinition[]>([]);
  const [orderBy, setOrderBy] = useState<OrderTypes>(OrderTypes.Random)
  const [isLoading, setIsLoading] = useState(true)

  const fetchData: () => Promise<void> = async () => {
    setIsLoading(true)
    const result = await fetch("/jobs.json");
    const data = await result.json();
    setIsLoading(false)
    setJobs(data);
  };

  useEffect(() => {
    setTimeout(() => fetchData(), 3000);
  }, []);

  

  return (
    <div className="App">
        <Nav />
        {isLoading && <div data-testid="app-loader" className="Loader"><p>Loading...</p></div>}
        {!!jobs.length && (
          <div data-testid="app-jobs" className="App-jobs">
            <OrderBy onOrderSelection={setOrderBy} />
            <JobList jobs={jobs} orderBy={orderBy} />
          </div>
        )}
    </div>
  );
};

export default App;
