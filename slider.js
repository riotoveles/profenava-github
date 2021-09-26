const slider = document.querySelector("#slider");
let sliderSection = document.querySelectorAll(".slider__section");
let sliderSectionLast = sliderSection[sliderSection.length -1];

slider.insertAdjacentElement('afterbegin', sliderSectionLast);

function moveright() {
  let sliderSectionFirst = document.querySelectorAll(".slider__section")[0];
  slider.style.marginLeft = "-200%";
  slider.style.transition = "all 0.5s";
  setTimeout(function() {
  	slider.style.transition = "none";
  	slider.insertAdjacentElement('beforeend', sliderSectionFirst);
  	slider.style.marginLeft = "-100%";
  }, 500)

}

function moverleft() {
  let sliderSection = document.querySelectorAll(".slider__section");
  let sliderSectionLast = sliderSection[sliderSection.length -1];
  slider.style.marginLeft = "0%";
  slider.style.transition = "all 0.5s";
  setTimeout(function() {
  	slider.style.transition = "none";
  	slider.insertAdjacentElement('afterbegin', sliderSectionLast);
  	slider.style.marginLeft = "-100%";
  }, 500)

}

setInterval(function(){
	moveright();
}, 5000)