// js used for the image gallery on portfolio page
// taken from an online template

// Source - https://stackoverflow.com/a/43300869
// Posted by S. Walker
// Retrieved 2026-09-28, License - CC BY-SA 3.0

var slideshow1 = document.getElementById("slideshow1");
slideshow1.currentSlideIndex = 1;
showSlides(slideshow1.currentSlideIndex, slideshow1);

var slideshow2 = document.getElementById("slideshow2");
slideshow2.currentSlideIndex = 1;
showSlides(slideshow2.currentSlideIndex, slideshow2);

var slideshow3 = document.getElementById("slideshow3");
slideshow3.currentSlideIndex = 1;
showSlides(slideshow2.currentSlideIndex, slideshow3);

function plusSlides(n, slideshow) {
    showSlides(slideshow.currentSlideIndex += n, slideshow);
}

function currentSlide(n, slideshow) {
    showSlides(slideshow.currentSlideIndex = n, slideshow);
}


function showSlides(n, slideshow) {

    let i;
    let slides = slideshow.getElementsByClassName("mySlides");
    let dots = slideshow.getElementsByClassName("dot");
    if (n > slides.length) { slideshow.currentSlideIndex = 1 }
    if (n < 1) { slideshow.currentSlideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideshow.currentSlideIndex - 1].style.display = "block";
    dots[slideshow.currentSlideIndex - 1].className += " active";
}