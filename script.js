document.addEventListener('DOMContentLoaded', () => {
    // Toggle Content
    const subjectHeaders = document.querySelectorAll('.subject-header');
    const unitHeaders = document.querySelectorAll('.unit-header');

    [...subjectHeaders, ...unitHeaders].forEach(header => {
        header.addEventListener('click', () => {
            const content = header.nextElementSibling;
            toggleContent(content);
        });
    });

    // Date Styling
    const headers = document.querySelectorAll('.subject-header');
    headers.forEach(header => {
        const dateText = header.textContent.match(/\d{2}-\d{2}-\d{4}/);
        if (dateText) {
            const examDate = new Date(dateText[0].split('-').reverse().join('-'));
            const today = new Date();

            if (examDate < today) {
                header.style.background = 'linear-gradient(to right, #ff0000, #ff5555)';
                header.style.color = '#ffffff';
                header.style.cursor = 'not-allowed';
                header.setAttribute('title', 'This exam date has passed');
            } else if (examDate.toDateString() === today.toDateString()) {
                header.style.background = 'linear-gradient(to right, #00ff00, #55ff55)';
                header.style.color = '#ffffff';
            }
        }
    });
});