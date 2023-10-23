const form = document.querySelector('form');
const commandInput = document.querySelector('#command');
const commandPrompt = document.querySelector('.prompt');
const commandOutput = document.querySelector('.output');
const commandHistory = [];
let commandIndex = 0;

window.onload = () => {
    commandInput.focus();
};

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const command = commandInput.value.trim();
    commandInput.value = '';
    commandOutput.innerHTML += `<div class="prompt">&gt; ${command}</div>`;
    if (command === '') {
        return;
    }
    commandHistory.push(command);
    commandIndex = commandHistory.length;
    try {
        const result = command.startsWith('echo') ? command.substring(5) : eval(command);
        if (result === undefined || result === null || result === '') {
            return;
        }
        commandOutput.innerHTML += `<div class="output">${result}</div>`;
    } catch (error) {
        commandOutput.innerHTML += `<div class="error">${error.message}</div>`;
    }
    commandPrompt.scrollIntoView();
});

commandInput.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowUp') {
        event.preventDefault();
        if (commandIndex > 0) {
            commandIndex--;
            commandInput.value = commandHistory[commandIndex];
        }
    } else if (event.key === 'ArrowDown') {
        event.preventDefault();
        if (commandIndex < commandHistory.length - 1) {
            commandIndex++;
            commandInput.value = commandHistory[commandIndex];
        } else {
            commandIndex = commandHistory.length;
            commandInput.value = '';
        }
    }
});

document.querySelectorAll('button.suggestion').forEach((suggestion) => {
    suggestion.onclick = () => {
        commandInput.value = suggestion.value;
        submit.click();
    };
});

for (let i = 0; i < 50; i++) {
    const twinkle = document.createElement('div');
    twinkle.classList.add('twinkle');
    twinkle.style.animationDelay = `${Math.random() * 7}s`;
    if (Math.random() < 0.3) {
        twinkle.style.clipPath = "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)";
    } else {
        twinkle.style.width = '8px';
        twinkle.style.height = '8px';
    }
    twinkle.style.top = `${Math.random() * 100}%`;
    twinkle.style.left = `${Math.random() * 100}%`;
    document.body.appendChild(twinkle);
};

for (let i = 0; i < 10; i++) {
    const star = document.createElement('div');
    star.classList.add('star');
    star.style.top = `${Math.random() * 100}%`;
    star.style.left = `${Math.random() * 100}%`;
    star.style.animationDelay = `${Math.random() * 5}s`;
    document.body.appendChild(star);
};