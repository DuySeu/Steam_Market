const urlParams = new URLSearchParams(window.location.search);
const caseId = urlParams.get('id');

fetch('../../db.json')
  .then((response) => response.json())
  .then(showCaseDetail)
  .catch((error) => console.error('Error fetching JSON:', error));

function showCaseDetail(data) {
  const items = data.cases.find((item) => item.id === caseId);

  const caseDetail = 
`<div class="case-detail-page">
<div class="case-container">
  <div class="nd-container">
  <div class="case-img">
  <img src="/${items.image}" alt="${items.name}" >
  </div>
<div class="case-inf">
<h2>${items.name}</h2>
<p class="container-series">Container Series ${items.container_series}</p>
<p>Contain one of the following:</p>
    <p style="color: blue;">Five-SeveN | Scrawl</p>
    <p style="color: blue;">MAC-10 | Ensnared</p>
    <p style="color: blue;">MAG-7 | Foresight</p>
    <p style="color: blue;">MP5-SD | Necro Jr.</p>
    <p style="color: blue;">P2000 | Lifted Spirits</p>
    <p style="color: blue;">SCAR-20 | Poultrygeist</p>
    <p style="color: blue;">Sawed-Off | Spirit Board</p>
    <p style="color:purple " >PP-Bizon | Space Cat</p>
    <p style="color:purple " >G3SG1 | Dream Glade</p>
    <p style="color:purple " >M4A1-S | Night Terror</p>
    <p style="color:purple " > XM1014 | Zombie Offensive</p>
    <p style="color:purple " >USP-S | Ticket to Hell</p>
    <p style="color:purple " >Dual Berettas | Melondrama</p>
    <p style="color: red; ">FAMAS | Rapid Eye Movement</p>
    <p style="color: red; ">MP7 | Abyssal Apparition</p>
    <p style="color: red; ">AK-47 | Nightwish</p>
    <p style="color: red; ">MP9 | Starlight Protector</p>
    <p style="color: yellow; ">or an Exceedingly Rare Special Item!</p>
</div>
</div>
<div class="clear"></div>
<div class="case-text">
  <p>This item is a commodity, where all the individual items are effectively identical. Individual listings aren't accessible; you can instead issue orders to buy at a specific price, with the cheapest listing getting automatically matched to the highest buy order.
  </p>
 <p>After purchase, this item:</p>
 <ul>
  <li>will not be tradable for one week</li>
  <li>can immediately be re-sold on the Steam Community Market</li>
 </ul>
</div>
  <div class="sell-buy-container">
      <div class="buy">
          <p>${items.quantity} for sale starting at ${items.buy_price}</p>
          <button>BUY...</button>
          <hr >
          <table>
              <tr>
                  <th>Price</th>
                  <th>Quantity</th>
              </tr>
              <tr>
                  <td>0.73 CC</td>
                  <td>1</td>
              </tr>
              <tr>
                  <td>0.74 CC</td>
                  <td>15</td>
              </tr>
              <tr>
                  <td>0.76 CC</td>
                  <td>18</td>
              </tr>
              <tr>
                  <td>0.78 CC</td>
                  <td>50</td>
              </tr>
              <tr>
                  <td>0.79 CC</td>
                  <td>155</td>
              </tr>
          </table>
      </div>
      <div class="sell">
          <p> requests to buy at ${items.sale_price} or lower </p>
          <button>SELL...</button>
          <hr>
          <table>
              <tr>
                  <th>Price</th>
                  <th>Quantity</th>
              </tr>
              <tr>
                  <td>0.73 CC</td>
                  <td>1</td>
              </tr>
              <tr>
                  <td>0.74 CC</td>
                  <td>15</td>
              </tr>
              <tr>
                  <td>0.76 CC</td>
                  <td>18</td>
              </tr>
              <tr>
                  <td>0.78 CC</td>
                  <td>50</td>
              </tr>
              <tr>
                  <td>0.79 CC</td>
                  <td>155</td>
              </tr>
          </table>
      </div>



  </div>
  <div class="clear"></div>
  <div>
  <img src="/src/assets/images/graph/grp1.png" alt="" class="graph">
  <img src="/src/assets/images/graph/grp2.png" alt="" class="graph">
  </div>
</div> </div>
                      </div>
                      `;
  document.querySelector('#case-detail').insertAdjacentHTML('beforeend', caseDetail);
}
