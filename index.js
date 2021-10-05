const bill_amount = document.querySelector("#bill_amount");
const custom_tip = document.querySelector("#custom-bill-input");
const people = document.querySelector("#number-of-people");
const total_tip = document.querySelector(".tip");

var tip;
var peopleInput = 0;
var custom_tip_amount;

function customTip(){
    custom_tip_amount = parseInt(custom_tip.value);
    // console.log(custom_tip_amount);
}

function reset(){

    document.getElementById("bill_amount").value = "";
    document.getElementById("number-of-people").value = "";
    document.getElementById("final_bill_amount").innerHTML = "$0.00";
    document.getElementById("final-tip-amount").innerHTML = "$0.00";
    document.getElementById("custom-bill-input").value = "";
    buttonClicked.style = "";

    // buttonClicked = '<span/>';
}

let temp = document.getElementsByClassName("tips");
var buttonClicked;
for(let i = 0; i<temp.length; i++){
    temp[i].addEventListener("click",function(){
        buttonClicked = temp[i];
        tip = temp[i].innerHTML;
        tip = tip.slice(0,tip.length-1); 
    });
}

// document.onclick = function(e){
//     if(e.target.className !== "reset-button" && buttonClicked !== '<span/>' && e.target.className !== "input-field"){
//         buttonClicked.focus();
//         console.log(buttonClicked);
//     }
// }

function findTip(){
    let bill = parseInt(bill_amount.value);
    let n_of_p = parseInt(people.value);
    custom_tip_amount = parseInt(custom_tip.value);
    console.log(custom_tip_amount);

    if(n_of_p === 0){
        peopleInput++;
        getValidInput();
    }
    if(n_of_p !== 0 && peopleInput > 0){
        peopleInput = 0;
        document.getElementById("number-of-people").style.borderColor = "hsl(183, 100%, 15%)";
        var elem = document.getElementById("notValid");
        elem.parentNode.removeChild(elem);
    }

    if(custom_tip_amount >= 0 && custom_tip_amount !== undefined){
        tip = custom_tip_amount;
    }

    if(tip >= 0 && n_of_p >= 0 && bill >= 0){
        let total_tip =  ((bill * tip) / 100) * n_of_p;
        let total_amount = bill + total_tip;
        
        document.getElementById("final_bill_amount").innerHTML = "$" + total_amount.toFixed(2);
        document.getElementById("final-tip-amount").innerHTML = "$" + total_tip.toFixed(2);
    }
}


function getValidInput(){
    if(peopleInput === 1){
        document.getElementById("number-of-people").style.borderColor = "red";
        var validInput = document.createElement("h5");
        validInput.id = "notValid"
        validInput.innerHTML = "can't be zero";
        document.getElementById("validInput").appendChild(validInput);
        validInput.style.color = "red";
    }
}

function printBill(){
    return document.getElementById("custom-bill-input").value;
}