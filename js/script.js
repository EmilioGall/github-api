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

   switch (typeInputElem.value) {

      case '1':

         //Call function for repositories research
         search(searchInput.value, typeInputElem.value);

         break;

      case '2':

         //Call function for users research
         search(searchInput.value, typeInputElem.value);

         break;

      case '3':

         //Call function for organizations research
         search(searchInput.value, typeInputElem.value);

         break;

      default:

         //Call function for repositories research
         search(searchInput.value, typeInputElem.value);

         break;

   }

});