class formValidation {
    // Validate the form

    // Validate first/last name inputs
    isFirstNameValid() {
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

    isLastNameValid() {
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
    isEmailValid() {
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
    isBirthDateValid() {
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
    isQuantityValid() {
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
    isOneCheckboxSelected() {
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
    isConditionsChecked() {
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
    isFormFieldsValid() {
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
    }
}

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