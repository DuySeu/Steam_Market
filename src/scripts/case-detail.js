const urlParams = new URLSearchParams(window.location.search);
const caseId = urlParams.get('id');

fetch('../../db.json')
  .then((response) => response.json())
  .then(showCaseDetail)
  .catch((error) => console.error('Error fetching JSON:', error));

function showCaseDetail(data) {
  const items = data.cases.find((item) => item.id === caseId);
  
  const caseDetail = `<div>
                        <p>${items.name}</p>
                      </div>
                      `;
  document.querySelector('#main').insertAdjacentHTML('beforeend', caseDetail);
}
