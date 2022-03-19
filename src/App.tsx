import React, { useEffect, useState } from "react";

import Job from "./components/Job";
import Nav from "./components/Nav";
import OrderBy from "./components/OrderBy";
import { OrderTypes } from "./types/order";
import JobDefinition from "./types/job";

import "./App.css";

const App: React.FC = () => {
  const [jobs, setJobs] = useState<JobDefinition[]>([]);
  const [order, setOrder] = useState<OrderTypes>(OrderTypes.Random)
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

  const JobList: React.ReactElement[] = jobs.map((value) => {
    const { id } = value;
    return <Job key={id} {...value} />;
  });

  const SortedJobList: React.ReactElement[] = jobs.sort((a, b) => a.priority - b.priority).map((value) => {
    const { id } = value;
    return <Job key={id} {...value} />;
  });

  return (
    <div className="App">
        <Nav />
        {isLoading && <div data-testid="app-loader" className="Loader"><p>Loading...</p></div>}
        {!!JobList.length && (
          <div data-testid="app-jobs" className="App-jobs">
            <OrderBy onOrderSelection={setOrder} />
            {order === OrderTypes.Random ? JobList : SortedJobList}
          </div>
        )}
    </div>
  );
};

export default App;
