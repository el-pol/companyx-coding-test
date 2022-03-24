import React, { useEffect, useState } from "react";

import ReactPaginate from 'react-paginate';
import Header from "./components/Nav";
import OrderBy from "./components/OrderBy";
import JobList from "./components/JobList";

import { OrderTypes } from "./types/order";
import JobDefinition from "./types/job";

import "./App.css";

const ITEMS_PER_PAGE = 10

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

  useEffect(() => {
    setTimeout(() => fetchData(), 3000);
  }, []);

  useEffect(() => {
    // We slice from the original state, create a new one and generate the 
    // number of jobs for each page
    const endOffset = itemOffset + ITEMS_PER_PAGE;
    setCurrentJobs(jobs.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(jobs.length / ITEMS_PER_PAGE));
  }, [itemOffset, jobs]);

  // Using "any" because React-Pagination's structure is a bit messy
  // Would investigate the correct type with more time
  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * ITEMS_PER_PAGE) % jobs.length;
    setItemOffset(newOffset);
  };
  

  return (
    <div className="App">
        <Header />
        {isLoading && <div data-testid="app-loader" className="Loader"><p>Loading...</p></div>}
        {!!jobs.length && !isLoading && (
          <main data-testid="app-jobs" className="App-jobs">
            <OrderBy onOrderSelection={setOrderBy} />
            <JobList jobs={currentJobs} orderBy={orderBy} />
          </main>
        )}
        {!!jobs.length && !isLoading && (
        <ReactPaginate
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="< previous"
          containerClassName="Pagination-container"
          activeClassName="Pagination-active"
          pageClassName="Pagination-element"
        />) }
    </div>
  );
};

export default App;
