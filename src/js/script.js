// Copyright 2024 ariefsetyonugroho
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
//     https://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

const textElements = ["Mobile Developer.",
    "Web Developer.",
    "Artificial Intelligence.",
    "Internet of Things.",
    "Robotic."];

let textIndex = 0;
const textPlaceholder = document.getElementById('text-placeholder');

function typeWriter() {const text = textElements[textIndex];
    let charIndex = 0;
    const typingInterval = setInterval(() => {
        if (charIndex <= text.length) {
            textPlaceholder.textContent = text.substring(0, charIndex++);
        } else {
            clearInterval(typingInterval);
            setTimeout(eraseText, 1500); // Delay before erasing
        }
    }, 100); // Typing speed (milliseconds per character)
}

function eraseText() {
    const text = textElements[textIndex];
    let charIndex = text.length;
    const erasingInterval = setInterval(() => {
        if (charIndex >= 0) {
            textPlaceholder.textContent = text.substring(0, charIndex--);
        } else {
            clearInterval(erasingInterval);
            textIndex = (textIndex + 1) % textElements.length; // Move to next text
            setTimeout(typeWriter, 500); // Delay before typing new text
        }
    }, 50); // Erasing speed (milliseconds per character)
}
// Start typing animation
typeWriter();
