document.getElementById('start').addEventListener('click', () => {
    const width = parseInt(document.getElementById('width').value);
    const growthAmount = parseInt(document.getElementById('growth-amount').value);
    const growRate = parseInt(document.getElementById('grow-rate').value);
    const numberOfCircles = parseInt(document.getElementById('number-circles').value);
    const color = document.getElementById('color').value;

    const circleContainer = document.getElementById('circle-container');
    circleContainer.innerHTML = ''; // Clear previous circles

    for (let i = 0; i < numberOfCircles; i++) {
        const circle = document.createElement('div');
        circle.classList.add('circle');
        circle.style.width = `${width}px`;
        circle.style.height = `${width}px`;
        circle.style.backgroundColor = color;

        // Position circle randomly within the container
        circle.style.top = `${Math.random() * (circleContainer.clientHeight - width)}px`;
        circle.style.left = `${Math.random() * (circleContainer.clientWidth - width)}px`;

        circleContainer.appendChild(circle);

        let intervalId = setInterval(() => {
            const newSize = parseInt(circle.style.width) + growthAmount;
            circle.style.width = `${newSize}px`;
            circle.style.height = `${newSize}px`;
        }, growRate);

        circle.addEventListener('click', () => {
            clearInterval(intervalId);
            circle.remove();
        });
    }
});

document.getElementById('color').addEventListener('input', (event) => {
    const color = event.target.value;
    const circles = document.querySelectorAll('.circle');
    circles.forEach(circle => {
        circle.style.backgroundColor = color;
    });
});