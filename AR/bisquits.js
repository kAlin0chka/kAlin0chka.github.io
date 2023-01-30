const back = document.querySelector ("#back");
const next = document.querySelector ("#next");
const photo = ["b1.jpg", "b2.jpg", "b3.jpg", "b5.jpg", "b6.jpg", "b7.jpg", "b8.jpg"];

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