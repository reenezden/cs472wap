// ascii.js

let timer = null;
let frameIndex = 0;
let frames = [];
let speed = 250;

document.addEventListener("DOMContentLoaded", () => {
    const startButton = document.getElementById("start");
    const stopButton = document.getElementById("stop");
    const animationSelect = document.getElementById("animation-select");
    const fontSizeSelect = document.getElementById("font-size");
    const turboCheckbox = document.getElementById("turbo");
    const animationArea = document.getElementById("animation-area");

    startButton.addEventListener("click", startAnimation);
    stopButton.addEventListener("click", stopAnimation);
    animationSelect.addEventListener("change", updateAnimation);
    fontSizeSelect.addEventListener("change", updateFontSize);
    turboCheckbox.addEventListener("change", updateSpeed);

    function startAnimation() {
        startButton.disabled = true;
        stopButton.disabled = false;
        animationSelect.disabled = true;

        frames = animationArea.value.split("=====");
        frameIndex = 0;
        timer = setInterval(showNextFrame, speed);
    }

    function stopAnimation() {
        startButton.disabled = false;
        stopButton.disabled = true;
        animationSelect.disabled = false;

        clearInterval(timer);
        timer = null;
        animationArea.value = frames.join("=====");
    }

    function showNextFrame() {
        animationArea.value = frames[frameIndex];
        frameIndex = (frameIndex + 1) % frames.length;
    }

    function updateAnimation() {
        const selectedAnimation = animationSelect.value;
        animationArea.value = selectedAnimation === "Custom" ? "" : ANIMATIONS[selectedAnimation];
    }

    function updateFontSize() {
        animationArea.style.fontSize = fontSizeSelect.value;
    }

    function updateSpeed() {
        speed = turboCheckbox.checked ? 50 : 250;
        if (timer !== null) {
            clearInterval(timer);
            timer = setInterval(showNextFrame, speed);
        }
    }
});

// Function to sum all numbers in an array
function sum(numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}

// Function to multiply all numbers in an array
function multiply(numbers) {
    return numbers.reduce((acc, curr) => acc * curr, 1);
}

// Function to reverse a string
function reverse(str) {
    return str.split('').reduce((reversed, char) => char + reversed, '');
}

// Function to filter words longer than a given length
function filterLongWords(words, i) {
    return words.filter(word => word.length > i);
}

// Example usage and logging the output to console
document.addEventListener("DOMContentLoaded", () => {
    console.log("Sum of [1, 2, 3, 4]:", sum([1, 2, 3, 4])); // Output: 10
    console.log("Multiply [1, 2, 3, 4]:", multiply([1, 2, 3, 4])); // Output: 24
    console.log("Reverse of 'hello':", reverse("hello")); // Output: "olleh"
    console.log("Words longer than 5:", filterLongWords(["apple", "banana", "cherry", "date"], 5)); // Output: ["banana", "cherry"]
});
