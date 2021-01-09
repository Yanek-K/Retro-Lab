
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

