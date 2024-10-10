/**
 * Description: function prints paginator.
 * @param {object} repoToPrint
 */
function handlePagination(curPage, totalResults, elemPerPage) {

   //Clean [paginatorContainerElem]
   paginatorContainerElem.innerHTML = '';

   // Print on [paginatorContainerElem] paginator scaffolding.
   paginatorContainerElem.innerHTML += `
      <nav class="page-navigator row g-3 align-items-center justify-content-center py-3" aria-label="Page navigation example">



      </nav>
   `;

   // Define const for Pagination Nav Element
   const paginationNavElem = document.querySelector(".page-navigator");

   // Print on [paginationNavElem] Select Input [per_page], List Pagination and Select Input [page].
   paginationNavElem.innerHTML += `
      <div class="col-3">
         <select class="form-select m-0" aria-label="Select per page">
            <option selected>Results per page</option>
            <option value="5">5</option>
            <option value="15">15</option>
            <option value="30">30</option>
            <option value="50">50</option>
            <option value="75">75</option>
            <option value="100">100</option>
         </select>
      </div>
      
      <div class="col-3">
         <ul class="pagination pagination-sm justify-content-center m-0 py-2">


         </ul>
      </div>

      <div class="col-3">
         <select class="form-select select-page m-0" aria-label="Select per page">

         
         </select>
      </div>
   `;

   // Define const for Pagination Select Page Element
   const paginationSelectPageElem = document.querySelector(".select-page");

   // Print on [paginationSelectPageElem] Select Input [pages].
   paginationSelectPageElem.innerHTML += `

      <option selected>Select page</option>

   `;

   console.log('Numero Pagine:', (Math.floor(totalResults / elemPerPage) + 1));
   

   for (let i = 0; i < (Math.floor(totalResults / elemPerPage) + 1); i++) {
      // const element = array[i];
      
      console.log('ciclato:', i+1);
      
      
      paginationSelectPageElem.innerHTML += `

         <option value="${i+1}">${i+1}</option>

      `;

   };

   // Define const for Pagination
   const paginationElem = document.querySelector(".pagination");

   // Print on [paginationElem] Previous Button.
   paginationElem.innerHTML += `
      <li id="previous-btn" class="page-item ${curPage == '1' ? 'disabled' : ''}">

         <button class="page-link" aria-label="Previous">

            <span aria-hidden="true">&laquo;</span>

         </button>

      </li>
   `;

   // Print on [paginationElem] numbered button.
   for (let i = 0; i < totalResults; i++) {

      if (curPage == i && curPage < Math.floor(totalResults / elemPerPage) + 1 || curPage == i + 2) {

         paginationElem.innerHTML += `
         <li class="page-item">
   
            <button class="page-link number-link" page="${i + 1}">${i + 1}</button>
   
         </li>
         `;

      } else if (curPage == i + 2) {

         paginationElem.innerHTML += `
         <li class="page-item">
   
            <button class="page-link number-link" page="${i + 1}">${i + 1}</button>
   
         </li>
         `;

      } else if (i + 1 == curPage) {

         paginationElem.innerHTML += `
         <li class="page-item active">
   
            <button class="page-link number-link" page="${i + 1}">${i + 1}</button>
   
         </li>
         `;

      };

   };

   if (curPage == 1 && Math.floor(totalResults / elemPerPage) + 1 > 3) {

      paginationElem.innerHTML += `
      <li class="page-item">

         <button class="page-link number-link" page="3">3</button>

      </li>
      `;

   };

   // Print on [paginationElem] Next Button.
   paginationElem.innerHTML += `
      <li id="next-btn" class="page-item ${curPage == Math.floor(totalResults / elemPerPage) + 1 ? 'disabled' : ''}">

         <button class="page-link" aria-label="Next">

            <span aria-hidden="true">&raquo;</span>

         </button>

      </li>
   `;

   //////////////////////////////////////////////////////////////////////

   // Define const for Previous Button
   const previousBtn = document.getElementById("previous-btn");

   // Add an event listener on click of [Previous Button]
   previousBtn.addEventListener("click", function () {

      if (curPage > 1) {

         selectedCurPage--;

         // Print Loader in main DOM element.
         debouncedPrintLoader();

         // Call the debounced function
         debouncedHandleResearch();
      };

   });

   // Define const for Next Button
   const nextBtn = document.getElementById("next-btn");

   // Add an event listener on click of [Next Button]
   nextBtn.addEventListener("click", function () {

      if (curPage < Math.floor(totalResults / elemPerPage) + 1) {

         selectedCurPage++;

         // Print Loader in main DOM element.
         debouncedPrintLoader();

         // Call the debounced function
         debouncedHandleResearch();
      };

   });

   // Define const for Numbers Buttons
   const numbersBtns = document.querySelectorAll(".number-link");

   numbersBtns.forEach(numBtn => {

      // Add an event listener on click of [Next Button]
      numBtn.addEventListener("click", function (e) {

         selectedCurPage = numBtn.attributes.page.nodeValue;

         console.log('selectedCurPage', selectedCurPage);

         // Print Loader in main DOM element.
         debouncedPrintLoader();

         // Call the debounced function
         debouncedHandleResearch();

      });

   });

};

/**
 * Description: function prints correct select options on input group DOM element.
 * 
 */
function printSelectOnInputgroup() {

   if (typeInputElem.value == '1') {

      inputgroupDivElem.innerHTML = `
         <select id="sort-input" class="form-select" aria-label="Select sort by">
   
            <option selected value="1">Stars</option>
            <option value="2">Forks</option>
            <option value="3">Issues</option>
            <option value="4">Updated</option>
   
         </select>
   
         <select id="order-input" class="form-select" aria-label="Select order">
   
            <option selected value="1">Desc</option>
            <option value="2">Asc</option>
   
         </select>`

   } else if (typeInputElem.value == '2' || typeInputElem.value == '3') {

      inputgroupDivElem.innerHTML = `
      <select id="sort-input" class="form-select" aria-label="Select sort by">
   
         <option selected value="1">Joined</option>
         <option value="2">Repos</option>
         <option value="3">Followers</option>
   
      </select>
   
      <select id="order-input" class="form-select" aria-label="Select order">
   
         <option selected value="1">Desc</option>
         <option value="2">Asc</option>
   
      </select>`

   };

};


/**
 * Description: function prints repository result card in main DOM element.
 * @param {object} repoToPrint
 */
function printRepoCard(repoToPrint) {

   let shortDescription = '';

   const descriptionLength = 80;

   let shortName = '';

   const nameLength = 25;

   if (repoToPrint.description !== null) {

      if (repoToPrint.description.length > descriptionLength) {

         shortDescription = `${repoToPrint.description.slice(0, descriptionLength)}...`;

      } else {

         shortDescription = repoToPrint.description;

      };

   } else if (repoToPrint.description == null) {

      shortDescription = '...';

   };

   if (repoToPrint.name !== null) {

      if (repoToPrint.name.length > nameLength) {

         shortName = `${repoToPrint.name.slice(0, nameLength)}...`;

      } else {

         shortName = repoToPrint.name;

      };

   } else if (repoToPrint.name == null) {

      shortName = '...';

   };

   // Print on (outputDivElem) the attributes of (printTitleOnDisplay).
   outputDivElem.innerHTML += `
      <div class="col">

         <div class="card h-100" style="box-shadow: 1px 1px 10px #888888;">

            <img src="${repoToPrint.owner.avatar_url}" class="card-img-top rounded-circle mx-auto mt-3" alt="Icon of ${shortName} repository" style="width: 50%; aspect-ratio: 1; box-shadow: 1px 1px 5px #888888;">

            <div class="card-body h-50">

               <h5 class="card-title">${shortName}</h5>

               <p class="card-text">${shortDescription}</p>

            </div>

            <ul class="list-group list-group-flush">

               <li class="list-group-item"><i class="pe-3 fa-solid fa-star"></i> ${repoToPrint.stargazers_count}</li>
               <li class="list-group-item"><i class="pe-3 fa-solid fa-code-fork"></i> ${repoToPrint.forks_count}</li>
               <li class="list-group-item"><i class="pe-3 fa-solid fa-bars-progress"></i> <span class="badge bg-primary-subtle border border-primary-subtle text-primary-emphasis rounded-pill">${repoToPrint.language}</span></li>

            </ul>

            <div class="card-body text-center">

               <a href="${repoToPrint.svn_url}" class="card-link">Vai al repo <i class="fa-solid fa-arrow-up-right-from-square"></i></a>

            </div>

         </div>

      </div>
   `;

};

/**
 * Description: function prints user result card in main DOM element.
 * @param {object} userToPrint
 */
function printUserCard(userToPrint) {

   // Print on (outputDivElem) the attributes of (printTitleOnDisplay).
   outputDivElem.innerHTML += `
      <div class="col">

         <div class="card h-100" style="box-shadow: 1px 1px 10px #888888;">

            <img src="${userToPrint.avatar_url}" class="card-img-top rounded-circle mx-auto mt-3" alt="Icon of ${userToPrint.login} repository" style="width: 50%; aspect-ratio: 1; box-shadow: 1px 1px 5px #888888;">

            <div class="card-body h-50">

               <h5 class="card-title">${userToPrint.login}</h5>

               <p class="card-text">Id: ${userToPrint.id} </p>

            </div>

            <ul class="list-group list-group-flush">

               <li class="list-group-item"><i class="pe-3 fa-solid fa-star"></i> ${userToPrint.score}</li>

            </ul>

            <div class="card-body text-center">

               <a href="${userToPrint.html_url}" class="card-link">Vai al repo <i class="fa-solid fa-arrow-up-right-from-square"></i></a>

            </div>

         </div>

      </div>
   `;

};

/**
 * Description: function prints Loader in main DOM element.
 * 
 */
function printLoader() {

   if (searchInput.value.trim().length >= 3) {

      // Print on (outputDivElem) the Loader.
      outputDivElem.innerHTML = `
         <div class="alert alert-light mx-auto d-flex justify-content-between align-items-center" role="alert">
   
            <span role="status">Loading...</span> 
            <span class="spinner-grow spinner-grow-sm" aria-hidden="true"></span>
   
         </div>
      `;

   };

};


/**
 * Description: function define constants value for [sortValue].
 * @returns {string} sortValue
 */
function getFormSortValue(searchInputTypeValue) {

   // Define const for Sort Input
   const sortInput = document.getElementById("sort-input");


   if (searchInputTypeValue == '1') {

      let sortValue = '';

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

         // Optionally handle '3' for descending sort
         case '3':

            sortValue = 'help-wanted-issues';

            break;

         // Optionally handle '4' for descending sort
         case '4':

            sortValue = 'updated';

            break;

         // Default case
         default:

            sortValue = 'stars';

            break;

      };

      console.log(`Sort value is: ${sortValue}`);

      return sortValue;

   } else if (searchInputTypeValue == '2' || searchInputTypeValue == '3') {

      let sortValue = '';

      // Determine sortValue based on selected option
      switch (sortInput.value) {

         // Check for '1' for ascending sort
         case '1':

            sortValue = 'joined';

            break;

         // Optionally handle '2' for descending sort
         case '2':

            sortValue = 'repositories';

            break;

         // Optionally handle '3' for descending sort
         case '3':

            sortValue = 'followers';

            break;

         // Default case
         default:

            sortValue = 'joined';

            break;

      };

      return sortValue;

   };

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

   return orderValue;

};


/**
 * Description: function search for results looking for similar name given Input string and type.
 * @param {string} searchInputValue
 * @param {string} searchInputTypeValue
 */
async function search(searchInputValue, searchInputTypeValue) {
   // 1 - Repositories
   // 2 - Users
   // 3 - Organizations


   // Define const for Base URL of GitHub Search API endpoint based on search  type
   let apiUrl = '';

   if (searchInputTypeValue == '2' || searchInputTypeValue == '3') {

      apiUrl = 'https://api.github.com/search/users';

   } else if (searchInputTypeValue == '1') {

      apiUrl = 'https://api.github.com/search/repositories';

   };

   console.log('apiUrl', apiUrl);

   // Prepare Params for API call
   const params = {

      q: `${searchInputValue}${searchInputTypeValue == '1' ? '' : (searchInputTypeValue == '2') ? ' type:user' : ' type:org'}`,
      sort: getFormSortValue(searchInputTypeValue),
      order: getFormOrderValue(),
      per_page: selectedResults,
      page: selectedCurPage,

   };

   console.log('params', params);


   // Prepare Header for API call
   const headers = {

      "Authorization": `Bearer ${config.token}`,
      "X-GitHub-Api-Version": "2022-11-28"

   };

   // Create URL with query parameters
   const queryString = new URLSearchParams(params).toString();
   const url = `${apiUrl}?${queryString}`;

   console.log('url', url);

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

      };

      // Parse response data
      const data = await response.json();

      console.log('Object result:', data);

      const resultsArray = data.items;

      // console.log('Array result:', resultsArray);

      // Clean (outputDivElem)
      outputDivElem.innerHTML = '';

      // Print No Results alert in main DOM element if [resultsArray] is empty.
      if (resultsArray.length < 1) {

         outputDivElem.innerHTML = `
         <div class="alert alert-info text-center w-100" role="alert">

            No results found.

         </div>
         `;

      } else if (resultsArray.length >= 1) {

         if (searchInputTypeValue == '2' || searchInputTypeValue == '3') {

            resultsArray.forEach(result => {

               // Print User or Organization result card in main DOM element.
               printUserCard(result);

            });

         } else if (searchInputTypeValue == '1') {

            resultsArray.forEach(result => {

               // Print Repository result card in main DOM element.
               printRepoCard(result);

            });

         };

         // Print paginator in main DOM element.
         handlePagination(selectedCurPage, data.total_count, selectedResults);

      };



   } catch (error) {

      console.error('Error:', error);

   };

};


/**
 * Description: function handle research based on Search Type.
 * 
 */
function handleResearch() {

   if (searchInput.value.trim().length >= 3) {

      // Start research based on Search Type.
      switch (typeInputElem.value) {

         case '1':

            //Call function for repositories research
            search(searchInput.value.trim(), typeInputElem.value);

            break;

         case '2':

            //Call function for users research
            search(searchInput.value.trim(), typeInputElem.value);

            break;

         case '3':

            //Call function for organizations research
            search(searchInput.value.trim(), typeInputElem.value);

            break;

         default:

            //Call function for repositories research
            search(searchInput.value.trim(), typeInputElem.value);

            break;

      };

   } else if (searchInput.value.trim().length < 3 && searchInput.value.trim().length > 0) {

      // Print Input too short alert in main DOM element.
      outputDivElem.innerHTML = `
         <div class="alert alert-warning text-center w-100" role="alert">
   
            Input text should be at least 3 digits.
   
         </div>
      `;

   } else if (searchInput.value.trim().length <= 0) {

      // Print Input text needed alert in main DOM element.
      outputDivElem.innerHTML = `
         <div class="alert alert-warning text-center w-100" role="alert">
   
            Input text needed.
   
         </div>
      `;

   };

};

/**
 * Description: function calls the given function [functionToCall] only after time param [waitTime].
 * @param {function} functionToCall
 * @param {number} waitTime
 * @returns {function} 
 */
function debounce(functionToCall, waitTime) {

   // Define variable for timeout
   let timeout;

   return function () { // capture arguments passed to the debounced function

      // Clear the previous timer
      clearTimeout(timeout);

      // Capture context of function
      const context = this;

      timeout = setTimeout(() => {

         // Execute the function with the correct context
         functionToCall.call(context);

      }, waitTime);

   };

};