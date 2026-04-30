// --- 1. Matrix Rain Animation ---
const canvas = document.getElementById('matrix-canvas');
const ctx = canvas.getContext('2d');

// Set canvas size
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()*&^%';
const fontSize = 16;
const columns = canvas.width / fontSize;
const drops = [];

// Initialize drops
for (let i = 0; i < columns; i++) {
    drops[i] = 1;
}

function drawMatrix() {
    // Semi-transparent black to create trail effect
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#0f0'; // Green text
    ctx.font = fontSize + 'px monospace';

    for (let i = 0; i < drops.length; i++) {
        const text = characters.charAt(Math.floor(Math.random() * characters.length));
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }
        drops[i]++;
    }
}
setInterval(drawMatrix, 33);

// --- 2. Font Transformation & Typing Effect ---
const charMap = {
    'a': '𝕒', 'b': '𝕓', 'c': '𝕔', 'd': '𝕕', 'e': '𝕖', 'f': '𝕗', 'g': '𝕘', 'h': '𝕙', 'i': '𝕚', 'j': '𝕛', 'k': '𝕜', 'l': '𝕝', 'm': '𝕞', 'n': '𝕟', 'o': '𝕠', 'p': '𝕡', 'q': '𝕢', 'r': '𝕣', 's': '𝕤', 't': '𝕥', 'u': '𝕦', 'v': '𝕧', 'w': '𝕨', 'x': '𝕩', 'y': '𝕪', 'z': '𝕫',
    'A': '𝔸', 'B': '𝔹', 'C': 'ℂ', 'D': '𝔻', 'E': '𝔼', 'F': '𝔽', 'G': '𝔾', 'H': 'ℍ', 'I': '𝕀', 'J': '𝕁', 'K': '𝕂', 'L': '𝕃', 'M': '𝕄', 'N': 'ℕ', 'O': '𝕆', 'P': 'ℙ', 'Q': 'ℚ', 'R': 'ℝ', 'S': '𝕊', 'T': '𝕋', 'U': '𝕌', 'V': '𝕍', 'W': '𝕎', 'X': '𝕏', 'Y': '𝕐', 'Z': 'ℤ',
    '0': '𝟘', '1': '𝟙', '2': '𝟚', '3': '𝟛', '4': '𝟜', '5': '𝟝', '6': '𝟞', '7': '𝟟', '8': '𝟠', '9': '𝟡',
    ' ': ' ', '!': '!', '@': '@', '#': '#', '$': '$', '%': '%', '^': '^', '&': '&', '*': '*', '(': '(', ')': ')', '-': '-', '_': '_', '+': '+', '=': '=', '/': '/', '\\': '\\', '.': '.', ',': ',', ';': ';', ':': ':', '?': '?', "'": "'", '"': '"', '€': '€', '£': '£', '¥': '¥'
};

const inputEl = document.getElementById('userInput');
const outputEl = document.getElementById('outputText');
const copyBtn = document.getElementById('copyBtn');
const toast = document.getElementById('toast');

let currentTransformedText = '';
let typingInterval;

function transformText() {
    const rawText = inputEl.value;
    let result = '';
    
    for (let i = 0; i < rawText.length; i++) {
        const char = rawText[i];
        result += charMap[char] || char;
    }
    
    currentTransformedText = result;
    typeOutText(result);
}

function typeOutText(text) {
    // Clear previous typing
    clearInterval(typingInterval);
    outputEl.textContent = '';
    
    let i = 0;
    const speed = 20; // Typing speed in ms

    typingInterval = setInterval(() => {
        if (i < text.length) {
            outputEl.textContent += text.charAt(i);
            i++;
        } else {
            clearInterval(typingInterval);
        }
    }, speed);
}

// --- 3. Copy Functionality ---
async function copyText() {
    if (!currentTransformedText) {
        showToast("SYSTEM ERROR: NO DATA TO COPY");
        return;
    }

    try {
        if (navigator.clipboard && window.isSecureContext) {
            await navigator.clipboard.writeText(currentTransformedText);
            showToast("SUCCESS: DATA COPIED");
        } else {
            fallbackCopy(currentTransformedText);
        }
    } catch (err) {
        fallbackCopy(currentTransformedText);
    }
}

function fallbackCopy(text) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.left = '-9999px';
    document.body.appendChild(textarea);
    textarea.select();
    try {
        document.execCommand('copy');
        showToast("SUCCESS: DATA COPIED");
    } catch (err) {
        showToast("ERROR: COPY FAILED");
    }
    document.body.removeChild(textarea);
}

function showToast(message) {
    toast.textContent = message;
    toast.className = "show";
    setTimeout(() => { toast.className = toast.className.replace("show", ""); }, 3000);
}

// Events
inputEl.addEventListener('input', transformText);
copyBtn.addEventListener('click', copyText);

// Enter key support
inputEl.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        copyText();
    }
});