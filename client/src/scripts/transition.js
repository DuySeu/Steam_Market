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
function displayText3() {
  var text1 = document.getElementById('my-active-listing');
  text1.style.display = 'none';
  var text2 = document.getElementById('market-history');
  text2.style.display = 'none';
  var text3 = document.getElementById('sell-an-items');
  text3.style.display = 'block';
}

// JavaScript to toggle active class for question and answer
const faqQuestions = document.querySelectorAll('.faq-question');
const searchInput = document.getElementById('searchInput');

faqQuestions.forEach((question) => {
  question.addEventListener('click', () => {
    question.classList.toggle('active');
    const answer = question.nextElementSibling;
    answer.classList.toggle('active');
  });
});

// JavaScript for search functionality
searchInput.addEventListener('input', function () {
  const searchTerm = this.value.toLowerCase();

  faqQuestions.forEach((question) => {
    const questionText = question.textContent.toLowerCase();
    const faqItem = question.closest('.faq-item');

    if (questionText.includes(searchTerm)) {
      faqItem.style.display = 'block';
    } else {
      faqItem.style.display = 'none';
    }
  });
});

function searchFunction() {
  // Declare variables
  var input, filter, ul, li, a, i;
  input = document.getElementById('case-search');
  filter = input.value.toUpperCase();
  ul = document.getElementById('case-data');
  li = ul.getElementsByTagName('li');

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName('a')[0];
    if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = '';
    } else {
      li[i].style.display = 'none';
    }
  }
}
