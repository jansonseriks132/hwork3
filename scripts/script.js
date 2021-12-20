
 
    const inputMin = document.getElementById("minInput");
    const inputMax = document.getElementById("maxInput");
    const main = document.getElementById("container");



const create = function () {            
    while (main.firstChild) {
        main.removeChild(main.firstChild);
    };

    for (let i = 1; i <= 100; i++) {     
        let newDiv = document.createElement("div");
        let newPar = document.createElement("p");

        newDiv.appendChild(newPar);
        main.appendChild(newDiv).setAttribute("id", "div_" + i);

        if (i < inputMin.value || i > inputMax.value) {
            newDiv.style = "display: none";
        } else {
            if (i % 3 === 0 && i % 5 === 0) {                              
                newPar.appendChild(document.createTextNode("id " + i + ' = Fizz Buzz'));
                main.appendChild(newDiv).setAttribute("class", "fizbuz");   

            } else if (i % 3 === 0) {
                newPar.appendChild(document.createTextNode("id " + i + ' = Fizz'));
                main.appendChild(newDiv).setAttribute("class", "fiz");

            } else if (i % 5 === 0) {
                newPar.appendChild(document.createTextNode("id " +i + ' = Buzz'));
                main.appendChild(newDiv).setAttribute("class", "buz");

            } else {
                newPar.appendChild(document.createTextNode("id " +i));
                main.appendChild(newDiv).setAttribute("class", "num");
            }
        }
    }
};    

create();











