// 🎶 BACKGROUND MUSIC — CONTINUE ACROSS PAGES
const bgMusic = document.getElementById("bgMusic");

// Restore music on load
window.addEventListener("load", () => {
    if (!bgMusic) return;

    const lastTime = localStorage.getItem("musicTime");
    const started = localStorage.getItem("musicStarted");

    bgMusic.volume = 0.12; // 🔉 VERY LOW & SOFT

    if (lastTime) {
        bgMusic.currentTime = parseFloat(lastTime);
    }

    if (started === "yes") {
        bgMusic.play().catch(() => {});
    }
});

// Save current time constantly
if (bgMusic) {
    bgMusic.addEventListener("timeupdate", () => {
        localStorage.setItem("musicTime", bgMusic.currentTime);
    });
}

// Start music on first interaction only
document.addEventListener("click", () => {
    if (!bgMusic) return;

    if (localStorage.getItem("musicStarted") !== "yes") {
        bgMusic.volume = 0.12;
        bgMusic.play().then(() => {
            localStorage.setItem("musicStarted", "yes");
        }).catch(() => {});
    }
});


// ❤️ FLOATING HEARTS ON ALL PAGES
const heartsBg = document.getElementById("heartsBg");

function createHeart() {
    if (!heartsBg) return;

    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerText = "❤️";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 15 + 15 + "px";
    heart.style.animationDuration = Math.random() * 3 + 4 + "s";

    heartsBg.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 7000);
}

setInterval(createHeart, 400);

// 🏃 NO BUTTON RUNS AWAY
const noBtn = document.getElementById("noBtn");
if (noBtn) {
   noBtn.addEventListener("mouseenter", () => {
    const containerWidth = 300;   // move more horizontally
    const containerHeight = 200;  // move more vertically

    noBtn.style.left = Math.random() * containerWidth + "px";
    noBtn.style.top = Math.random() * containerHeight + "px";
});
}

// PAGE NAVIGATION
function openMessage() {
    window.location.href = "message.html";
}

function openMemories() {
    window.location.href = "memories.html";
}
// MEMORY POPUP
const popup = document.getElementById("memoryPopup");
const popupImg = document.getElementById("popupImg");
const popupText = document.getElementById("popupText");

function openPopup(img, text) {
    popupImg.src = img;
    popupText.innerText = text;
    popup.style.display = "flex";
}

function closePopup() {
    popup.style.display = "none";
}
function openCard() {
    const message = document.getElementById("loveMessage");
    const title = document.getElementById("cardTitle");
    const memBtn = document.getElementById("memBtn");

    title.style.display = "none";
    message.classList.remove("hidden");
    memBtn.classList.remove("hidden");
}
function exitSite() {
    // Try to close the tab
    window.open('', '_self');
    window.close();

    // Fallback (browser blocks close)
    setTimeout(() => {
        document.body.innerHTML = `
            <div style="
                display:flex;
                justify-content:center;
                align-items:center;
                height:100vh;
                background:#000;
                color:#fff;
                font-size:1.2rem;
                text-align:center;
                padding:20px;">
                Thank you for the memories ❤️<br>
            </div>
        `;
    }, 300);
}



