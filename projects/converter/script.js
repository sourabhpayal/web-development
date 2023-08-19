let input1 = document.querySelector("#input1");
let input2 = document.querySelector("#input2");
let select1 = document.querySelector("#select1");
let select2 = document.querySelector("#select2");
let button = document.querySelector("button");


button.addEventListener("click", function () {
    if (select1.options[select1.selectedIndex].innerText === "celsius" && select2.options[select2.selectedIndex].innerText === "Fahrenheit") {
        input2.value = parseFloat(input1.value) * 9 / 5 + 32;
    }
    else if (select1.options[select1.selectedIndex].innerText === "celsius" && select2.options[select2.selectedIndex].innerText === "kelvin") {
        input2.value = parseFloat(input1.value) + 273.15;
    }
    else if (select1.options[select1.selectedIndex].innerText === "Fahrenheit" && select2.options[select2.selectedIndex].innerText === "celsius") {
        input2.value = (parseFloat(input1.value) - 32) * 5 / 9;
    }
    else if (select1.options[select1.selectedIndex].innerText === "Fahrenheit" && select2.options[select2.selectedIndex].innerText === "kelvin") {
        input2.value = (parseFloat(input1.value) - 32) * 5 / 9 + 273.15;
    }
    else if (select1.options[select1.selectedIndex].innerText === "kelvin" && select2.options[select2.selectedIndex].innerText === "celsius") {
        input2.value = parseFloat(input1.value) - 273.15;
    }
    else if (select1.options[select1.selectedIndex].innerText === "kelvin" && select2.options[select2.selectedIndex].innerText === "Fahrenheit") {
        input2.value = (parseFloat(input1.value) - 273.15) * 9 / 5 + 32;
    }
    else {
        input2.value = input1.value;
    }
    input2.value = parseFloat(input2.value).toFixed(2);

})