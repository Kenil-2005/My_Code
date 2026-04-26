// console.log("hello Wolrd")

const input = document.getElementById('screen');
const buttons = document.querySelectorAll('button');
const tablebody = document.getElementById('tableBody');

let resultStr = "";
let itemsJsonArray = [];
let i;

buttons.forEach(buttons => {
    buttons.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            let originalExpression = resultStr; // Store the original expression
            try {
                resultStr = eval(resultStr); // Evaluate the expression
                input.value = resultStr;
                getAndUpdate(originalExpression, resultStr); // Store both expression and result
            } catch {
                input.value = "Error";
                resultStr = "";
            }
        }
        else if (e.target.innerHTML == 'Clear All') {
            resultStr = '';
            input.value = resultStr;
        }
        else if (e.target.innerHTML == 'CE') {
            resultStr = resultStr.slice(0, -1);
            input.value = resultStr;
        }
        else if (e.target.innerHTML == '⅟x') {
            resultStr += '/';
            input.value = resultStr;
        }
        else if (e.target.innerHTML == 'x²') {
            resultStr += '**2';
            input.value = resultStr;
        }
        else if (e.target.innerHTML == '^') {
            resultStr += '**';
            input.value = resultStr;
        }
        else if (e.target.innerHTML == '.') {
            console.log("Entered decimal check");

            if (resultStr.length == 0) {
                resultStr += '0.';
                input.value = resultStr;
            }
            else {
                let parts = resultStr.split(/[\+\-\*\/]/);
                let lastPart = parts[parts.length - 1];

                if (!lastPart.includes('.') && lastPart != '') {
                    resultStr += '.';
                }

                if (lastPart == '') {
                    resultStr += '0.';
                }
                input.value = resultStr;
            }
        }
        else if (e.target.innerHTML == '²√x') {
            try {
                resultStr = eval(Math.sqrt(resultStr));
                if (isNaN(resultStr)) {
                    throw new Error('Invalid input.');
                }
                input.value = resultStr;
                equa_input = '²√' + resultStr;
                getAndUpdate(equa_input, resultStr);
            } catch (error) {
                input.value = 'Error';
                resultStr = "";
            }
        }
        else if (e.target.innerHTML == "Clear History") {
            if (confirm("Do you want really want to clear the list")) {
                console.log('Clearing the storage');
                localStorage.clear();
                update();
            }
        }
        else {
            resultStr += e.target.innerHTML;
            input.value = resultStr;
        }
    })
})

function getAndUpdate(calculation, result) {
    console.log('Updating List...');

    const itemJsonArrayStr = localStorage.getItem('itemsJson') || "[]";
    itemsJsonArray = JSON.parse(itemJsonArrayStr);

    console.log("Input Value:", calculation);
    console.log("Result Value:", result);

    itemsJsonArray.push({ calculation, result });
    localStorage.setItem('itemsJson', JSON.stringify(itemsJsonArray));
    update();
}

function update() {
    const itemJsonArrayStr = localStorage.getItem('itemsJson') || "[]";
    itemsJsonArray = JSON.parse(itemJsonArrayStr);

    let str = "";
    itemsJsonArray.forEach((element, index) => {
        str += `
        <tr>
            <td>${element.calculation}</td>
        </tr>
        <tr>
            <td>${element.result}</td>
        </tr>`;
    });
    tablebody.innerHTML = str;
}

update();
