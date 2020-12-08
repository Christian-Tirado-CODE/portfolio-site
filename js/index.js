let slides = document.querySelectorAll('.slide');


setInterval(()=> {
  slides.forEach(slide=> {
    if(slide.classList.contains('active')){
        slide.classList.remove('active');
    }else {
        slide.classList.add('active');
    }
  });
  console.log(slides)
}, 9500);