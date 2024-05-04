//declaration variables
textNumbers = 0;
textText = "";
operator = "";

//function to update the text
function updateText(type, number){
    if(type == "number"){
        textText += number;
    }
    else if(type == "equals"){
        textText = textNumbers.toString();
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
    number = parseInt(textText);

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
            if(number != 0){
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
    updateText('', 0);
}

//function for click on '=' button
function equal(){
    //declaration
    number = parseInt(textText);

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
            if(number != 0){
                textNumbers /= number;
            }
            else{
                textText = "ERROR"
            }
        }
    }

    operator = "";

    updateText('equals', 0)
}

//function to reset everything
function reset(){
    textNumbers = 0;
    textText = "";
    operator = "";

    updateText('', '');
}