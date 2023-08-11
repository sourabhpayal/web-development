let input = document.querySelector("input");
let container = document.querySelector(".container");
let li = Array.from(document.querySelectorAll("li"));
let string = "";

li.forEach((element) => {
    element.addEventListener("click", (e) => {
        if (e.target.innerHTML == '=') {
            string = eval(string);
            input.value = string;
            
        }
        else if (e.target.innerHTML == 'C') {
            string = ""
            input.value = string;
        }
        else if (e.target.innerHTML == 'B') {
            string = string.slice(0, -1)
            input.value = string;
        }
        else if(e.target.innerHTML == "+/-"){
            if (Number(string) >= 0) {
                string = "-" + string;
                input.value = string;   
            } else {
                string = string.slice(1,string.length);
                input.value = string;   
            }
        }
        else {
            string = string + e.target.innerHTML;
            input.value = string;
        }
    })
})