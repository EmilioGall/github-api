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

   // Define const for Search Type Input
   const typeInput = document.getElementById("search-type-input");

   switch (typeInput.value) {

      case '1':

         //Call function for repositories research
         searchRepositories(searchInput.value);

         break;

      case '2':

         //Call function for repositories research
         searchUsers(searchInput.value);

         break;

      case '3':

         //Call function for repositories research
         searchOrganizations(searchInput.value);

         break;

      default:

         //Call function for repositories research
         searchRepositories(searchInput.value);

         break;

   }

});