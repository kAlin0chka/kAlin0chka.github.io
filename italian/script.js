const btn = document.querySelector ("#btnReserve");
btn.addEventListener ('click', function() {
    location.href = "reserve-table.html"
})

gsap.to ("h1", {
    text: "We'll take care about your spaghetti cravings!",
    duration: 3,
    repeatDelay: 1,
    ease: "power1.in",
    // yoyo: true,
    delay: 0.2
})
gsap.from (".image", {x: -800, duration: 3, delay: 3.5, opacity: 0})
gsap.from ("#par", {x: 800, duration: 3, delay: 3.5, opacity: 0})
gsap.to ("button", {opacity:1, y: -20, duration:3, delay:6.5})