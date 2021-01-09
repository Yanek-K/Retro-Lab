
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


function scrollAppear () {
    var fadeIn = document.querySelector('.fade-in');
    var position = fadeIn.getBoundingClientRect().top;
    var screenPosition = window.innerHeight;

    if(position < screenPosition){
        fadeIn.classList.add("fade-in-appear")
    }
}

    window.addEventListener('scroll', scrollAppear);