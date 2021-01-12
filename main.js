
/* Smooth Scroll */ 

$('.navbar a').on('click', function(e){
    if (this.hash !== '') {
        e.preventDefault();

        const hash = this.hash;

        $('html, header').animate ({
            scrollTop: $(hash).offset().top
        }, 800);
    }
});

/* Fade */


AOS.init({
    offset: 100,
    duration: 2000
});


/* Services More Info */


document.getElementById('silver-info').addEventListener("click", myFunction);

function myFunction() {

var silverText = document.getElementById('silver-more')
var silverButton = document.getElementById('silver-info')

if (silverText.style.display === '' || silverText.style.display === "none") {
    silverText.style.display = "block"
        silverButton.innerText = "Show Less"
    } else {
        silverText.style.display = "none";
            silverButton.innerText = "Show More"
    
    }
}



document.getElementById('selenium-info').addEventListener("click", myFunctionSelenium);

function myFunctionSelenium() {

var seleniumText = document.getElementById('selenium-more')
var seleniumButton = document.getElementById('selenium-info')

if (seleniumText.style.display === '' || seleniumText.style.display === "none") {
    seleniumText.style.display = "block"
        seleniumButton.innerText = "Show Less"
    } else {
        seleniumText.style.display = "none";
            seleniumButton.innerText = "Show More" 
    }
}



document.getElementById('platinum-info').addEventListener("click", myFunctionPlatinum);

function myFunctionPlatinum() {

var platinumText = document.getElementById('platinum-more')
var platinumButton = document.getElementById('platinum-info')

if (platinumText.style.display === '' || platinumText.style.display === "none") {
    platinumText.style.display = "block"
        platinumButton.innerText = "Show Less"
    } else {
        platinumText.style.display = "none";
            platinumButton.innerText = "Show More"      
    }
}




document.getElementById('cyanotype-info').addEventListener("click", myFunctionCyanotype);

function myFunctionCyanotype() {

var cyanotypeText = document.getElementById('cyanotype-more')
var cyanotypeButton = document.getElementById('cyanotype-info')

if (cyanotypeText.style.display === '' || cyanotypeText.style.display === "none") {
    cyanotypeText.style.display = "block"
        cyanotypeButton.innerText = "Show Less"
    } else {
    cyanotypeText.style.display = "none";
        cyanotypeButton.innerText = "Show More"  
    }
}
