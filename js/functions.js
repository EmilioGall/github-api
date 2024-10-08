/**
 * Description: function prints object result card in main DOM element.
 * @param {object} titleToPrintOnDisplay
 */
function printResultCard(objectToPrint, indexOfObject) {

   // Define const for Output Div
   const outputDivElem = document.getElementById("output-div");

   // console.log("outputDivElem:", outputDivElem);

   // Print on (outputDivElem) the attributes of (printTitleOnDisplay).
   outputDivElem.innerHTML += `
      <div class="col-4">

         <div class="card">

            <img src="..." class="card-img-top" alt="Icon of ${objectToPrint.name} repository">

            <div class="card-body">

               <h5 class="card-title">Card title</h5>

               <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

            </div>

            <ul class="list-group list-group-flush">

               <li class="list-group-item">An item</li>
               <li class="list-group-item">A second item</li>
               <li class="list-group-item">A third item</li>

            </ul>

            <div class="card-body">

               <a href="#" class="card-link">Card link</a>
               <a href="#" class="card-link">Another link</a>

            </div>

         </div>

      </div>
   `;

};