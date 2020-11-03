header = document.querySelector('.timeline');
// console.log(header)
li = Array.prototype.slice.apply(document.querySelectorAll('.tuHistoria'))
// console.log(li)
header.addEventListener('click',(e)=>{
	
	if(e.target.classList.contains('multimedia')){
		
		console.log(e.target.classList.contains('multimedia'))
		modalMensaje = document.querySelector('.modalTimeLime');
		modalMensaje.style ="display:block";
		modalMensaje.classList.add('animate__animated', 'animate__bounceIn');
			

			
}
})

function cerrarModal(){
	modalMensaje = document.querySelector('.modalTimeLime');
	modalMensaje.style ="display:none";
}



var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
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
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
} 


