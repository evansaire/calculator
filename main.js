// Function History
function getHistory() {
   return document.querySelector('.history-value').innerText;
}
function printHistory(num) {
     document.querySelector('.history-value').innerText = num;
}
printHistory("");
// 
function getOutput(){
    return document.querySelector('.output-value').innerText;
}
function printOutput(num) {
    // condition to clear 
    if (num==""){
        document.querySelector('.output-value').innerText = num;
    }else{
        document.querySelector('.output-value').innerText = getFormattedNumber(num);
    }
}
// this function called in the previous is simply for commas
function getFormattedNumber(num) {
    if(num=="-"){
        return "";
    }
    var n = Number(num);
    var value = n.toLocaleString("en");
    return value;
}
printOutput("")

// Now to Manipulate Numbers

// function to reverse formatted number
function reverseFormattedNumber(num) {
    return Number(num.replace(/,/g,''))
}
// console.log(reverseFormattedNumber(getOutput()));

// Unique Keys
var operators = document.getElementsByClassName("unique");
// Loop through
for (let i = 0; i < operators.length; i++) {
    operators[i].addEventListener("click", function(){
        if(this.id=="clear"){
            printHistory("");
            printOutput("");
        }
        else if(this.id=="backspace"){
           let output = reverseFormattedNumber(getOutput()).toString();
           if(output) {
                output= output.slice(0, -1);
                // alert(output);
               printOutput(output);
           }
        }
        // Other Operators
        else{
            let output = getOutput();
            let history = getHistory();

            if(output==""&&history!=""){
                if(isNaN(history[history.length-1])){
                    history=history.slice(0,-1);
                }
            }
            if(output!="" || history!=""){
                // condition?true:false
                output = output==""? output:reverseFormattedNumber(output);
                history = history+output;
                if(this.id== "="){
                    let result=eval(history);
                    printOutput(result)
                    printHistory("");
                }//other operators that is not =
                else{
                    history=history+this.id;
                    printHistory(history);
                    printOutput("");
                }
            }
        }
    })
    
}
// console.log(operators);
// End  Unique Keys

// for Button Keys
var buttons = document.getElementsByClassName("button");
for (let j = 0; j < buttons.length; j++) {
     buttons[j].addEventListener("click",function (){
        let output = reverseFormattedNumber(getOutput());
            if (output!=NaN) {
                output=output+this.id;
                printOutput(output)
            }
     }) 
}
// console.log(buttons);

