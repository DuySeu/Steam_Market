// const case_url = './db.json';

fetch('./db.json')
  .then((response) => response.json())
  .then((data) => showCase(data))
  .catch((error) => console.error('Error fetching JSON:', error));

function showCase(data) {
  console.log(data);
  data.cases.forEach((item) => {
    const caseID = item.id;
    const itemElement = ` <li class="case_display" id="${caseID}"> 
                            <a href="src/pages/case_detail.html" class="polaroid">
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
  });
}

function caseDetail(data) {
  console.log(data);

  data.cases.forEach((item) => {
    const container = document.getElementById('data-container');
    container.innerHTML = `
                          <div class="polaroid">
                          <img src="${item.image}" alt="${item.name}" style="width:100%">
                          <hr style="width: 80%;position:relative;">
                            <div class="container">
                              <p>Quantity: ${item.quantity}</p>
                              <p>Buy Price: ${item.buy_price}</p>
                              <p>Sale Price: ${item.sale_price}</p>
                              <p>Container Series: ${item.container_series}</p>
                            </div>
                          </div>
                          `;
  });
}
