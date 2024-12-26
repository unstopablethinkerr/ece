document.addEventListener('DOMContentLoaded', () => {
    // Select all headers
    const subjectHeaders = document.querySelectorAll('.subject-header');
    const unitHeaders = document.querySelectorAll('.unit-header');

    // Function to toggle content visibility
    function toggleContent(content) {
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
            content.style.padding = null;
        } else {
            content.style.maxHeight = content.scrollHeight + 'px';
            content.style.padding = '10px';
        }
    }

    // Toggle subject content
    subjectHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const content = header.nextElementSibling;
            toggleContent(content);
        });
    });

    // Toggle unit content
    unitHeaders.forEach(header => {
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
                header.classList.add('past-exam');
                header.style.cursor = 'not-allowed';
            }
        }
    });
});