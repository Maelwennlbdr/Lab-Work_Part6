function userForm() {
    // Get form data
    let firstName = document.getElementById("first-name").value;
    let lastName = document.getElementById("last-name").value;
    let email = document.getElementById("email").value;
    let address = document.getElementById("address").value;
    let city = document.getElementById("city").value;
    let province = document.getElementById("province").value;
    let membership = document.querySelector('input[name="membership"]:checked').value;
    let formResult = document.getElementById("formResult");

    formResult.innerHTML = "Full Name: " + firstName + lastName + "<br>";
    formResult.innerHTML += "Email Address: " + email + "<br>";
    formResult.innerHTML += "Address: " + address + "<br>";
    formResult.innerHTML += "City: " + city + "<br>";
    formResult.innerHTML += "Province: " + province + "<br>";
    formResult.innerHTML += "Membership Type: " + membership;
}

function myExcelFuns() {
    let calcule = document.querySelector('input[name="calcule"]:checked').value;
    let result = document.getElementById("result");
    let rawNumbers = document.getElementById("numbers").value;
    if (rawNumbers === null || rawNumbers.trim() === "") {
        alert("Please type your numbers.");
    } else {
        let numbersText = rawNumbers.split(" ");
        let numbers = [];
        console.log(numbersText);
        for (let i = 0; i < numbersText.length; i++) {
            numbers[i] = parseInt(numbersText[i]);
            if (isNaN(numbers[i])) {
                alert("Please only type number.");
                result.value = '';
                return;
            }
        }
        console.log(numbers);


        console.log(calcule);
        let resultNum;
        switch (calcule) {
            case 'AutoSum':
                resultNum = autoSum(numbers);
                break;
            case 'Average':
                resultNum = average(numbers);
                break;
            case 'Max':
                resultNum = max(numbers);
                break;
            case 'Min':
                resultNum = min(numbers);
                break;
            default:
                result.value = "Please choose an operation.";
        }
        result.value = resultNum;
    }
}

function autoSum(array) {
    let result = 0;
    for (let i = 0; i < array.length; i++) {
        result += array[i];
    }
    return result;
}

function average(array) {
    let result = 0;
    for (let i = 0; i < array.length; i++) {
        result += array[i];
    }
    return result / array.length;
}

function max(array) {
    let result = array[0];
    for (let i = 0; i < array.length; i++) {
        if (array[i] > result) {
            result = array[i];
        }
    }
    return result;
}

function min(array) {
    let result = array[0];
    for (let i = 0; i < array.length; i++) {
        if (array[i] < result) {
            result = array[i];
        }
    }
    return result;
}

function changeColor(option) {
    let body = document.body;
    let header = document.getElementById("header");
    let nav = document.getElementsByClassName("navButtonLight");

    if (option == 1) {
        body.classList.remove('dark-theme');
        body.classList.add('light-theme');
        header.className = "headerLight";
        nav.className = "navButton navButtonLight";
    } else {
        body.classList.remove('light-theme');
        body.classList.add('dark-theme');
        header.className = "headerDark";
        nav.className = "navButton navButtonDark";

    }
}
