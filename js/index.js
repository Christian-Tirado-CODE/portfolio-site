let slides = document.querySelectorAll('.slide');


setInterval(()=> {
  slides.forEach(slide=> {
    if(slide.classList.contains('active')){
        slide.classList.remove('active');
    }else {
        slide.classList.add('active');
    }
  });
}, 6500);



// PROJECTS SLIDESHOW SECTION

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
  slides[slideIndex-1].style.display = "flex";
  dots[slideIndex-1].className += " active";
}


//Smooth Scroll - Safari

const scroll = new SmoothScroll('.top a[href*="#"]', {
  speed: 600
});


