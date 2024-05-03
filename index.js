function sub() {
  var m1 = Number(document.getElementById("value1").value);
  var m2 = Number(document.getElementById("value2").value);
  var m3 = Number(document.getElementById("value3").value);
  var m4 = Number(document.getElementById("value4").value);
  var m5 = Number(document.getElementById("value5").value);

  var add = m1 + m2 + m3 + m4 + m5;

  document.getElementById("bg").style.backgroundColor = "orange";

  var result = (add / 500) * 100;

  document.getElementById("result").innerHTML = "Percentage :" + result + "%";
}
