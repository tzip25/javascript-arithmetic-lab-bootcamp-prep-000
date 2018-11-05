var a, b;

function add(a, b) {
return (a + b);
}

function subtract(a, b) {
return (a - b);
}

function multiply(a, b) {
return (a * b);
}

function divide(a, b) {
return (a / b);
}

function inc(a) {
return (a += 1);
}

function dec(a) {
return (a -= 1);
}


function makeInt(a, base) {
 var parsed = parseInt(a, 10);
 if (isNaN(parsed)) { return `true` }
 else { return parsed }
}

function preserveDecimal(a) {
  var parsed = parseFloat(a);
  if (isNaN(parsed)) { return `true` }
  else { return parsed; }
}

