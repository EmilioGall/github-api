/**
 * Description: function prints object result card in main DOM element.
 * @param {object} objectToPrint
 */
function printResultCard(objectToPrint) {

   // Print on (outputDivElem) the attributes of (printTitleOnDisplay).
   outputDivElem.innerHTML += `
      <div class="col">

         <div class="card h-100" style="box-shadow: 1px 1px 10px #888888;">

            <img src="${objectToPrint.owner.avatar_url}" class="card-img-top rounded-circle mx-auto mt-3" alt="Icon of ${objectToPrint.name} repository" style="width: 50%; aspect-ratio: 1; box-shadow: 1px 1px 5px #888888;">

            <div class="card-body h-50">

               <h5 class="card-title">${objectToPrint.name}</h5>

               <p class="card-text">${objectToPrint.description !== null ? objectToPrint.description : '...'}</p>

            </div>

            <ul class="list-group list-group-flush">

               <li class="list-group-item"><i class="pe-3 fa-solid fa-star"></i> ${objectToPrint.stargazers_count}</li>
               <li class="list-group-item"><i class="pe-3 fa-solid fa-code-fork"></i> ${objectToPrint.forks_count}</li>
               <li class="list-group-item"><i class="pe-3 fa-solid fa-bars-progress"></i> <span class="badge bg-primary-subtle border border-primary-subtle text-primary-emphasis rounded-pill">${objectToPrint.language}</span></li>

            </ul>

            <div class="card-body text-center">

               <a href="${objectToPrint.svn_url}" class="card-link">Vai al repo <i class="fa-solid fa-arrow-up-right-from-square"></i></a>

            </div>

         </div>

      </div>
   `;

};


/**
 * Description: function define constants value for [sortValue].
 * @returns {string} sortValue
 */
function getFormSortValue() {

   // Define const for Sort Input
   const sortInput = document.getElementById("sort-input");

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

   console.log(`Sort value is: ${sortValue}`);

   return sortValue;

};

/**
 * Description: function define constants value for [orderValue].
 * @returns {string} orderValue
 */
function getFormOrderValue() {

   // Define const for Order Input
   const orderInput = document.getElementById("order-input");

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

   console.log(`Order value is: ${orderValue}`);

   return orderValue;

};


/**
 * Description: function prints object result card in main DOM element.
 * @param {string} searchInputValue
 */
async function searchRepositories(searchInputValue) {

   // Prepare Params for API call
   const params = {

      q: searchInputValue,
      sort: getFormSortValue(),
      order: getFormOrderValue(),
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

      // Cleare output-div Element
      outputDivElem.innerHTML = '';

      if (reposArray.length < 1) {

         outputDivElem.innerHTML = `
         <div class="alert alert-info text-center w-100" role="alert">
            No repository found.
         </div>`

      }

      reposArray.forEach(repo => {

         printResultCard(repo);

      });

   } catch (error) {

      console.error('Error:', error);

   }

};