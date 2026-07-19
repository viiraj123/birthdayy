// ==============================
// Happy Birthday Janhavi
// script.js
// ==============================

// Open Surprise Button
const openGift = document.getElementById("openGift");

openGift.addEventListener("click", () => {

    // Button animation
    openGift.style.transform = "scale(0.95)";

    setTimeout(() => {
        openGift.style.transform = "scale(1)";
    }, 150);

    // Confetti Effect
    createConfetti();

    // Small delay before moving to next page
    setTimeout(() => {
        window.location.href = "surprise.html";
    }, 1800);

});



// ==============================
// Confetti
// ==============================

function createConfetti() {

    const colors = [
        "#FFB6C1",
        "#FFD700",
        "#98FB98",
        "#87CEFA",
        "#DDA0DD",
        "#FFA07A"
    ];

    for (let i = 0; i < 180; i++) {

        const confetti = document.createElement("div");

        confetti.classList.add("confetti");

        confetti.style.left = Math.random() * window.innerWidth + "px";

        confetti.style.background =
            colors[Math.floor(Math.random() * colors.length)];

        confetti.style.animationDuration =
            Math.random() * 2 + 2 + "s";

        confetti.style.transform =
            `rotate(${Math.random() * 360}deg)`;

        document.body.appendChild(confetti);

        setTimeout(() => {

            confetti.remove();

        }, 4000);

    }

}



// ==============================
// Floating Hearts
// ==============================

setInterval(() => {

    const heart = document.createElement("div");

    heart.classList.add("floating-heart");

    heart.innerHTML = "💖";

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.fontSize =
        Math.random() * 20 + 18 + "px";

    heart.style.animationDuration =
        Math.random() * 3 + 4 + "s";

    document.body.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 7000);

}, 700);



// ==============================
// Photo Hover Effect
// ==============================

const photo = document.querySelector(".main-photo");

photo.addEventListener("mouseenter", () => {

    photo.style.transform = "scale(1.05) rotate(-2deg)";

});

photo.addEventListener("mouseleave", () => {

    photo.style.transform = "scale(1) rotate(0deg)";

});
