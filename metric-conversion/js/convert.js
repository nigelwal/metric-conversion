function fToM(){

  var measure = parseInt(document.getElementById("value1").value);

  var meters = measure * 0.3048;
  var message = measure + ' feet converts to ' + meters + ' meters.';
  console.log(message);
  document.getElementbyId("resultsentence").innerHTML = message;

}

function inchesToCm(){

  var measure = parseInt(document.getElementById("value1").value);

  var meters = measure * 0.3048;
  var message2 = measure + ' feet converts to ' + meters + ' meters.';
  console.log(message2);
  document.getElementbyId("resultsentence").innerHTML = message2;

}

function yardsToM(){

  var measure = parseInt(document.getElementById("value1").value);

  var meters = measure * 0.3048;
  var message3 = measure + ' feet converts to ' + meters + ' meters.';
  console.log(message3);
  document.getElementbyId("resultsentence").innerHTML = message3;

}

function MilesToKm(){

  var measure = parseInt(document.getElementById("value1").value);

  var meters = measure * 0.3048;
  var message4 = measure + ' feet converts to ' + meters + ' meters.';
  console.log(message4);
  document.getElementbyId("resultsentence").innerHTML = message4;

}