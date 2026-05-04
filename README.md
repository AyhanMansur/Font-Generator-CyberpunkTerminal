# 🟢 Hacker Style Font Generator | Cyberpunk Terminal

<div align="center">

[![Status](https://img.shields.io/badge/Status-Active-brightgreen)](https://github.com/AyhanMansur/dowinb)
[![Platform](https://img.shields.io/badge/Platform-chrome%20%7C%20firefox%20%7C%20safari-blue)](https://github.com/AyhanMansur/dowinb)

> **Transform boring text into cool `𝕄𝕒𝕥𝕙𝕖𝕞𝕒𝕥𝕚𝕔𝕒𝕝 𝔻𝕠𝕦𝕓𝕝𝕖-𝕊𝕥𝕣𝕦𝕔𝕜` Unicode characters.**
> 🚀 **Zero Dependencies** | 🎨 **Cyberpunk UI** | 📱 **Mobile Optimized**

[✨ **Try Live Demo**](https://ayhanmansur.github.io/Font-Generator-CyberpunkTerminal/) | 📖 **Features** | 🛠️ **Installation** | 📜 **License**

</div>

---

## 📸 Visual Preview

<div align="center">

![Terminal Interface](https://raw.githubusercontent.com/AyhanMansur/Font-Generator-CyberpunkTerminal/refs/heads/main/termux-font-generator/assets/Screenshot%202026-04-30%20053620.png)
*The Cyberpunk Terminal Interface in Action*

</div>

---

## 🧠 What is this?

This is a **client-side web application** that converts standard ASCII text into **Unicode Mathematical Symbols**. Unlike other tools, this project features a **full Cyberpunk/Hacker aesthetic** with:

1.  **Matrix Rain Background:** A real-time HTML5 Canvas animation.
2.  **CRT Screen Effects:** Scanlines, curvature, and flicker.
3.  **Typing Animation:** The output "types" itself character by character.
4.  **Universal Compatibility:** Works on iOS Safari, Android Chrome, and Desktop Browsers.

Perfect for:
-   🐧 **Termux / Linux Users** who want cool profile names.
-   🎮 **Gamers** looking for unique Discord or Steam names.
-   📱 **Social Media** users wanting to stand out on Instagram/TikTok.
-   🎨 **Designers** needing quick Unicode references.

---

## ✨ Key Features

### 🎨 Aesthetic Overload
-   **Neon Green Theme:** Classic Hacker green (`#00ff00`) with glow effects.
-   **Glitch Animations:** Titles and buttons have a cyberpunk glitch effect.
-   **CRT Overlay:** Simulates an old-school monitor with scanlines and flicker.

### ⚡ Performance & UX
-   **Instant Conversion:** No API calls, no server latency. Everything happens in the browser.
-   **Typing Effect:** The output text appears letter-by-letter for a cool "hacking" feel.
-   **Smart Copy:** Uses the modern Clipboard API with a robust fallback for older browsers.
-   **Responsive Design:** Uses `vmin` units to ensure perfect scaling on phones, tablets, and 4K TVs.

### 🌍 Cross-Platform
-   ✅ **iOS Safari:** Fixed clipboard issues specific to iOS.
-   ✅ **Android Chrome:** Optimized for touch screens.
-   ✅ **Desktop:** Keyboard shortcuts and hover effects.

---

## 🚀 Quick Start

No installation required! This is a static site.

### Option 1: Run Locally (Desktop)
1.  Clone the repo:
    ```bash
    https://github.com/AyhanMansur/Font-Generator-CyberpunkTerminal.git
    ```
2.  Open `index.html` in your browser.
3.  Start hacking! 🖥️

---

## 🛠️ Tech Stack

This project is built with **pure vanilla technologies** to ensure maximum performance and minimal file size.

| Technology | Usage |
| :--- | :--- |
| **HTML5** | Semantic structure, Canvas API for Matrix rain. |
| **CSS3** | Flexbox, Grid, Keyframe animations, Custom Properties. |
| **JavaScript (ES6)** | DOM manipulation, Unicode mapping, Clipboard API. |
| **Unicode Standard** | Mathematical Alphanumeric Symbols block. |

---

## 🧪 How It Works (Under the Hood)

### 1. The Unicode Mapping
The core logic maps standard characters to their **Mathematical Double-Struck** Unicode counterparts.

| Input | Output | Unicode Code Point |
| :---: | :---: | :--- |
| `A` | `𝔸` | `U+1D538` |
| `b` | `𝕓` | `U+1D553` |
| `1` | `𝟙` | `U+1D7D9` |
| `@` | `@` | `U+0040` (No change) |

### 2. The Matrix Rain
A lightweight HTML5 Canvas script runs in the background. It draws falling characters (`0` and `1`) with a fade effect to create the trail.

### 3. The Typing Effect
JavaScript uses `setInterval` to append characters to the output div one by one, simulating a real-time terminal output.

---

## 📂 Project Structure

```text
termux-font-generator/
├── index.html          # Main HTML structure
├── style.css           # Cyberpunk styles, CRT effects, animations
├── script.js           # Logic: Mapping, Matrix Rain, Copy, Typing
├── README.md           # This file
└── assets/
    ├── preview.gif     # GIF showing the tool in action
    └── matrix-bg.gif   # GIF of the background animation
@ 𝓐𝔂𝓱𝓪𝓷 𝓜𝓪𝓷𝓼𝓾𝓻 🌿
