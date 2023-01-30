const back = document.querySelector ("#back");
const next = document.querySelector ("#next");
const photo = ["mac1.jpg", "mac2.jpg", "mac3.jpg", "mac4.jpg", "mac5.jpg"];

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