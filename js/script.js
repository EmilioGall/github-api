// Create a debounced version of handleResearch()
const debouncedHandleResearch = debounce(handleResearch, 700);

// Create a debounced version of printLoader()
const debouncedPrintLoader = debounce(printLoader, 1000);


//////////  Header //////////

// Print correct options in Select tag of Input Group
printSelectOnInputgroup();

// Add change event listener of [typeInputElem]
typeInputElem.addEventListener('change', function () {

   // Print correct options in Select tag of Input Group
   printSelectOnInputgroup();

   // Print Loader in main DOM element.
   debouncedPrintLoader();

   // Call the debounced function
   debouncedHandleResearch();

});

// Define const for Sort Input
const sortInput = document.getElementById("sort-input");

// Add change event listener of [sortInput]
sortInput.addEventListener('change', function () {

   // Print Loader in main DOM element.
   debouncedPrintLoader();

   // Call the debounced function
   debouncedHandleResearch();

});

// Define const for Order Input
const orderInput = document.getElementById("order-input");

// Add change event listener of [orderInput]
orderInput.addEventListener('change', function () {

   // Print Loader in main DOM element.
   debouncedPrintLoader();

   // Call the debounced function
   debouncedHandleResearch();

});

//////////  Main //////////

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

      selectedCurPage = 1;

      // Print Loader in main DOM element.
      debouncedPrintLoader();

      // Call the debounced function
      debouncedHandleResearch();

   };

});

//////////  Pagination //////////
