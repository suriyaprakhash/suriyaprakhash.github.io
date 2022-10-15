function forceLower(emailField) {
    var input =document.getElementById("form-email");
    input.setAttribute('value', emailField.value.toLowerCase());
    console.log(input.value);
}

const validateEmail = (email) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };

function validateForm() {
    var email = document.getElementById("form-email").value;
    var name = document.getElementById("form-name").value;
    var message = document.getElementById("form-message").value;
    if (validateEmail(email) && email.length > 0 && name.length > 0 && message.length > 0) {
        setSubmitButtonVisible(true);
    } else {
        setSubmitButtonVisible(false);
    }

}

function setSubmitButtonVisible(visible) {
    var submitButton = document.getElementById("submit-button");
    if(visible) {
        submitButton.disabled = false;
        submitButton.style.display = "block";
    } else {
        submitButton.disabled = true;
        submitButton.style.display = "none";
    }
}