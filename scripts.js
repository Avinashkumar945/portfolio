function typeText(element, textContent, delay = 0) {
    let textLength = textContent.length;
    let i = 0;
    let interval = setInterval(function() {
        element.innerHTML += textContent.charAt(i);
        i++;
        if (i > textLength - 1) {
            clearInterval(interval);
        }
    }, 150);
}

// Clear the text content of the typingEffect element before typing new text
typingEffect.innerHTML = ''; // This ensures no previous text remains

// Start typing the greeting and intro text
typeText(typingEffect, text);
setTimeout(() => {
    typeText(introText, intro);
}, text.length * 150 + 500); // Delay after first text is typed (calculated by text length)
