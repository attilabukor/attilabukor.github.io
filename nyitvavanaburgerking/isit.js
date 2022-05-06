function isItOpen() {
  return new Date().getHours() >= 8;
}

document.getElementById("answer").innerHTML = isItOpen() ? "IGEN" : "NEM";
