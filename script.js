document.addEventListener('DOMContentLoaded', () => {
    const subjectHeaders = document.querySelectorAll('.subject-header');
    const unitHeaders = document.querySelectorAll('.unit-header');

    subjectHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const content = header.nextElementSibling;
            toggleContent(content);
        });
    });

    unitHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const content = header.nextElementSibling;
            toggleContent(content);
        });
    });

    function toggleContent(content) {
        content.style.display = content.style.display === 'none' ? 'block' : 'none';
    }
});


document.addEventListener('DOMContentLoaded', () => {
            const headers = document.querySelectorAll('.subject-header');

            headers.forEach(header => {
                const dateText = header.textContent.match(/\d{2}-\d{2}-\d{4}/);
                if (dateText) {
                    const examDate = new Date(dateText[0].split('-').reverse().join('-'));
                    const today = new Date();

                    if (examDate < today) {
                        header.style.background = 'linear-gradient(to right, #ff0000, #ff5555)';
                        header.style.color = '#ffffff';
                    }
                }
            });
        });
