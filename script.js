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
        content.style.display = content.style.display === 'block' ? 'none' : 'block';
    }
});
