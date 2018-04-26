function fToM(){

  var measure = parseInt(document.getElementById("value1").value);

  var meters = measure * 0.3048;
  var message = measure + ' feet converts to ' + meters + ' meters.';
  console.log(message);
  document.getElementbyId("resultsentence").innerHTML = message;

}

function inchesToCm(){

  var measure = parseInt(document.getElementById("value1").value);

  var centimeters = measure * 2.54;
  var message2 = measure + ' inches converts to ' + centimeters + ' centimeters.';
  console.log(message2);
  document.getElementbyId("resultsentence").innerHTML = message2;

}

function yardsToM(){

  var measure = parseInt(document.getElementById("value1").value);

  var yardmeters = measure * 0.9144;
  var message3 = measure + ' yard converts to ' + yardmeters + ' meters.';
  console.log(message3);
  document.getElementbyId("resultsentence").innerHTML = message3;

}

function MilesToKm(){

  var measure = parseInt(document.getElementById("value1").value);

  var km = measure * 1.60934;
  var message4 = measure + ' mile converts to ' + km + ' kilometers.';
  console.log(message4);
  document.getElementbyId("resultsentence").innerHTML = message4;

}