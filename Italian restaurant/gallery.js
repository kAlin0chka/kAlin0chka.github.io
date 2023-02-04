
const items = document.querySelectorAll ('.item');

items.forEach (picture => {
    picture.addEventListener ('mouseover', () => {
        removeFocus ();
        picture.classList.add ('selected');
    })
    removeFocus = () => {
        items.forEach (picture => {
            picture.classList.remove ('selected')
        })
    }
})


gsap.to ("h1", {
    text: "Gallery",
    duration: 3,
    repeatDelay: 1,
    ease: "power1.in",
    // yoyo: true,
    delay: 0.2
})
