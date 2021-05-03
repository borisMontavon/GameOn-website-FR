document.addEventListener("DOMContentLoaded", function() { 
	navSlide();
});

//Nav animation
const navSlide = () => {
	const burger = document.querySelector(".burger");
	const nav = document.querySelector(".nav-links");
	const navLinks = document.querySelectorAll(".nav-links li");
	const navLinksA = document.querySelectorAll(".nav-links li a");
	const headerImg = document.querySelector(".header-img").style;
	const header = document.querySelector(".header").style;
	
	burger.addEventListener("click", () => {
		// Toggle Nav
		nav.classList.toggle("nav-active");

		// Animate Links
		navLinks.forEach((link, index) => {
			if (link.style.animation !== "") {
				link.style.animation = "";
			} else {
				link.style.animation = `navLinksFade .5s ease forwards ${index / 7 + 0.2}s`;
			}
		});

		//Burger animation
		burger.classList.toggle("toggle");

		// Toggle header and logo positions
		if (headerImg.position === "fixed" && header.position === "sticky") {
			headerImg.position = "absolute";
			header.position = "relative"
		} else {
			headerImg.position = "fixed";
			header.position = "sticky"
		};
	});

	//Nav hide on click
	navLinksA.forEach((linkA) => {
		linkA.addEventListener("click", () => {
			navLinks.forEach((link) => {
				link.style.animation = "";
			});

			nav.classList.toggle("nav-active");
			burger.classList.toggle("toggle");
			// Header + logo img initial positions
			headerImg.position = "absolute";
			header.position = "relative";
		});
	});
};

// DOM Elements
const body = document.body;
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeModal = document.querySelector(".close");

// Form validation
const formValidation = new FormValidation();

// Launch modal event + disable overflow on body (prevent double scrolling)
modalBtn.forEach((btn) => btn.addEventListener("click", () => {
	modalbg.style.display = "block";
	body.classList.toggle("overflow");
	formValidation.isFormFieldsValid();
}));

closeModal.addEventListener("click", () => {
	modalbg.style.display = "none";
  	body.classList.toggle("overflow");
});
