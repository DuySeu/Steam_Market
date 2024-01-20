const urlParams = new URLSearchParams(window.location.search);
const caseID = urlParams.get('id');

console.log(caseID);

fetch('../../db.json')
  .then((response) => response.json())
  .then(showCaseDetail)
  .catch((error) => console.error('Error fetching JSON:', error));

function showCaseDetail(data) {
  console.log(data.cases.find((item) => item.id === caseID));
  const itemElement = ` <li class="case_display"> 
                            <a href="src/pages/case_detail.html?id=${caseID}" class="polaroid">
                              <img src="${item.image}" alt="${item.name}" style="width:100%">
                              <hr style="width: 80%;position:relative;">
                              <div class="container">
                                <p>Quantity: ${item.quantity}</p>
                                <p>Buy Price: ${item.buy_price}</p>
                                <p>Sale Price: ${item.sale_price}</p>
                                <p>Container Series: ${item.container_series}</p>
                              </div>
                            </a>
                          </li>
                        `;
  document.querySelector('#data-container').insertAdjacentHTML('beforeend', itemElement);
}
