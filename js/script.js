// Define const for Search Button
const submitBtn = document.getElementById("search-btn");

// Define const for Output Div
const outputDivElem = document.getElementById("output-div");

// Define const for Input Group Div
const inputgroupDivElem = document.getElementById("input-group");

// Define const for Search Type Input
const typeInputElem = document.getElementById("search-type-input");

// Print correct options in Select tag of Input Group
printSelectOnInputgroup();

// Add an event listener for the 'change' event of [typeInputElem]
typeInputElem.addEventListener('change', function () {

   // Print correct options in Select tag of Input Group
   printSelectOnInputgroup();

});


// Add an event listener on click of [Search Button]
submitBtn.addEventListener("click", function (event) {

   // Prevent default behaviour on event
   event.preventDefault();

   // Define const for Search Input
   const searchInput = document.getElementById("search-input");

   console.log('searchInput.value.trim().length', searchInput.value.trim().length);
   
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


});