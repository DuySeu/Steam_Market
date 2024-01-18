// JavaScript to toggle active class for question and answer
const faqQuestions = document.querySelectorAll('.faq-question');
const searchInput = document.getElementById('searchInput');

faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
        question.classList.toggle('active');
        const answer = question.nextElementSibling;
        answer.classList.toggle('active');
    });
});

// JavaScript for search functionality
searchInput.addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase();

    faqQuestions.forEach(question => {
        const questionText = question.textContent.toLowerCase();
        const faqItem = question.closest('.faq-item');

        if (questionText.includes(searchTerm)) {
        faqItem.style.display = 'block';
        } else {
        faqItem.style.display = 'none';
        }
    });
});