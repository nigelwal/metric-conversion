//This function is for converting foot to miles
function fToM(){

  var measure = parseInt(document.getElementById("value1").value);

  //This variable carries out the calculation for foot to miles
  var meters = measure * 0.3048;
  var message = measure + ' feet converts to ' + meters + ' meters.';
  console.log(message);
  document.getElementById("resultsentence").innerHTML = message;

}

//This function is for converting inches to centimeters
function inchesToCm(){

  var measure = parseInt(document.getElementById("value1").value);

   //This variable carries out the calculation for inches to centimeters
  var centimeters = measure * 2.54;
  var message2 = measure + ' inches converts to ' + centimeters + ' centimeters.';
  console.log(message2);
  document.getElementById("resultsentence").innerHTML = message2;

}

//This function is for converting yards to meters
function yardsToM(){

  var measure = parseInt(document.getElementById("value1").value);

  //This variable carries out the calculation for yards to meters
  var yardmeters = measure * 0.9144;
  var message3 = measure + ' yard converts to ' + yardmeters + ' meters.';
  console.log(message3);
  document.getElementById("resultsentence").innerHTML = message3;

}

//This function is for converting miles to kilometers
function MilesToKm(){

  var measure = parseInt(document.getElementById("value1").value);

 //This variable carries out the calculation for miles to kilometers
  var km = measure * 1.60934;
  var message4 = measure + ' mile converts to ' + km + ' kilometers.';
  console.log(message4);
  document.getElementById("resultsentence").innerHTML = message4;

}