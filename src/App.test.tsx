import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import App from "./App";

test("renders joblist", async () => {
  render(<App />);
  setTimeout(async () => {
    const jobsElement = screen.getByTestId("app-jobs");
    expect(jobsElement).toBeInTheDocument();
  }, 5000);

});

test("renders loader if we are loading", async () => {
  render(<App />);
  const loader = screen.getByTestId("app-loader");
  expect(loader).toBeInTheDocument();
});

test("the loader is not there if the joblist is present", async () => {
  render(<App />);
  const loader = screen.getByTestId("app-loader");
  setTimeout(async () => {
    const jobsElement = screen.getByTestId("app-jobs");
    expect(jobsElement).toBeInTheDocument();
    expect(loader).not.toBeInTheDocument();
  }, 5000);
});
