const urlParams = new URLSearchParams(window.location.search);
const caseId = urlParams.get('id');

fetch('../../db.json')
  .then((response) => response.json())
  .then(showCaseDetail)
  .catch((error) => console.error('Error fetching JSON:', error));

function showCaseDetail(data) {
  const items = data.cases.find((item) => item.id === caseId);
  
  const caseDetail = `<div>
  <div class="nd-header">
  <h1 style="color: white ;">Community Market</h1>
  <p>Buy and sell items with community members for Steam Wallet funds.</p>
</div>
<div class="case-container">
  <div class="nd-container">
  <div class="case-img">
  <img src="${items.image}" alt="${items.name}" >
  </div>
<div class="case-inf">
<h2>${items.name}</h2>
<p class="container-series">Container Series ${items.container_series}</p>
<p>Contain one of the following:</p>
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
                  <td>$0.73</td>
                  <td>1</td>
              </tr>
              <tr>
                  <td>$0.74</td>
                  <td>15</td>
              </tr>
              <tr>
                  <td>$0.76</td>
                  <td>18</td>
              </tr>
              <tr>
                  <td>$0.78</td>
                  <td>50</td>
              </tr>
              <tr>
                  <td>$0.79</td>
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
                  <td>$0.73</td>
                  <td>1</td>
              </tr>
              <tr>
                  <td>$0.74</td>
                  <td>15</td>
              </tr>
              <tr>
                  <td>$0.76</td>
                  <td>18</td>
              </tr>
              <tr>
                  <td>$0.78</td>
                  <td>50</td>
              </tr>
              <tr>
                  <td>$0.79</td>
                  <td>155</td>
              </tr>
          </table>
      </div>



  </div>
  <div class="clear"></div>
  
  <img src="/src/assets/images/graph/grp1.png" alt="" class="graph">
  <img src="/src/assets/images/graph/grp2.png" alt="" class="graph">

</div>
<style type="text/css">
.clear{
  clear: both;
}
*{
  margin: 0;
  color: rgba(255,255,255,0.7);
}

hr{
  border: 0.5px solid black;
}
.nd-header{
  background-image: url(/src/assets/images/market_banner.jpg);
  padding: 20px 25%;
  color: rgba(255, 255, 255, 0.7);
}
.case-container{
  padding: 15px;
  margin: 15px 25%;
  background-color: rgba(0, 0 , 0, 0.4);
  position: relative;
  padding-bottom: 90px;
}
.nd-container{
  position: relative;
  height: 422px;
  padding: 11px;
  width: 100%;
}
.case-img{
  position: absolute;
  left: 0;
  width: 50%;
}
.case-inf{
  position: absolute;
  right: 0;
  width: 50%;
}
.case-inf h2{
  color: white;
  margin-bottom: 9px;
}
.container-series{
  color: cyan;
  margin-bottom: 3px;
}
.sell-buy-container{
  position: relative;
  height: 338px;
  padding: 15px 0;
}
.buy , .sell{
position: absolute;
border: 1px solid black; 
width: 40%;
padding: 15px 0;
text-align: center;
}
.buy{
  left: 5%;
}
.sell{
  right: 5%;
}

table{
  margin: 12px auto;
  text-align: center;
}
td, th{
  width: 100px;
}
tr:nth-child(even){
  background-color: rgba(0, 0, 0, 0.3);
}
button{
background-image: url(/src/assets/images/market_banner.jpg);
width: 166px;
height: 54px;
text-align: center;
margin: 3px 0;
color: rgba(255, 255, 255, 0.5);
font-size: 26px;
padding: 0 15px;
margin-top: 16px;

}
button:hover{
color: white;
}
.graph{
  width:100%;
}

</style>       
                      </div>
                      `;
  document.querySelector('#main').insertAdjacentHTML('beforeend', caseDetail);
}