fetch('../../db.json')
  .then((response) => response.json())
  .then(marketHistory)
  .catch((error) => console.error('Error fetching JSON:', error));

function marketHistory(data) {
  console.log(data);
  data.cases.forEach((item) => {
    const itemElement = `      
    <td>
      <img width="15%" src="/${item.image}" alt="${item.name}" />
      <p>${item.name}</p>
    </td>
    <td>23 Jan</td>
    <td>DuySeu</td>
    <td>${item.buy_price}</td>
                        `;
    document.querySelector('#my-history').insertAdjacentHTML('afterend', itemElement);
  });
}