function quarter(){
  console.log("sent to quarter convert");
  let inputNumber = document.getElementById("convertMoney").value;
  let numberOfQuarters = parseInt((inputNumber * 100) / 25);
  let quarterRemainder = ((inputNumber * 100) % 25);
  document.getElementById("quarters").innerHTML = numberOfQuarters;
  return quarterRemainder;
}

function dime(){
  console.log("sent to dime convert");
  let dimeChangeleft = quarter();
  let numberOfDimes = parseInt(dimeChangeleft / 10);
  let dimeRemainder = dimeChangeleft % 10;
  document.getElementById("dimes").innerHTML = numberOfDimes;
  return dimeRemainder;
}

function nickel(){
  console.log("sent to nickel convert");
  let nickelChangeleft = dime();
  let numberOfNickels = parseInt(nickelChangeleft / 5);
  let nickelRemainder = nickelChangeleft % 5;
  document.getElementById("nickels").innerHTML = numberOfNickels;
  return nickelRemainder;
}

function penny(){
  console.log("sent to penny convert");
  let pennyChangeleft = nickel();
  let numberOfPennies = parseInt(pennyChangeleft / 1);
  document.getElementById("pennies").innerHTML = numberOfPennies;
}
function changeComplete() {
  document.getElementById("completed").innerHTML = "Change has been sorted"
}
function determineChange (){
  console.log("WorkingButton");
  penny();
}

let button = document.getElementById("submit");

button.addEventListener("click", determineChange);