
let form = document.getElementById("myForm");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    let confirm = document.getElementById("confirm");
    let phone = document.getElementById("phone");
    let country = document.getElementById("country");

    let valid = true;

    document.querySelectorAll("small").forEach(function(item) {
        item.innerText = "";
    });

    document.querySelectorAll(".error").forEach(function(item) {
        item.classList.remove("error");
    });

    document.getElementById("result").innerText = "";

    if (name.value.trim() == "") {
        document.getElementById("nameError").innerText =
            "Name cannot be empty";
        name.classList.add("error");
        valid = false;
    }

    if (!email.value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
        document.getElementById("emailError").innerText =
            "Enter a valid email";
        email.classList.add("error");
        valid = false;
    }

    if (password.value.length < 6) {
        document.getElementById("passwordError").innerText =
            "Password must be at least 6 characters";
        password.classList.add("error");
        valid = false;
    }

    if (confirm.value != password.value || confirm.value == "") {
        document.getElementById("confirmError").innerText =
            "Password does not match";
        confirm.classList.add("error");
        valid = false;
    }

    if (phone.value != "" &&
        !/^[0-9]{10,}$/.test(phone.value)) {
        document.getElementById("phoneError").innerText =
            "Phone must contain at least 10 digits";
        phone.classList.add("error");
        valid = false;
    }

    if (!document.querySelector('input[name="gender"]:checked')) {
        document.getElementById("genderError").innerText =
            "Please select your gender";
        valid = false;
    }

    if (!document.querySelector('input[name="hobby"]:checked')) {
        document.getElementById("hobbyError").innerText =
            "Please select at least one hobby";
        valid = false;
    }

    if (country.value == "") {
        document.getElementById("countryError").innerText =
            "Please select a country";
        country.classList.add("error");
        valid = false;
    }

    if (valid) {
        document.getElementById("result").innerText =
            "Registration successful!";
        form.reset();
    }
});
