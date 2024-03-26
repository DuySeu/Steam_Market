/* Set the width of the side navigation to 250px */
function openNav() {
  document.getElementById('side-nav').style.width = '250px';
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById('side-nav').style.width = '0';
}

function displayText1() {
  var text1 = document.getElementById('my-active-listing');
  text1.style.display = 'grid';
  var text2 = document.getElementById('market-history');
  text2.style.display = 'none';
  var text3 = document.getElementById('sell-an-items');
  text3.style.display = 'none';
}
function displayText2() {
  var text1 = document.getElementById('my-active-listing');
  text1.style.display = 'none';
  var text2 = document.getElementById('market-history');
  text2.style.display = 'grid';
  var text3 = document.getElementById('sell-an-items');
  text3.style.display = 'none';
}
// function displayText3() {
//   var text1 = document.getElementById('my-active-listing');
//   text1.style.display = 'none';
//   var text2 = document.getElementById('market-history');
//   text2.style.display = 'none';
//   var text3 = document.getElementById('sell-an-items');
//   text3.style.display = 'block';
// }