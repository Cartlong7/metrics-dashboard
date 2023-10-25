# Metrics Dashboard for Tacoma Code Violations

The Community Metrics Dashboard is a web application built with React, MUI, and Vite that displays statistics and information related to community code violations in Tacoma. This project fetches data from a GeoJSON source and presents it in a user-friendly dashboard format.

## Features

- Display a table of recent code violations.
- Implement pagination to show ten violations per page.
- Show the total number of violations.
- Visualize data using charts (TODO).

## Installation

1. Clone the repository to your local machine:

```bash
git clone https://github.com/Cartlong7/metrics-dashboard.git
```

2. Install the project dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and access the application at http://localhost:5173.

# System Design

## Frontend Considerations

- Use of React as a Frontend framework for component reusability
- Component-based architecture (see component file structure)
- React Hooks such as 'useState' allow for lightweight state management architecture

## Data Considerations

- Fetching GeoJSON data with 'fetch' API and React's 'useEffect' hook allow for simple management of data
- With the time alloted, I attempted to identify metrics for the table that I saw as important

## Pagination

- Pagination logic was important in limiting the number of results displayed in the UI
- NOTE: I may have wasted precious time on this feature when I could have implemented more interactivity logic for the UI

## UI

- Leaned on Material-UI for a predefined style and responsive UI.
- Customized the components to match the needs of the data
- NOTE: Dealing with MUI's many prebuilt layers can be very limiting for the developer experience. Working from scratch may have been more beneficial

# TODO

- Caching mechanisms for data would limit the amount of requests that would need to be sent to the API, this is especially import as the dataset scales
- Adding an interactive interface for the table, so that users can filter by date, address, owner, current case status, etc.
- Partitioning logic: Splitting client and server side logic will allow for easier scaling and potential for a non-monolithic structure (serverless hosting with AWS, Azure, etc.)
- REST API Design:
  - Define the API endpoints. For example:
    GET /locations: Retrieve a list of all geo-located items.
    POST /locations: Create a new geo-located item.
    GET /locations/{id}: Retrieve details of a specific geo-located item.
    PUT /locations/{id}: Update a specific geo-located item.
    DELETE /locations/{id}: Delete a specific geo-located item.
  - Use HTTP Methods for CRUD functionality
  - Implementation of Auth, potentially Google OAuth, to ensure only authorized people can access and modifiy data.
  - Error handling
- Testing: Ideally I would implement at least unit tests for this project with Jest to test interactivity and display across different environments.

### Overall I had a great time with the exercise and I look forward to talking through the limitations of it, as well as how I would improve it. Thanks!
