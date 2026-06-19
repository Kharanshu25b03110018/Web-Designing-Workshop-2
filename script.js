function calculateAge() {

    let dob = document.getElementById("dob").value;
    let error = document.getElementById("error");
    let result = document.getElementById("result");

    error.innerHTML = "";

    if (dob === "") {
        error.innerHTML = "Please select your Date of Birth";
        result.innerHTML = "Your age will appear here";
        return;
    }

    let birthDate = new Date(dob);
    let today = new Date();

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    if (days < 0) {
        months--;
        days += 30;
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    result.innerHTML =
        "<b>Years:</b> " + years +
        "<br><b>Months:</b> " + months +
        "<br><b>Days:</b> " + days;
}