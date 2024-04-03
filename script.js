let form = document.getElementById("myForm");
      form.addEventListener("submit", function (e) {
        let nameInput = document.querySelector("#name");
        let emailInput = document.querySelector("#email");
        let phoneInput = document.querySelector("#phone");
        let nameNotMatch = document.querySelector("#nameError");
        let emailNotMatch = document.querySelector("#emailError");
        let phoneNotMatch = document.querySelector("#phoneError");
        let nameRegex = /^[A-Z]+[a-zA-Z\s]{3,30}$/;
        let emailRegex = /^[a-zA-Z0-9\.\_\-]+@[a-zA-Z0-9]+.[[a-zA-Z]{2,5}$/;
        let phoneRegex = /^[0-9]{10}$/;

        e.preventDefault();
        // Name
        if (nameInput.value.match(nameRegex)) {
          nameNotMatch.innerHTML = "ok";
        } else {
          nameNotMatch.innerHTML = "Error";
        }

        // Email
        if (emailInput.value.match(emailRegex)) {
          emailNotMatch.innerHTML = "ok";
        } else {
          emailNotMatch.innerHTML = "Error";
        }

        // Phone
        if (phoneInput.value.match(phoneRegex)) {
          phoneNotMatch.innerHTML = "ok";
        } else {
          phoneNotMatch.innerHTML = "Error";
        }
      });