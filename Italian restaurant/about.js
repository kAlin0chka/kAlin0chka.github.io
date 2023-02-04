const btn = document.querySelector ("#btnReserve");
btn.addEventListener ('click', function() {
    location.href = "reserve-table.html"
})

gsap.to ("h1", {
    text: "About Us",
    duration: 3,
    repeatDelay: 1,
    ease: "power1.in",
    // yoyo: true,
    delay: 0.2
})