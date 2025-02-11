document.addEventListener("DOMContentLoaded", () => {
    const heartsContainer = document.createElement("div");
    heartsContainer.classList.add("hearts-container");
    document.body.appendChild(heartsContainer);

    function createHeart() {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.style.left = `${Math.random() * 100}vw`;
        heart.style.animationDuration = `${Math.random() * 3 + 2}s`; // Random float speed
        heartsContainer.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000);
    }

    setInterval(createHeart, 500); // Generates a heart every 0.5 seconds
});

const memories = [
    {
        img: "https://raw.githubusercontent.com/moksha09/Valentine/main/images/blubrick1.jpg",
        caption: "Remember this! 🍷❤️"
    },
    {
        img: "https://raw.githubusercontent.com/moksha09/Valentine/main/images/bluebrick2.jpg",
        caption: "Our First Date – where it all began! 🍷❤️"
    },
    {
        img: "https://raw.githubusercontent.com/moksha09/Valentine/main/images/Beach.jpeg",
        caption: "Our First Trip Together – A&N A literal paradise! ✈️💑"
    },
    {
        img: "https://raw.githubusercontent.com/moksha09/Valentine/main/images/Scuba.jpeg",
        caption: "SCUBAAAAA!!!!!! Such good adventures and so many beautiful memories! ✈️💑"
    },
    {
        img: "https://raw.githubusercontent.com/moksha09/Valentine/main/images/Birthday.jpeg",
        caption: "Best Birthday Ever – Thank you for making this day so special! 🎂🎈"
    },
    {
        img: "https://raw.githubusercontent.com/moksha09/Valentine/main/images/Anniversary.jpeg",
        caption: "Our First Anniversary – Another beautiful year of us! 💞"
    },
    {
        img: "https://raw.githubusercontent.com/moksha09/Valentine/main/images/Bike.jpeg",
        caption: "From dreaming about it to finally making it! 💞"
    }
];

let currentSlide = 0;

function showSlide(index) {
    const imgElement = document.getElementById("slideshow-img");
    const captionElement = document.getElementById("slideshow-caption");

    imgElement.style.opacity = 0; // Fade out
    setTimeout(() => {
        imgElement.src = memories[index].img;
        captionElement.innerText = memories[index].caption;
        imgElement.style.opacity = 1; // Fade in
    }, 300);
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % memories.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + memories.length) % memories.length;
    showSlide(currentSlide);
}

// Initialize the first slide
document.addEventListener("DOMContentLoaded", () => showSlide(currentSlide));
