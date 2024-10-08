// Define const for Search Button
const submitBtn = document.getElementById("search-btn");

// Define const for Output Div
const outputDivElem = document.getElementById("output-div");

// Define const for Base URL of GitHub Search Repositories API
const apiUrl = 'https://api.github.com/search/repositories';

// Add EventListener on click of [Search Button]
submitBtn.addEventListener("click", function (event) {
   // Prevent default behaviour on event
   event.preventDefault();

   // Define const for Search Input
   const searchInput = document.getElementById("search-input");

   //Call function for repositories research
   searchRepositories(searchInput.value);

});