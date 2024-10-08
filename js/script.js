// Define const for Search Button
const submitBtn = document.getElementById("search-btn");

// Define const for Output Div
const outputDivElem = document.getElementById("output-div");

// Define const for Base URL of GitHub Search Repositories API
const apiUrl = 'https://api.github.com/search/repositories';

// Add EventListener on click of [Search Button]
submitBtn.addEventListener("click", async function (event) {
   // Prevent default behaviour on event
   event.preventDefault();

   // Define const for Search Input
   const searchInput = document.getElementById("search-input");

   // Define const for Sort Input
   const sortInput = document.getElementById("sort-input");

   // Define const for Search Input
   const orderInput = document.getElementById("order-input");

   // Define variable for sort value
   let sortValue = 'stars'; // default

   // Determine sortValue based on selected option
   switch (sortInput.value) {

      // Check for '1' for ascending sort
      case '1':

         sortValue = 'stars';

         break;

      // Optionally handle '2' for descending sort
      case '2':

         sortValue = 'forks';

         break;

      // Optionally handle '2' for descending sort
      case '3':

         sortValue = 'help-wanted-issues';

         break;

      // Optionally handle '2' for descending sort
      case '4':

         sortValue = 'updated';

         break;

      // Default case
      default:

         sortValue = 'desc';

         break;

   };

   // Define variable for order value
   let orderValue = 'desc'; // default

   // Determine orderValue based on selected option
   switch (orderInput.value) {

      // Check for '1' for ascending order
      case '1':

         orderValue = 'desc';

         break;

      // Optionally handle '2' for descending order
      case '2':

         orderValue = 'asc';

         break;

      // Default case
      default:

         orderValue = 'desc';

         break;

   };

   console.log(`Sort value is: ${sortValue}`);

   console.log(`Order value is: ${orderValue}`);

   // Prepare Params for API call
   const params = {

      q: searchInput.value,
      sort: sortValue,
      order: orderValue,
      per_page: 15,
      page: 1,

   };

   // Prepare Header for API call
   const headers = {

      "Authorization": `Bearer ${config.token}`,
      "X-GitHub-Api-Version": "2022-11-28"

   };

   // Create URL with query parameters
   const queryString = new URLSearchParams(params).toString();

   const url = `${apiUrl}?${queryString}`;

   try {

      // Fetch data from API
      const response = await fetch(url, { headers });

      // Trow Errors for response not OK
      if (response.status !== 200) {

         if (response.status === 304) {

            throw new Error('Not modified');

         } else if (response.status === 401) {

            throw new Error('Unauthorized');

         } else if (response.status === 404) {

            throw new Error('Data not found');

         } else if (response.status === 422) {

            throw new Error('Validation failed, or the endpoint has been spammed.');

         } else if (response.status === 500) {

            throw new Error('Server error');

         } else if (response.status === 503) {

            throw new Error('Service unavailable');

         } else {

            throw new Error('Network response was not ok');

         }
      };

      if (response.status == 200) {

         console.log('Call succeed');

      }

      // Parse response data
      const data = await response.json();

      // console.log('Risultati della ricerca:', data.items);

      const reposArray = data.items;

      console.log('Array result:', reposArray);


      if (reposArray.length < 1) {

         outputDiv.innerHTML = `No repository found.`

      }

      outputDivElem.innerHTML = '';


      reposArray.forEach(repo => {

         printResultCard(repo);

      });



   } catch (error) {

      console.error('Error:', error);

   }

});