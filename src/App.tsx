import React, { useEffect, useState } from "react";

import Nav from "./components/Nav";
import OrderBy from "./components/OrderBy";
import { OrderTypes } from "./types/order";
import JobDefinition from "./types/job";
import ReactPaginate from 'react-paginate';


import "./App.css";
import JobList from "./components/JobList";

const App: React.FC = () => {
  const [jobs, setJobs] = useState<JobDefinition[]>([]);
  const [currentJobs, setCurrentJobs] = useState<JobDefinition[]>([]);
  const [orderBy, setOrderBy] = useState<OrderTypes>(OrderTypes.Random)
  const [isLoading, setIsLoading] = useState(true)
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  const fetchData: () => Promise<void> = async () => {
    setIsLoading(true)
    const result = await fetch("/jobs.json");
    const data = await result.json();
    setIsLoading(false)
    setJobs(data);
  };
  const itemsPerPage = 10

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentJobs(jobs.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(jobs.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, jobs]);

  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % jobs.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };
  

  return (
    <div className="App">
        <Nav />
        {isLoading && <div data-testid="app-loader" className="Loader"><p>Loading...</p></div>}
        {!!jobs.length && (
          <div data-testid="app-jobs" className="App-jobs">
            <OrderBy onOrderSelection={setOrderBy} />
            <JobList jobs={currentJobs} orderBy={orderBy} />
          </div>
        )}
        <ReactPaginate
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="< previous"
        />
    </div>
  );
};

export default App;
