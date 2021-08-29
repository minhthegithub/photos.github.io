function openModal() {
  document.getElementById("modal").style.display = "block";
}
function exitModal() {
  document.getElementById("modal").style.display = "none";
}
//
let slideIndex = 1;
function showSlides(n) {
  let i;
  let slide = document.getElementsByClassName("slide");
  let demo = document.getElementsByClassName("demo");
  let caption = document.getElementById("caption");
//   if (n > slide.length) {
//     slideIndex = 1;
//   }
//   if (n < 1) {
//     slideIndex = slide.length;
//   }

//   for(i = 0; i < slide.length; i++){

//   }

    slide[slideIndex - 1].style.display = "block";
    demo[slideIndex - 1].className = " active";
    caption.innerHTML = demo[slideIndex - 1].alt;
}

function changeSlide(n){
    showSlides(slideIndex += n)
}

function currentSlide(n){
    showSlides(slideIndex = n)
}

