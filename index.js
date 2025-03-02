let Name="Ahmed Jalal";
let Rollno="SU92-BSSEM-F23-075";
let Phoneno="1515151515";
let program="Software Engineering";

document.getElementById("hd1").textContent = `hi!`;
document.getElementById("p1").textContent=`Name: ${Name}`;
document.getElementById("p2").textContent=`Roll Number: ${Rollno}`;
document.getElementById("p3").textContent=`Phone Number: ${Phoneno}`;
document.getElementById("p4").textContent=`Degree: ${program}`;
const PI = 3.14;
document.getElementById("submitButton").onclick = function(){
let nameW = document.getElementById("nameID").value;
document.getElementById("hd1").textContent = `hi, ${nameW}!`;
    
    Radius = document.getElementById("RadiusID").value;
    Radius = Number(Radius);
    let circumference = Radius * 2 * PI;
    document.getElementById("p5").textContent=`Circumference is ${circumference}`;

}

let increaseBTN = document.getElementById("increaseBtn");
let decreaseBTN = document.getElementById("decreaseBtn");
let resetBTN = document.getElementById("resetBtn");
let counter = document.getElementById("countID");
let count = 0;

increaseBTN.onclick = function(){
    count++;
    counter.textContent = count;
}
decreaseBTN.onclick = function(){
    count--;
    counter.textContent = count;
}
resetBTN.onclick = function(){
    count = 0;
    counter.textContent = count;
}

const RollButton = document.getElementById("rollBtn");
const roll1 = document.getElementById("roll1");
const roll2 = document.getElementById("roll2");

let rolledNumber1;
let min = 1;
let max = 6;
RollButton.onclick = function(){

    rolledNumber1 = Math.floor(Math.random()*(max-min)+min);
    rolledNumber2 = Math.floor(Math.random()*(max-min)+min);
    roll1.textContent= rolledNumber1;
    roll2.textContent= rolledNumber2;
}

const subscribeChk= document.getElementById("subID");
const BankChk= document.getElementById("BankID");
const JazzCashChk= document.getElementById("JazzCashID");
const EasyPaisaChk= document.getElementById("EasyPaisaID");
const NayaPayChk= document.getElementById("NayaPayID");
const submitBtn = document.getElementById("submit");
let subText = document.getElementById("subDisplay");
let PayText = document.getElementById("PaymentDisplay");

submitBtn.onclick = function(){
if(subscribeChk.checked){
    subText.textContent=`You are Subscribed`;
}
else{
    subText.textContent=`You are Not Subscribed`;
}

if(BankChk.checked){
    PayText.textContent = `Bank is Selected as your payment Method`; 
}
else if(JazzCashChk.checked){
    PayText.textContent = `JazzCash is Selected as your payment Method`; 
}
else if(EasyPaisaChk.checked){
    PayText.textContent = `EasyPaisa is Selected as your payment Method`; 
}
else if(NayaPayChk.checked){
    PayText.textContent = `NayaPay is Selected as your payment Method`; 
}
}
