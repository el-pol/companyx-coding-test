import React, { useEffect, useState } from "react";

import ReactPaginate from 'react-paginate';
import Nav from "./components/Nav";
import OrderBy from "./components/OrderBy";
import JobList from "./components/JobList";

import { OrderTypes } from "./types/order";
import JobDefinition from "./types/job";

import "./App.css";

const App: React.FC = () => {
  const [jobs, setJobs] = useState<JobDefinition[]>([]);
  const [orderBy, setOrderBy] = useState<OrderTypes>(OrderTypes.Random)
  const [isLoading, setIsLoading] = useState(true)
  // Next states are related to the pagination component
  const [currentJobs, setCurrentJobs] = useState<JobDefinition[]>([]);
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
    const endOffset = itemOffset + itemsPerPage;
    setCurrentJobs(jobs.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(jobs.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, jobs]);

  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % jobs.length;
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
          containerClassName="Pagination-container"
          activeClassName="Pagination-active"
        />
    </div>
  );
};

export default App;
