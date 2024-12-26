document.addEventListener('DOMContentLoaded', () => {
    const subjectHeaders = document.querySelectorAll('.subject-header');
    const unitHeaders = document.querySelectorAll('.unit-header');

    function toggleContent(content) {
        content.classList.toggle('visible'); // Add or remove class for animations
    }

    // Toggle visibility for content on header click
    [...subjectHeaders, ...unitHeaders].forEach(header => {
        header.addEventListener('click', () => {
            const content = header.nextElementSibling;
            toggleContent(content);
        });
    });

    // Highlight past exam dates
    subjectHeaders.forEach(header => {
        const dateText = header.textContent.match(/\d{2}-\d{2}-\d{4}/);
        if (dateText) {
            const examDate = new Date(dateText[0].split('-').reverse().join('-'));
            const today = new Date();

            if (examDate < today) {
                header.classList.add('past-exam'); // Add a class for styling past exams
                header.style.cursor = 'not-allowed';
            }
        }
    });
});