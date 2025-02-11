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
        <h2>💖 Thank You, My Love 💖</h2>
        <p>
            From the moment we met, my life has been filled with endless love, joy, and laughter.  
            Every memory we’ve created is a treasure I hold close to my heart.  
            You are my best friend, my greatest adventure, and my forever love.  
        </p>
        <p>
            Thank you for being you. For loving me, for standing by my side, for making me feel so special every single day.  
            I promise to cherish and love you always.  
        </p>
        <h3>Forever yours, with all my heart ❤️</h3>
    </div>
`;

let currentSlide = 0;

function showSlide(index) {
    const imgElement = document.getElementById("slideshow-img");
    const captionElement = document.getElementById("slideshow-caption");
    const slideshowContainer = document.querySelector(".slideshow");
    const prevButton = document.getElementById("prev-btn");
    const nextButton = document.getElementById("next-btn");

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
        slideshowContainer.innerHTML = finalMessageHTML + `<button class="prev-btn" id="prev-btn-final" onclick="prevSlide()">⬅️ Previous</button>`;
    }

    // Enable/Disable buttons based on the current slide
    nextButton.style.display = index < memories.length ? "inline-block" : "none";
    prevButton.style.display = index > 0 ? "inline-block" : "none";
}

function nextSlide() {
    if (currentSlide < memories.length) {
        currentSlide++;
        showSlide(currentSlide);
    }
}

function prevSlide() {
    if (currentSlide > 0) {
        currentSlide--;
        document.querySelector(".slideshow").innerHTML = `
            <img id="slideshow-img" src="" alt="Memory Image">
            <div id="slideshow-caption"></div>
            <button class="prev-btn" id="prev-btn" onclick="prevSlide()">⬅️ Previous</button>
            <button class="next-btn" id="next-btn" onclick="nextSlide()">Next ➡️</button>
        `;
        showSlide(currentSlide);
    }
}

document.addEventListener("DOMContentLoaded", () => showSlide(currentSlide));

const loveLetterPopup = document.getElementById("love-letter-popup");
const loveLetterBtn = document.getElementById("love-letter-btn");
const closePopup = document.getElementById("close-popup");

loveLetterBtn.addEventListener("click", () => {
    loveLetterPopup.style.display = "block";
});
closePopup.addEventListener("click", () => {
    loveLetterPopup.style.display = "none";
});

const music = document.getElementById("bg-music");
const musicButton = document.getElementById("music-toggle");

musicButton.addEventListener("click", () => {
    if (music.paused) {
        music.play();
        musicButton.textContent = "🔇 Pause Music";
    } else {
        music.pause();
        musicButton.textContent = "🔈 Play Music";
    }
});

