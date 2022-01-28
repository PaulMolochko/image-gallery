const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames.
Javascript does not have access to the filename system, so I have to hard-code this in.
*/
const imgArray = ['pic1.jpg','pic2.jpg','pic3.jpg','pic4.jpg', 'pic5.jpg'];
/* Looping through images 
Several way to do it.*/
//for(;;) loop
/*
for (let i = 0; i < imgArray.length; i++){
const newImage = document.createElement('img');
newImage.setAttribute('src', 'images/pic${i}'); //could also declare the path itself into the imgArray ('./pic1.jpg'), and do newImage.setAttribute('src',imgArray[i]);
thumbBar.appendChild(newImage);
}
*/
//for-of from ES5
/*
for (const image of imgArray) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', 'images/${image}'); //could also declare the path itself into the imgArray ('./pic1.jpg'), and do newImage.setAttribute('src',image);
    thumbBar.appendChild(newImage);
}
*/
// forEach array method
imgArray.forEach(image => {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', 'images/${image}'); //could also declare the path itself into the imgArray ('./pic1.jpg'), and do newImage.setAttribute('src',image);
    thumbBar.appendChild(newImage); 
})

/* Wiring up the Darken/Lighten button */