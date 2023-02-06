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
gsap.from (".image", {x: -800, duration: 3, rotation: 360, delay: 3.5, opacity: 0})
gsap.from ("#par", {duration: 2.7, scale: 2, opacity: 0, delay: 5.5})
gsap.to ("button", {opacity:1, y: -20, duration:3, delay:7.5})