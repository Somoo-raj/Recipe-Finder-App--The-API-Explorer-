const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-btn");
const recipeContainer = document.getElementById("recipe-container");

// Free Public Recipe API URL

const API_URL = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

// 1. Click event on search button
searchBtn.addEventListener("click", () => {
  const query = searchInput.value.trim();
  if (query === "") {
    alert("First type something...");
    return;
  }
  fetchRecipes(query);
});

// 2. Async function that will fetch data from the API
async function fetchRecipes(query) {
  try {
    // Loading state showing
    recipeContainer.innerHTML = `
        <p style="gird-column: 1 / -1;
        text-align: center;
        color: #38bdf8;">Looking for recipe...</p>`;

    // Sending request to the API
    const response = await fetch(API_URL + query);
    const data = await response.json();

    // If no recipe was found
    if (!data.meals) {
      recipeContainer.innerHTML = `
            <p style="grid-column: 1 / -1;
            text-align: center;
            color: #ef4444;">Couldn't find any recipes! Try something else.</p>`;
      return;
    }

    // Rendering to the recipes screen
    displayRecipes(data.meals);
  } catch (error) {
    // If there is any problem with the internet or server
    console.error("Error fething data:", error);
    recipeContainer.innerHTML = `
            <p style="grid-column: 1 / -1;
            text-align: center;
            color: #ef4444;">Something went wrong! Check internet connection.</p>`;
  }
}

// 3. Function to convert recipes into HTML cards and display them
function displayRecipes(meals) {
  recipeContainer.innerHTML = ""; // Clear the old results

  meals.forEach((meal) => {
    const card = document.createElement("div");
    card.classList.add("recipe-card");

    card.innerHTML = `<img src="${meal.strMealThumb}" alt="${meal.strMeal}">
        <div class="recipe-info">
        <h3>${meal.strMeal}</h3>
        <p><b>Category:</b> ${meal.category || "General"}</p>
        <p><b>Country:</b> ${meal.strArea || "World"}</p>
        </div>`;

    recipeContainer.appendChild(card);
  });
}

// 4. If the user empties the input box, the recipes container will be cleard
searchInput.addEventListener("input", (e) => {
  if (e.target.value.trim() === "") {
    recipeContainer.innerHTML = "";
  }
});
