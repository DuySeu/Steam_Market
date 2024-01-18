document.addEventListener("DOMContentLoaded", function() {
    const FAKE_DATA = [
    
    {
      id: '65a696639adf3d5ee93ff226',
      name: 'Reba Ballard',
      image: 'images/case/case1.png',
      quantity: 698,
      buy_price: '$2.45',
      sale_price: '$6.07',
      container_series: '#472',
    },
    {
      id: '65a69663829216ce7f903895',
      name: 'Hall Camacho',
      image: 'images/case/case2.png',
      quantity: 684,
      buy_price: '$6.41',
      sale_price: '$5.94',
      container_series: '#540',
    },
    {
      id: '65a69663b4cfe34424df31c6',
      name: 'Eula Kinney',
      image: 'images/case/case3.png',
      quantity: 866,
      buy_price: '$5.16',
      sale_price: '$4.58',
      container_series: '#558',
    },
    {
      id: '65a6966375dabdfa9fba140e',
      name: 'Willis Gibbs',
      image: 'images/case/case4.png',
      quantity: 631,
      buy_price: '$6.11',
      sale_price: '$6.19',
      container_series: '#921',
    },
    {
      id: '65a6966316b70d25f3bef801',
      name: 'Mattie Austin',
      image: 'images/case/case5.png',
      quantity: 537,
      buy_price: '$3.07',
      sale_price: '$3.52',
      container_series: '#612',
    },
    {
      id: '65a696639d484e73ecac5bc7',
      name: 'Alana Walsh',
      image: 'images/case/case6.png',
      quantity: 793,
      buy_price: '$3.72',
      sale_price: '$5.57',
      container_series: '#956',
    },
  ];
          
          function displayData() {
              const container = document.getElementById('data-container');
              FAKE_DATA.forEach(item => {
                  const itemElement = document.createElement('div');
                  itemElement.innerHTML = `
                          <div class="polaroid">
                          <img src="${item.image}" alt="${item.name}" style="width:100%">
                          <hr style="width: 80%;position:relative;">
                            <div class="container">
                              <p>Quantity: ${item.quantity}</p>
                              <p>Buy Price: ${item.buy_price}</p>
                              <p>Sale Price: ${item.sale_price}</p>
                              <p>Container Series: ${item.container_series}</p>
                             </div>
                  `;
                  container.appendChild(itemElement);
              });
          }
  
          displayData();
    });