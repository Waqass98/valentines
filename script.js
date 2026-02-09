const noBtn = document.getElementById("noBtn");
const tease = document.getElementById("tease");

const messages = [
    "Nice try 😏",
    "Don’t test my patience 😌",
    "You really thought that would work? 😂",
    "No escape for you 😈",
    "Just say YES already 💖"
];

let hasEscaped = false;

function moveNoBtnRandomly() {
    const padding = 20;

    const maxX = window.innerWidth - noBtn.offsetWidth - padding;
    const maxY = window.innerHeight - noBtn.offsetHeight - padding;

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
}

function launchConfetti() {
    const confettiContainer = document.createElement("div");
    confettiContainer.className = "confetti";
    document.body.appendChild(confettiContainer);

    const flowers = ["🌸", "🌹", "🌷", "🌼", "💐"];
    const pieces = 320;

    for (let i = 0; i < pieces; i++) {
        const piece = document.createElement("div");
        piece.className = "confetti-piece";
        piece.textContent = flowers[i % flowers.length];

        piece.style.left = Math.random() * 100 + "vw";
        piece.style.animationDelay = (Math.random() * 0.7) + "s";
        piece.style.opacity = 0.5 + Math.random() * 0.5;

        confettiContainer.appendChild(piece);
    }

    setTimeout(() => {
        confettiContainer.remove();
    }, 3200);
}

function handleNoInteraction(event) {
    if (event) {
        event.preventDefault();
    }
    if (!hasEscaped) {
        hasEscaped = true;
        noBtn.classList.add("escaped");
    }

    moveNoBtnRandomly();

    const randomMsg = messages[Math.floor(Math.random() * messages.length)];
    tease.innerText = randomMsg;
}

// Desktop hover
noBtn.addEventListener("mouseover", handleNoInteraction);
// Mobile taps
noBtn.addEventListener("touchstart", handleNoInteraction);
noBtn.addEventListener("click", handleNoInteraction);

// Popup functions
function openPopup() {
    document.getElementById("popup").style.display = "flex";
    launchConfetti();
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}

