// Validate the form

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
const isConditionsChecked =() => {
    const conditionsCheckbox = document.querySelector("#checkbox1");
    const conditionsSpan = document.querySelector("#conditionsSpan");

    if (!conditionsCheckbox.checked) {
        conditionsSpan.style.display = "block";

        return false;
    }

    conditionsSpan.style.display = "none";

    return true;
}

// Display the "Thank you" modal
const displayThankYouModal = () => {
    const formOne = document.querySelector("form");
    const contentOne = document.querySelector(".content");
    const modalBody = document.querySelector(".modal-body");
    const thankYouModal  = document.querySelector(".thank-you-modal");

    formOne.style.display = "none";
    contentOne.classList.toggle("content-height");
    modalBody.classList.toggle("modal-body-height");
    thankYouModal.style.display = "flex";
}

const validateForm = () => {
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
    if (!isQuantityValid()) {
        isFormValid = false;
    }
    if (!isOneCheckboxSelected()) {
        isFormValid = false;
    }
    if (!isConditionsChecked()) {
        isFormValid = false;
    }

    if (isFormValid) {
        displayThankYouModal();
    }
}

// Submit and check if inputs are valids
const isFormFieldsValid = () => {
    const btnSubmit = document.querySelector("#btnSubmit");

    btnSubmit.addEventListener("click", validateForm);
}

// var closeSubmittedModal = document.querySelector("#close-submitted-modal");