document.addEventListener("DOMContentLoaded", function() { 
  navSlide();
});

//Nav animation
const navSlide = () => {
	const burger = document.querySelector('.burger');
	const nav = document.querySelector('.nav-links');
	const navLinks = document.querySelectorAll('.nav-links li');
	const navLinksA = document.querySelectorAll('.nav-links li a');
	
	burger.addEventListener('click', () => {
		// Toggle Nav
		nav.classList.toggle('nav-active');

		// Animate Links
		navLinks.forEach((link, index) => {
			if (link.style.animation !== '') {
				link.style.animation = '';
			} else {
				link.style.animation = `navLinksFade .5s ease forwards ${index / 7 + 0.2}s`;
			}
		});

		//Burger animation
		burger.classList.toggle('toggle');
	});

	//Nav hide on click
	navLinksA.forEach((linkA) => {
		linkA.addEventListener('click', () => {
			navLinks.forEach((link) => {
				link.style.animation = '';
			});

			nav.classList.toggle('nav-active');
			burger.classList.toggle('toggle');
		});
	});
};

// DOM Elements
const body = document.body;
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// Launch modal event + disable overflow on body (prevent double scrolling)
modalBtn.forEach((btn) => btn.addEventListener("click", () => {
  modalbg.style.display = "block";
  body.classList.toggle("overflow");
}));