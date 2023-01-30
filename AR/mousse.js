const back = document.querySelector ("#back");
const next = document.querySelector ("#next");
const photo = ["m1.jpg", "m2.jpg", "m3.jpg", "m4.jpg", "m6.jpg", "m7.jpg", "m9.jpg", "m11.jpg", "m12.jpg", "m8.jpg"];

let i = 0;
next.addEventListener ('click', () => {
    i++;
    if (i>photo.length-1){
        i=0;
    }
    document.querySelector ('#picture').src = photo[i];
})

back.addEventListener ('click', () => {
    i--;
    if (i<0){
        i=photo.length-1;
    }
    document.querySelector ('#picture').src = photo[i];
})