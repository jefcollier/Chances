# Chances App

This is a React application designed to help users calculate probabilities for various scenarios, specifically focusing on dice rolls and card hands.

## Features

- **Home Page**: A welcoming introduction to the application.
- **Dice Probability Calculator**: Allows users to input dice configurations and modifiers to calculate and visualize probabilities of different outcomes. Features a two-column layout, with a toggle to switch between shorthand input (e.g., `2d4+3`) and detailed individual dice counts and modifier. Results are displayed in both a table and a chart.
- **Card Probability Calculator**: This page now features a tabbed interface to organize different card-related probability tools:
    - **Poker Hand Probability**: Enables users to calculate the probability of drawing specific card hands based on user-defined criteria.
    - **Blackjack Concepts**: Provides a calculator to determine the probability of busting, reaching 21, or achieving a safe total (17-21) when hitting, considering the player's hand, dealer's up-card, and number of other players.
    - **Conditional Card Probability**: Calculates the probability of drawing a specific card rank from the remaining deck, given that some cards of that rank have already been seen.
- **Birthday Paradox Calculator**: A dedicated page that calculates the probability of at least two people sharing a birthday in a group of a given size, demonstrating a counter-intuitive probability concept.

## Technologies Used

- React
- React Router DOM
- Bootstrap (for styling and UI components like Navbar, Cards, Tabs, Switches, Input Groups)
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
│   │   ├───BirthdayParadoxPage.js # New dedicated page for Birthday Paradox
│   │   ├───CardCalculatorPage.js
│   │   ├───DiceCalculatorPage.js
│   │   ├───HomePage.js
│   │   ├───NavigationBar.js
│   │   └───...
│   └───...
├───package.json        # Project metadata and dependencies
├───package-lock.json   # Dependency tree lock file
└───README.md           # This file
```