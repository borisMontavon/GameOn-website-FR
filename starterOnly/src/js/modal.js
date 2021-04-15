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

// Launch modal event + disable overflow on body (prevent double scrolling)
modalBtn.forEach((btn) => btn.addEventListener("click", () => {
	modalbg.style.display = "block";
	body.classList.toggle("overflow");
}));

closeModal.addEventListener("click", () => {
	modalbg.style.display = "none";
  	body.classList.toggle("overflow");
});

// Validate the form

// firstNameInput.addEventListener("change", (e) => {
// 	const value = e.target.value;
// 	const hasNumber = /\d/.test(value);

// 	if (hasNumber || value.length < 2) {
// 		firstNameSpan.style.display = "block";
// 	} else {
// 		firstNameSpan.style.display = "none";
// 	}
// 	return hasNumber;
// });

// lastNameInput.addEventListener("change", (e) => {
// 	const value = e.target.value;
// 	const hasNumber = /\d/.test(value);

// 	if (hasNumber || value.length < 2) {
// 		lastNameSpan.style.display = "block";
// 	} else {
// 		lastNameSpan.style.display = "none";
// 	}
// 	return hasNumber;
// });

// const emailInput = document.querySelector("#email");
// const emailSpan = document.querySelector("#emailSpan");

// emailInput.addEventListener("change", (e) => {
// 	const regEx = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
// 	const value = e.target.value;

// 	if (!regEx.test(value)) {
// 		emailSpan.style.display = "block";
// 	} else {
// 		emailSpan.style.display = "none";
// 	}
// 	return regEx.test(value);
// });

// const quantityInput = document.querySelector("#quantity");
// const quantitySpan = document.querySelector("#quantitySpan");

// quantityInput.addEventListener("change", (e) => {
// 	const regEx = /[0-9]/;
// 	const value = e.target.value;

// 	if (!regEx.test(value) || value > 99) {
// 		quantitySpan.style.display = "block";
// 	} else {
// 		quantitySpan.style.display = "none";
// 	}
// 	return regEx.test(value);
// });

// Validate first/last name inputs
const isFirstNameValid = () => {
	const firstNameValue = document.querySelector("#first").value;
	const firstNameSpan = document.querySelector("#firstNameSpan");
	const hasNumber = /\d/.test(firstNameValue);

	if (hasNumber || firstNameValue.length < 2) {
		firstNameSpan.style.display = "block";

		return false;
	}
	
	firstNameSpan.style.display = "none";

	return true;
};

const isLastNameValid = () => {
	const lastNameValue = document.querySelector("#last").value;
	const lastNameSpan = document.querySelector("#lastNameSpan");
	const hasNumber = /\d/.test(lastNameValue);

	if (hasNumber || lastNameValue.length < 2) {
		lastNameSpan.style.display = "block";

		return false;

	}
	
	lastNameSpan.style.display = "none";

	return true;
};

// Validating email using regex
const isEmailValid = () => {
	const emailValue = document.querySelector("#email").value;
	const emailSpan = document.querySelector("#emailSpan");
	const regEx = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	const emailAdressTest = regEx.test(emailValue);

	if (!emailAdressTest) {
		emailSpan.style.display = "block";

		return false;

	}
	
	emailSpan.style.display = "none";

	return true;
};

// Validating birthdate input
const isBirthDateValid = () => {
	const birthInput = document.querySelector("#birthdate");
	const birthSpan = document.querySelector("#birthSpan");

	if (!birthInput.validity.valid) {
		birthSpan.style.display = "block";

		return false;
	}
	
	birthSpan.style.display = "none";
	
	return true;
};

// Validating quantity input (numbers only)
const isQuantityValid = () => {
	const quantityValue = document.querySelector("#quantity").value;
	const quantitySpan = document.querySelector("#quantitySpan");
	const quantityTest = /^([1-9][0-9]|[0-9])$/.test(quantityValue);

	if (!quantityTest || quantityValue > 99) {
		quantitySpan.style.display = "block";

		return false;
	}

	quantitySpan.style.display = "none";
	
	return true;
};

// Validating at least one checkbox selected
const isOneCheckboxSelected = () => {
	if (!isQuantityValid()) {
		return false;
	}
		
	const checkboxs = Array.from(document.getElementsByName("location"));
	const checkboxSpan = document.querySelector("#checkboxSpan");
	const isMinOneChecked = checkboxs.some(checkbox => checkbox.checked);
	const quantityValue = document.querySelector("#quantity").value;

	if (!isMinOneChecked && quantityValue > 0) {
		checkboxSpan.style.display = "block";

		return false;
	}

	checkboxSpan.style.display = "none";
	
	return true;
};

// Validating conditions accepted and checked
const isConditionsChecked = () => {
	const conditionsCheckbox = document.querySelector("#checkbox1");
	const conditionsSpan = document.querySelector("#conditionsSpan");

	if (!conditionsCheckbox.checked) {
		conditionsSpan.style.display = "block";

		return false;
	}

	conditionsSpan.style.display = "none";

	return true;
}

// Submit and check if inputs are valids
const btnSubmit = document.querySelector("#btnSubmit");

btnSubmit.addEventListener("click", () => {
	var isFormValid = true;

	if (!isFirstNameValid()) {
		isFormValid = false;
	}
	if (!isLastNameValid())	{
		isFormValid = false;
	}
	if (!isEmailValid()) {
		isFormValid = false;
	}
	if (!isBirthDateValid()) {
		isFormValid = false;
	}
	if (isQuantityValid()) {
		isFormValid = false;
	}
	if (isOneCheckboxSelected()) {
		isFormValid = false;
	}
	if (isConditionsChecked()) {
		isFormValid = false;
	}

	if (isFormValid) {
		displayThankYouModal();
	}
});