//declaration variables
let textNumbers = 0.0;
let textText = "";
let operator = "";

//function to update the text
function updateText(type, number){
    if(type == "number"){
        textText += number;
    }
    else if(type == "equals"){
        textText = textNumbers.toString();
    }
    else if(type == "point"){
        textText += ".";
    }
    else if(type == "minus"){
        textText += "-"
    }

    if(textText != ""){
        document.getElementById('text').innerHTML = textText;
    }
    else{
        document.getElementById('text').innerHTML = "0";
    }
}

//function to execute operators
function changeOperator(chosenOperator){
    //declaration
    number = parseFloat(textText);

    //check if operator has been selected before
    if(operator != "" && textText != "0"){
        if(operator == "add"){
            textNumbers += number;
        }
        else if(operator == "subtract"){
            textNumbers -= number;
        }
        else if(operator == "multiply"){
            textNumbers *= number;
        }
        else{
            if(number != 0.0){
                textNumbers /= number;
            }
            else{
                textText = "ERROR"
            }
        }
    }
    else{
        textNumbers = number;
    }

    operator = chosenOperator;
    textText = "";
    updateText('', 0.0);
}

//function for click on '=' button
function equal(){
    //declaration
    number = parseFloat(textText);

    //check if operator has been selected before
    if(operator != ""){
        if(operator == "add"){
            textNumbers += number;
        }
        else if(operator == "subtract"){
            textNumbers -= number;
        }
        else if(operator == "multiply"){
            textNumbers *= number;
        }
        else{
            if(number != 0.0){
                textNumbers /= number;
            }
            else{
                textText = "ERROR"
            }
        }
    }

    operator = "";

    updateText('equals', 0.0)
}

//function to reset everything
function reset(){
    textNumbers = 0.0;
    textText = "";
    operator = "";

    updateText('', '');
}