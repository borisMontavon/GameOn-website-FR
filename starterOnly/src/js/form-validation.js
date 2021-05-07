// Validate the form

// Validate first/last name inputs
const isFirstNameValid = () => {
    const firstNameValue = document.getElementById("first").value;
    const firstNameSpan = document.getElementById("firstNameSpan");
    const hasNumber = /\d/.test(firstNameValue);

    if (hasNumber || firstNameValue.length < 2) {
        firstNameSpan.style.display = "block";

        return false;
    }
    
    firstNameSpan.style.display = "none";

    return true;
};

const isLastNameValid = () => {
    const lastNameValue = document.getElementById("last").value;
    const lastNameSpan = document.getElementById("lastNameSpan");
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
    const emailValue = document.getElementById("email").value;
    const emailSpan = document.getElementById("emailSpan");
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
    const birthInput = document.getElementById("birthdate");
    const birthSpan = document.getElementById("birthSpan");

    if (!birthInput.validity.valid) {
        birthSpan.style.display = "block";

        return false;
    }
    
    birthSpan.style.display = "none";
    
    return true;
};

// Validating quantity input (numbers only)
const isQuantityValid = () => {
    const quantityValue = document.getElementById("quantity").value;
    const quantitySpan = document.getElementById("quantitySpan");
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
    const checkboxSpan = document.getElementById("checkboxSpan");
    const isMinOneChecked = checkboxs.some(checkbox => checkbox.checked);
    const quantityValue = document.getElementById("quantity").value;

    if (!isMinOneChecked && quantityValue > 0) {
        checkboxSpan.style.display = "block";

        return false;
    }

    checkboxSpan.style.display = "none";
    
    return true;
};

// Validating conditions accepted and checked
const isConditionsChecked =() => {
    const conditionsCheckbox = document.getElementById("checkbox1");
    const conditionsSpan = document.getElementById("conditionsSpan");

    if (!conditionsCheckbox.checked) {
        conditionsSpan.style.display = "block";

        return false;
    }

    conditionsSpan.style.display = "none";

    return true;
}

// Display "Thank you" modal
const displayThankYouModal = () => {
    const modalForm = document.getElementById("modal-form");
    const modalTy = document.getElementById("modal-ty");

    modalForm.style.display = "none";
    modalTy.style.display = "flex";
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
        document.getElementById('inscriptionForm').reset();

        displayThankYouModal();
    }
}

// Submit and check if inputs are valids
const isFormFieldsValid = () => {
    const btnSubmit = document.getElementById("btnSubmit");

    btnSubmit.addEventListener("click", validateForm);
}
