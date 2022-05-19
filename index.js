
document.querySelector("button").addEventListener("click", rollDice);

function rollDice(){

    const dice1 = Math.floor(Math.random() * 6 + 1);
    const dice2 = Math.floor(Math.random() * 6 + 1);
    const dice3 = Math.floor(Math.random() * 6 + 1);
   // alert(randomNumber);

    document.getElementById("member-1").innerText = dice1;
  //  document.getElementById("member-1").style.backgroundColor = "green";

    document.getElementById("member-2").innerText = dice2;
  //  document.getElementById("member-2").style.backgroundColor = "yellow";

    document.getElementById("member-3").innerText = dice3;
  //  document.getElementById("member-3").style.backgroundColor = "red";
    

 if (dice1 > dice2 && dice1 > dice3) {
    document.querySelector("h1").innerText = "Winner - A";
 }else if (dice2 > dice1 && dice2 > dice3) {
    document.querySelector("h1").innerText = "Winner - B";
 }else if (dice3 > dice1 && dice3 > dice2) {
    document.querySelector("h1").innerText = "Winner - C";
 }else{
    document.querySelector("h1").innerText = "Draw";
 }


 if (dice1 > dice2 && dice1 > dice3) {
     document.querySelector("#member-1").style.backgroundColor = "green";
 }else if (dice1 < dice2 && dice1 < dice3) {
    document.querySelector("#member-1").style.backgroundColor = "red";
 }else{
    document.querySelector("#member-1").style.backgroundColor = "yellow";
 }

 if (dice2 > dice1 && dice2 > dice3) {
    document.querySelector("#member-2").style.backgroundColor = "green";
}else if (dice2 < dice1 && dice2 < dice3) {
   document.querySelector("#member-2").style.backgroundColor = "red";
}else{
   document.querySelector("#member-2").style.backgroundColor = "yellow";
}

if (dice3 > dice2 && dice3 > dice1) {
    document.querySelector("#member-3").style.backgroundColor = "green";
}else if (dice3 < dice2 && dice3 < dice1) {
   document.querySelector("#member-3").style.backgroundColor = "red";
}else{
   document.querySelector("#member-3").style.backgroundColor = "yellow";
}

}