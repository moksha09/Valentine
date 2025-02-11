document.addEventListener("DOMContentLoaded", () => {
    const heartsContainer = document.createElement("div");
    heartsContainer.classList.add("hearts-container");
    document.body.appendChild(heartsContainer);

    function createHeart() {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.style.left = `${Math.random() * 100}vw`;
        heart.style.animationDuration = `${Math.random() * 3 + 2}s`;
        heartsContainer.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000);
    }

    setInterval(createHeart, 500);
});

const memories = [
    { img: "https://raw.githubusercontent.com/moksha09/Valentine/main/images/blubrick1.jpg", caption: "Remember this! 🍷❤️" },
    { img: "https://raw.githubusercontent.com/moksha09/Valentine/main/images/bluebrick2.jpg", caption: "Our First Date – where it all began! 🍷❤️" },
    { img: "https://raw.githubusercontent.com/moksha09/Valentine/main/images/Beach.jpeg", caption: "Our First Trip Together – A&N A literal paradise! ✈️💑" },
    { img: "https://raw.githubusercontent.com/moksha09/Valentine/main/images/Scuba.jpeg", caption: "SCUBAAAAA!!!!!! So many beautiful memories! ✈️💑" },
    { img: "https://raw.githubusercontent.com/moksha09/Valentine/main/images/Birthday.jpeg", caption: "Best Birthday Ever – Thank you for making this day so special! 🎂🎈" },
    { img: "https://raw.githubusercontent.com/moksha09/Valentine/main/images/Anniversary.jpeg", caption: "Our First Anniversary – Another beautiful year of us! 💞" },
    { img: "https://raw.githubusercontent.com/moksha09/Valentine/main/images/Bike2.jpeg", caption: "From dreaming about it to finally making it! 💞" },
    { img: "https://raw.githubusercontent.com/moksha09/Valentine/main/images/Bike.jpeg", caption: "Our First Bike! 💞" }
];

// Final heartfelt message
const finalMessageHTML = `
    <div class="final-message">
        <h2>💖 Happy Valentine’s Day!  💖</h2>
        <p>
            Thank you for being my goofball, my partner-in-crime, and the reason I smile so much.    
        </p>
        <p> Yours forever, \n  Moksha </p>
    </div>
`;

let currentSlide = 0;
let slideshowInterval = setInterval(nextSlide, 5000); // Auto-switch every 5s
const toggleSlideshowBtn = document.getElementById("toggle-slideshow");

toggleSlideshowBtn.addEventListener("click", () => {
    if (slideshowInterval) {
        clearInterval(slideshowInterval);
        slideshowInterval = null;
        toggleSlideshowBtn.textContent = "▶ Resume Slideshow";
    } else {
        slideshowInterval = setInterval(nextSlide, 5000);
        toggleSlideshowBtn.textContent = "⏸ Pause Slideshow";
    }
});

function showSlide(index) {
    const imgElement = document.getElementById("slideshow-img");
    const captionElement = document.getElementById("slideshow-caption");
    const slideshowContainer = document.querySelector(".slideshow");

    if (index < memories.length) {
        imgElement.style.opacity = 0;
        setTimeout(() => {
            imgElement.src = memories[index].img;
            captionElement.innerText = memories[index].caption;
            imgElement.style.opacity = 1;
        }, 300);

        imgElement.style.display = "block";
        captionElement.style.display = "block";
    } else {
        imgElement.style.display = "none";
        captionElement.style.display = "none";
        slideshowContainer.innerHTML = finalMessageHTML;
        
        // Stop slideshow at final message
        clearInterval(slideshowInterval);
        slideshowInterval = null;
        toggleSlideshowBtn.style.display = "none"; // Hide the pause button

        // Trigger Fireworks 🎆
        showFireworks();
    }
}

function nextSlide() {
    currentSlide++;
    showSlide(currentSlide);
}

document.addEventListener("DOMContentLoaded", () => showSlide(currentSlide));

function openLetter() {
    const envelope = document.querySelector(".envelope");
    const flap = document.querySelector(".flap");
    const letter = document.getElementById("love-letter");
    const clickText = document.querySelector(".click-text");

    // Rotate the flap to open it
    flap.style.transform = "rotateX(-90deg)";

    // Hide the click text
    clickText.style.opacity = "0";

    // Wait for the flap animation to complete before revealing the letter
    setTimeout(() => {
        envelope.style.display = "none"; // Hide the envelope
        letter.classList.remove("hidden"); // Show the letter
        letter.style.opacity = "1";
        letter.style.transform = "translateY(0px) rotate(0deg)";
    }, 500);
}

const music = document.getElementById("bg-music");
const musicButton = document.getElementById("music-toggle");
const musicMessage = document.getElementById("music-message");

// Try to autoplay music when page loads
document.addEventListener("DOMContentLoaded", () => {
    const playPromise = music.play();
    
    if (playPromise !== undefined) {
        playPromise.then(() => {
            musicButton.textContent = "🔇 Pause Music"; // If autoplay works
        }).catch(() => {
            musicMessage.style.display = "block"; // Show message if blocked
        });
    }
});

// Play/Pause Music on Button Click
musicButton.addEventListener("click", () => {
    if (music.paused) {
        music.play();
        musicButton.textContent = "🔇 Pause Music";
    } else {
        music.pause();
        musicButton.textContent = "🔈 Play Music";
    }
});

