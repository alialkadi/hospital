// select landpage element


let landingPage = document.querySelector(".landing-page");

// get array of images

let imgsArray =["hospital1.jpg","hospital2.jpg","hospital3.jpg","hospital4.jpg","hospital5.jpg"];

// change background image



// get random number





setInterval(() => {

    let randomNumber = Math.floor(Math.random() * imgsArray.length);

    landingPage.style.backgroundImage = 'url("imgs/'+ imgsArray[randomNumber] +'")';

} , 7000);