document.getElementById('start').addEventListener('click', () => {
    const width = parseInt(document.getElementById('width').value);
    const growthAmount = parseInt(document.getElementById('growth-amount').value);
    const growRate = parseInt(document.getElementById('grow-rate').value);
    const numberOfShapes = parseInt(document.getElementById('number-circles').value);
    const color = document.getElementById('color').value;
    const shapeType = document.getElementById('shape').value;

    const circleContainer = document.getElementById('circle-container');
    circleContainer.innerHTML = ''; // Clear previous shapes

    for (let i = 0; i < numberOfShapes; i++) {
        const shape = document.createElement('div');
        shape.classList.add('shape', shapeType);
        shape.style.width = `${width}px`;
        shape.style.height = `${width}px`;
        shape.style.backgroundColor = color;

        // If the shape is a rectangle, adjust the height
        if (shapeType === 'rectangle') {
            shape.style.height = `${width / 2}px`;
        }

        // Position shape randomly within the container
        shape.style.top = `${Math.random() * (circleContainer.clientHeight - width)}px`;
        shape.style.left = `${Math.random() * (circleContainer.clientWidth - width)}px`;

        circleContainer.appendChild(shape);

        let intervalId = setInterval(() => {
            const newSize = parseInt(shape.style.width) + growthAmount;
            shape.style.width = `${newSize}px`;

            // Maintain the aspect ratio for rectangles
            if (shapeType === 'rectangle') {
                shape.style.height = `${newSize / 2}px`;
            } else {
                shape.style.height = `${newSize}px`;
            }
        }, growRate);

        shape.addEventListener('click', () => {
            clearInterval(intervalId);
            shape.remove();
        });
    }
});

document.getElementById('color').addEventListener('input', (event) => {
    const color = event.target.value;
    const shapes = document.querySelectorAll('.shape');
    shapes.forEach(shape => {
        shape.style.backgroundColor = color;
    });
});
