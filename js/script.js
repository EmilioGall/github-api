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

// Define const for Search Input
const searchInput = document.getElementById("search-input");

console.log('searchInput.value.trim().length', searchInput.value.trim().length);

// Create a debounced version of handleResearch()
const debouncedHandleResearch = debounce(handleResearch, 700);

// Create a debounced version of printLoader()
const debouncedPrintLoader = debounce(printLoader, 1000);

// Add an event listener on click of [Search Button]
submitBtn.addEventListener("click", function (event) {

   // Prevent default behaviour on event
   event.preventDefault();

   // Print Loader in main DOM element.
   debouncedPrintLoader();

   // Call the debounced function
   debouncedHandleResearch();

});

// Add input event listener on [search Input]
searchInput.addEventListener('input', function () {

   // Check if input length is >= 3
   if (searchInput.value.trim().length >= 3) {

      // Print Loader in main DOM element.
      debouncedPrintLoader();

      // Call the debounced function
      debouncedHandleResearch();

   };

});