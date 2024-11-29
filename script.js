document.addEventListener('DOMContentLoaded', () => {
    const syllabusContent = document.getElementById('syllabus-content');

    const subjects = [
        { name: 'Subject 1', units: generateUnits(5) },
        { name: 'Subject 2', units: generateUnits(5) },
        { name: 'Subject 3', units: generateUnits(5) },
        { name: 'Subject 4', units: generateUnits(5) },
        { name: 'Subject 5', units: generateUnits(5) },
        { name: 'Subject 6', units: generateUnits(5) },
        { name: 'Subject 7', units: generateUnits(5) },
    ];

    subjects.forEach(subject => {
        const subjectDiv = document.createElement('div');
        subjectDiv.className = 'subject';

        const subjectHeader = document.createElement('div');
        subjectHeader.className = 'subject-header';
        subjectHeader.textContent = subject.name;
        subjectHeader.addEventListener('click', () => toggleContent(subjectContent));

        const subjectContent = document.createElement('div');
        subjectContent.className = 'subject-content';

        subject.units.forEach(unit => {
            const unitDiv = document.createElement('div');
            unitDiv.className = 'unit';

            const unitHeader = document.createElement('div');
            unitHeader.className = 'unit-header';
            unitHeader.textContent = `Unit ${unit.number}`;
            unitHeader.addEventListener('click', () => toggleContent(unitContent));

            const unitContent = document.createElement('div');
            unitContent.className = 'unit-content';

            unit.topics.forEach(topic => {
                const topicDiv = document.createElement('div');
                topicDiv.className = 'topic';
                topicDiv.textContent = topic;
                unitContent.appendChild(topicDiv);
            });

            unitDiv.appendChild(unitHeader);
            unitDiv.appendChild(unitContent);
            subjectContent.appendChild(unitDiv);
        });

        subjectDiv.appendChild(subjectHeader);
        subjectDiv.appendChild(subjectContent);
        syllabusContent.appendChild(subjectDiv);
    });

    function toggleContent(content) {
        content.style.display = content.style.display === 'none' ? 'block' : 'none';
    }

    function generateUnits(count) {
        const units = [];
        for (let i = 1; i <= count; i++) {
            units.push({
                number: i,
                topics: generateTopics(15, 20)
            });
        }
        return units;
    }

    function generateTopics(min, max) {
        const topics = [];
        const topicCount = Math.floor(Math.random() * (max - min + 1)) + min;
        for (let i = 1; i <= topicCount; i++) {
            topics.push(`Topic ${i}`);
        }
        return topics;
    }
});
