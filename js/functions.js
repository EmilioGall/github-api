/**
 * Description: function prints object result card in main DOM element.
 * @param {object} titleToPrintOnDisplay
 */
function printResultCard(objectToPrint) {

   // Print on (outputDivElem) the attributes of (printTitleOnDisplay).
   outputDivElem.innerHTML += `
      <div class="col">

         <div class="card h-100" style="box-shadow: 1px 1px 10px #888888;">

            <img src="${objectToPrint.owner.avatar_url}" class="card-img-top rounded-circle mx-auto mt-3" alt="Icon of ${objectToPrint.name} repository" style="width: 50%; aspect-ratio: 1; box-shadow: 1px 1px 5px #888888;">

            <div class="card-body h-50">

               <h5 class="card-title">${objectToPrint.name}</h5>

               <p class="card-text">${ objectToPrint.description !== null ? objectToPrint.description : '...'}</p>

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