# Chances App

This is a React application designed to help users calculate probabilities for various scenarios, specifically focusing on dice rolls and card hands.

## Features

- **Home Page**: A welcoming introduction to the application.
- **Dice Probability Calculator**: Allows users to input dice configurations and modifiers to calculate and visualize probabilities of different outcomes. Results are displayed in both a table and a chart.
- **Card Probability Calculator**: Enables users to calculate the probability of drawing specific card hands based on user-defined criteria.

## Technologies Used

- React
- React Router DOM
- Bootstrap (for styling)
- Chart.js (for data visualization)

## Getting Started

To run this project locally, navigate to the `chances-app` directory and follow these steps:

1.  **Install Dependencies**:
    ```bash
    npm install
    ```

2.  **Start the Development Server**:
    ```bash
    npm start
    ```

    This will open the application in your browser at `http://localhost:3000`.

## Project Structure

```
chances-app/
├───public/             # Public assets (HTML, images)
├───src/
│   ├───App.js          # Main application component and routing
│   ├───index.js        # Entry point of the React application
│   ├───components/     # Reusable React components
│   │   ├───CardCalculatorPage.js
│   │   ├───DiceCalculatorPage.js
│   │   ├───HomePage.js
│   │   └───NavigationBar.js
│   │   └───...
│   └───...
├───package.json        # Project metadata and dependencies
├───package-lock.json   # Dependency tree lock file
└───README.md           # This file
```
