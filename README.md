# CompanyX Frontend test

Hi! Thanks for applying with us; we are thrilled about this! Let's quickly introduce you to the test. The project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## 🤓 Available Scripts

There is a set of scripts available to the project. While in the project directory, you can indeed run:

### `yarn start`

This command runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser; the page will reload as you make edits.
You will also see any lint errors in the console.

### `yarn test`

This command launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

This command builds the app for production and stores the results in the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance: the build is minified, and the filenames include the hashes.\
Finally, your app is ready to be deployed!
See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn run create:faker`

Run this command if you want to regenerate the list of our job offers. The new job offers list is inside the `./publc/jobs.json` file.

## 🧑‍🚀 Your tasks

- We forced a wait time of 3 seconds to simulate a very slow API call. The UX is not ideal now (sorry, we were in a hurry 😃). Can you offer us a solution that makes the wait less incomprehensible for our users?

- We work with many merge requests, so knowing how to explain your work well means a lot to us. Could you give us an example of a merge request created for the task of point 1? Here are some tips to help you with the job:

  1. Add "Why" of your changes
  2. Make Your PRs Small - small is not superficial
  3. Describe your solution
  4. Creates a list of technical debts created or uncovered (if any) or improvements that can be made

  > You can create a github `Pull request` or add a `merge-request.md` file inside the repo

- At the top of our job list, we give the possibility to sort our job offers. Unfortunately, the behaviour has never been completed. Would you be able to implement the order by priority? You can use the `priority` key inside our `job` object to sort the array. Just one more thing, if you have the time to test your sorting function, we will appreciate it very much.

- At this moment, we render our job offers at once. This is not a problem as long as our offers are 100, but it could become as the number of offers increases. Your task:

  1. Enter inside the `./bin/generateFaker.js` change the value of `NUMBER_OF_JOBS` and run `yarn run create:faker` to regenerate the list of job offers
  2. Try with 1000, 10000, 50000 job offers; what happens to the frontend? Are there any differences in the use of the page? Can you describe what procedure you used to find out any differences?
  3. Could you provide us with a solution to rendering all these job offers on the page? Don't worry; there is no right or wrong implementation.

- You will find some errors left on purpose in the code. If you encounter some of them and want to help solve them, feel free! We will be delighted.

- Please make sure to cover your code changes with automated tests, wherever you think this could be useful. While tests will not detect all problems, they can help point out the obvious ones.

- How many different/distinct secret keys can be generated using `wp_generate_password(8)`? Don't worry! We don't use WordPress, but we are happy to understand how you navigate through documentation of packages you don't know (oops, this could be a hint). Please, answer this question in a document named `answer.md` inside the repo.

> PS. Feel free to merge your pull requests in autonomy, we will find them among the pull requests closed, we don’t want you to get lost in conflicts ☺️

## ✅ What To Pay Attention To Besides The Tasks

- Simplicity — we would consider it a win if the code does not get more complex after adding more features and fixing issues.
- Make the changes easy to review — detailed pull request descriptions, small pull requests, commit granularity, descriptive commit messages.
- Design and code quality — separation of concerns, abstraction, naming...

## 🤟 Just a final reminder

We are human too, and sometimes we make mistakes, so, if you think that something is not clear enough or if something does not work correctly or if you have some doubts, feel free to contact us!

Thx and enjoy your test.

All the best.
