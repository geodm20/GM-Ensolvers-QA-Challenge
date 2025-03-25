# Ensolvers QA Automation Challenge 

This repository contains automated tests for the Ensolvers QA Challenge platform (a to-do and folder management application) using Playwright.

### Overview

The project automates key user flows, including:
- Folder management: creation, viewing, editing, and deletion.
- To-Do Items management: creation, editing, and validation of notes.
- UI validations for alerts and dropdowns.

### Project Stucture

project-root/
│
├── node_modules/               # Node.js dependencies
│
├── pages/                      # Project pages
│   ├── login.page.ts           # Login page
│   └── todoItemsAndFolder.page.ts  # Todo items and folder page
│
├── playwright-report/          # Playwright reports
│
├── tasks/                      # Task definitions
│   ├── Task 1.md               # Task 1 description
│   └── Task 2.md               # Task 2 description
│
├── test-results/               # Test execution results
│
├── tests/                      # Test files
│   ├── login.spec.ts           # Login tests
│   └── todoItemsAndFolder.spec.ts  # Todo items and folder tests
│   └── utils/                  # Test utilities
│
├── .gitignore                  # Git ignore configuration
├── package-lock.json           # Dependency version lock
├── package.json                # Project configuration and dependencies
└── playwright.config.ts        # Playwright configuration

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher recommended)
- [Playwright](https://playwright.dev/)

### Installation

1. Clone the repository:
   ```bash
   git clone <repository_url>
   
### Navigate to the project directory:
`cd <project_directory>`

### Install the dependencies:
`npx playwright test`

### Running Tests
To run all tests:
`npx playwright test`

To run a specific test file or test case, use:
`npx playwright test tests/todoItemsAndFolder.spec.ts`

### Contributing
Contributions, issues, and feature requests are welcome!
Feel free to check issues page if you want to contribute.

### License
This project is open source and available under the MIT License.

