// const case_url = './db.json';

fetch('./db.json')
  .then((response) => response.json())
  .then(showCase)
  .catch((error) => console.error('Error fetching JSON:', error));

function showCase(data) {
  console.log(data);
  data.cases.forEach((item) => {
    const caseId = item.id;
    const itemElement = ` <li class="case-display"> 
                            <a href="src/pages/case-detail.html?id=${caseId}" class="container">
                              <img src="${item.image}" alt="${item.name}" style="width:100%">
                              <p>${item.name}</p>
                              <hr style="width: 80%; margin: auto;">
                              <div>
                                <p>Quantity: ${item.quantity}</p>
                                <p>Price: ${item.buy_price}</p>
                              </div>
                            </a>
                          </li>
                        `;
    document.querySelector('#case-data').insertAdjacentHTML('beforeend', itemElement);
  });
}
