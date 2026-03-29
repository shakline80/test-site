(function ($) {
"use strict";

$(document).ready(function () {

    // Menu toggle
    $(".menu_triger").on("click", function () {
        $(".menu_triger, .mainmenu").toggleClass("active");
    });

  

    // Infinite Brand Slider
    const track = document.querySelector(".slider-track");

    // 🔁 Duplicate content for seamless loop
    track.innerHTML += track.innerHTML;

    const totalWidth = track.scrollWidth / 2;

    gsap.to(track, {
      x: -totalWidth,
      duration: 20, // speed (lower = faster)
      ease: "none",
      repeat: -1
    });
    // Infinite Brand Slider


     
    

});

// Window load
$(window).on("load", function () {

});

})(jQuery);




// Portfolio Filter Trigger
const filterButtons = document.querySelectorAll(".portfolio-filter button");
const cards = document.querySelectorAll(".project-card");

filterButtons.forEach(button => {
  button.addEventListener("click", () => {

    // Active button
    filterButtons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");

    const filter = button.getAttribute("data-filter");

    cards.forEach(card => {
      if (filter === "all") {
        card.classList.remove("hide");
      } else {
        if (card.classList.contains(filter)) {
          card.classList.remove("hide");
        } else {
          card.classList.add("hide");
        }
      }
    });

  });
});
// Portfolio Filter Trigger





// Team Slider in About Page

const track = document.querySelector(".team-track");

// 🔁 duplicate items for infinite loop
track.innerHTML += track.innerHTML;

let totalWidth = track.scrollWidth / 2;

// 🎬 auto scroll (marquee)
let tween = gsap.to(track, {
  x: -totalWidth,
  duration: 30,
  ease: "none",
  repeat: -1
});

// 🖱 drag support
Draggable.create(track, {
  type: "x",
  inertia: true,
  onPress() {
    tween.pause(); // stop auto when dragging
  },
  onRelease() {
    tween.resume(); // resume after drag
  },
  bounds: {
    minX: -totalWidth,
    maxX: 0
  }
});

// Team Slider in About Page



// Flip Card Effect
let currentCard = null;

function handleFlip(card) {
  // if clicking same card → toggle
  if (currentCard === card) {
    card.classList.remove("active");
    currentCard = null;
    return;
  }

  // close previous
  if (currentCard) {
    currentCard.classList.remove("active");
  }

  // open new
  card.classList.add("active");
  currentCard = card;
}
// Flip Card Effect




// Branding Gallary Effect
const items = document.querySelectorAll(".branding-list h2");
const hoverImage = document.querySelector(".hover-image");
const hoverImgTag = hoverImage.querySelector("img");

items.forEach(item => {
  item.addEventListener("mouseenter", () => {
    const imgSrc = item.getAttribute("data-img");
    hoverImgTag.src = imgSrc;
    hoverImage.style.opacity = 1;
  });

  item.addEventListener("mouseleave", () => {
    hoverImage.style.opacity = 0;
  });

  item.addEventListener("mousemove", (e) => {
    hoverImage.style.left = e.clientX + "px";
    hoverImage.style.top = e.clientY + "px";
  });
});
// Branding Gallary Effect




// Falling Button Animation Start
document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  const buttons = document.querySelectorAll(".faling-btn a");

  // initial state (up + hidden)
  gsap.set(buttons, {
    y: -150,
    opacity: 0,
    rotate: () => gsap.utils.random(-30, 30)
  });

  // animation on scroll
  gsap.to(buttons, {
    scrollTrigger: {
      trigger: ".branding-area",
      start: "top 75%",
      toggleActions: "play none none none"
    },
    y: () => gsap.utils.random(20, 80),   // bottom drop
    x: () => gsap.utils.random(50, 180),  // move to right side
    opacity: 1,
    rotate: () => gsap.utils.random(-10, 10),
    duration: 1.2,
    ease: "bounce.out",
    stagger: {
      each: 0.2,
      from: "random" // random falling order 🔥
    }
  });
});
// Falling Button Animation End


// Text Vertical Slide Effect Start
document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("ctVertical");
  const items = container.children;

  container.appendChild(items[0].cloneNode(true));

  const itemHeight = items[0].offsetHeight;
  const tl = gsap.timeline({ repeat: -1 });

  for (let i = 0; i < items.length; i++) {
    tl.to(container, {
      y: -itemHeight * i,
      duration: 0.6,
      ease: "power2.inOut"
    })
    .to({}, { duration: 1.5 }); // ⏸ pause time
  }
});
// Text Vertical Slide Effect End




