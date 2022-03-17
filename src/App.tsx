import React, { useEffect, useState } from "react";

import Job from "./components/Job";
import Nav from "./components/Nav";
import OrderBy from "./components/OrderBy";
import { OrderTypes } from "./types/order";

import "./App.css";

const App: React.FC = () => {
  const [jobs, setJobs] = useState([]);
  const [order, setOrder] = useState<OrderTypes>(OrderTypes.Random)

  const fetchData: () => Promise<void> = async () => {
    const result = await fetch("/jobs.json");
    const data = await result.json();
    setJobs(data);
  };

  useEffect(() => {
    setTimeout(() => fetchData(), 3000);
  }, []);

  const JobList: React.ReactElement[] = jobs.map((value) => {
    const { id } = value;
    return <Job key={id} {...value} />;
  });

  return (
    <div className="App">
        <Nav />
        {!!JobList.length && (
          <div data-testid="app-jobs" className="App-jobs">
            <OrderBy onOrderSelection={setOrder} />
            {JobList}
          </div>
        )}
    </div>
  );
};

export default App;
