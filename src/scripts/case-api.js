function displayText1() {
  var text1 = document.getElementById('myActiveListing');
  text1.style.display = 'block';
  var text2 = document.getElementById('myMarketHistory');
  text2.style.display = 'none';
}
function displayText2() {
  var Text2 = document.getElementById('myMarketHistory');
  Text2.style.display = 'block';
  var Text1 = document.getElementById('myActiveListing');
  Text1.style.display = 'none';
}
function displayText3() {
  var Text2 = document.getElementById('myMarketHistory');
  Text2.style.display = 'block';
  var Text1 = document.getElementById('myActiveListing');
  Text1.style.display = 'none';
}



// const case_url = './db.json';

fetch('./db.json')
  .then((response) => response.json())
  .then(showCase)
  .catch((error) => console.error('Error fetching JSON:', error));

function showCase(data) {
  console.log(data);
  data.cases.forEach((item) => {
    const caseId = item.id;
    const itemElement = ` <li class="case_display"> 
                            <a href="src/pages/case-detail.html?id=${caseId}" class="container">
                              <img src="${item.image}" alt="${item.name}" style="width:100%">
                              <hr style="width: 80%; margin: auto;">
                              <div>
                                <p>Quantity: ${item.quantity}</p>
                                <p>Buy Price: ${item.buy_price}</p>
                                <p>Sale Price: ${item.sale_price}</p>
                                <p>Container Series: ${item.container_series}</p>
                              </div>
                            </a>
                          </li>
                        `;
    document.querySelector('#caseData').insertAdjacentHTML('beforeend', itemElement);
  });
}
