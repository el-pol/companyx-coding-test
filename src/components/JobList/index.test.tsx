import React from "react";
import { render, screen, within } from "@testing-library/react";
import JobList from "./index";
import { OrderTypes } from "../../types/order";

const jobsMock = [{
  id: "1e0afc31-a9ff-4a25-bc79-275a6828b96e",
  description:
    "Quis sit doloremque sit vitae ipsa et error excepturi. Aliquam provident et quaerat distinctio. Sunt repellendus sed aut rerum sunt eligendi ipsum minima. Voluptatem ut reprehenderit sunt delectus ex vel veritatis hic. Est quidem in repudiandae doloremque earum rerum esse. Rerum omnis voluptas rerum aut amet. Unde consequatur omnis nesciunt omnis accusantium. Quisquam et odio qui eveniet. Illo architecto non quisquam tenetur quasi. Nisi occaecati asperiores. Quasi neque voluptate laborum eos sed repellat rem harum rem.",
  role: "Tools Creator",
  url: "http://vague-stuff.org",
  city: "Lompoc",
  priority: 0,
  company: {
    name: "First Priority",
  }
   },
  {
  id: "2e0afc31-a9ff-4a25-bc79-275a6828b96e",
  description:
    "Quis sit doloremque sit vitae ipsa et error excepturi. Aliquam provident et quaerat distinctio. Sunt repellendus sed aut rerum sunt eligendi ipsum minima. Voluptatem ut reprehenderit sunt delectus ex vel veritatis hic. Est quidem in repudiandae doloremque earum rerum esse. Rerum omnis voluptas rerum aut amet. Unde consequatur omnis nesciunt omnis accusantium. Quisquam et odio qui eveniet. Illo architecto non quisquam tenetur quasi. Nisi occaecati asperiores. Quasi neque voluptate laborum eos sed repellat rem harum rem.",
  role: "Tools Creator",
  url: "http://vague-stuff.org",
  city: "Lompoc",
  priority: 1,
  company: {
    name: "Second Priority",
  },
 },
 {
  id: "3e0afc31-a9ff-4a25-bc79-275a6828b96e",
  description:
    "Quis sit doloremque sit vitae ipsa et error excepturi. Aliquam provident et quaerat distinctio. Sunt repellendus sed aut rerum sunt eligendi ipsum minima. Voluptatem ut reprehenderit sunt delectus ex vel veritatis hic. Est quidem in repudiandae doloremque earum rerum esse. Rerum omnis voluptas rerum aut amet. Unde consequatur omnis nesciunt omnis accusantium. Quisquam et odio qui eveniet. Illo architecto non quisquam tenetur quasi. Nisi occaecati asperiores. Quasi neque voluptate laborum eos sed repellat rem harum rem.",
  role: "Tools Creator",
  url: "http://vague-stuff.org",
  city: "Lompoc",
  priority: 2,
  company: {
    name: "Third Priority",
  },
 }
];

const orderRandom = OrderTypes.Random
const orderPriority = OrderTypes.Priority

test("renders job list with correct number of elements", () => {
  render(<JobList jobs={jobsMock} orderBy={orderRandom} />);
  const jobListElement = screen.getByTestId("job-list")
  const jobItem = screen.queryAllByText(/Tools Creator/i)
  
  expect(jobListElement).toBeInTheDocument();

  expect(jobItem).toHaveLength(jobsMock.length)  


});

test("sorts by priority", () => {
  render(<JobList jobs={jobsMock} orderBy={orderPriority} />);
  const jobListElement = screen.getByTestId("job-list")
  const jobItems = screen.queryAllByTestId('company')
  const firstJobItem = jobItems[0]
  const secondJobItem = jobItems[1]
  
  expect(jobListElement).toBeInTheDocument();

  expect(firstJobItem).toHaveTextContent(/first priority/i)
  expect(secondJobItem).toHaveTextContent(/second priority/i)

});