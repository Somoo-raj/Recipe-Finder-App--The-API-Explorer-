# Recipe Finder App

A sleek and responsive web application built with **Vanilla JavaScript** that allows users to search for various recipes worldwide using an external public API.

This project was built to master asynchronous JavaScript operations (`fetch`, `async/await`), error handling (`try/catch`), dynamic DOM manipulation, and responsive CSS Grid layouts.

---

## Features

- **Live Recipe Search**: Type any ingredient or recipe name (e.g., _chicken_, _pasta_, _cake_) to instantly fetch and display matching recipes.
- **Dynamic DOM Rendering**: Automatically generates responsive recipe cards using JavaScript template literals and DOM methods.
- **UX Auto-Clear**: Automatically clears the search results and screen when the input box is emptied.
- **Robust Error Handling**: Gracefully handles network failures, server errors, and empty search states using `try/catch` blocks.
- **Responsive Design**: Built with CSS Grid and Flexbox to ensure seamless layout adaptation across mobile devices, tablets, and desktops.
- **Modern Dark UI**: Clean, eye-friendly dark mode interface styled with custom CSS transitions.

---

## Technologies Used

- **HTML5**: Semantic markup structure.
- **CSS3**: Custom styling, CSS Grid, Flexbox, and hover animations.
- **JavaScript (ES6+)**: Asynchronous programming (`async/await`, `fetch` API, array methods, event listeners).
- **API**: [TheMealDB API](https://www.themealdb.com/api.json) (Free public recipe database).

---

## Project Structure

```text
recipe-finder-app/
│
├── index.html       # Main HTML structure
├── style.css        # Styling and layout rules
└── script.js        # Core logic, API fetching, and DOM manipulation


*** Getting Started & Installation ***

To run this project locally on your machine, follow these simple steps:

1. Clone or Download this repository to your local machine.
2. Open the project folder in your favorite code editor (like Visual Studio Code).
3. Open the index.html file directly in your web browser (or use the Live Server extension in VS Code for an optimal local development experience).

*** How It Works ***

1. The user inputs a search query into the search bar.
2. An input listener checks if the field is empty, automatically clearing the results container if wiped clean.
3. Upon clicking the Search button, an asynchronous fetch request is sent to TheMealDB API.
4. The application awaits the JSON response inside a try/catch block, ensuring safe execution even if the network fails.
5. If valid meals are returned, JavaScript dynamically loops through the array, constructs HTML cards, and appends them to the DOM.


*** Future Enhancements ***

* [ ] Add a detailed modal popup showing full ingredient lists and step-by-step cooking instructions when a card is clicked.
* [ ] Implement a "Favorite Recipes" feature using browser LocalStorage.
* [ ] Add a loading spinner animation during API data fetching.
```
