function tambah() {
    let input1Value = document.getElementById("input1").value;
    input1Value = parseInt(input1Value);
    let input2Value = document.getElementById("input2").value;
    input2Value = parseInt(input2Value);
    let inputan = input1Value + input2Value;
    document.getElementById("hasil").innerHTML = `Hasil: ${inputan}`;
  }

  function kurang() {
    let input1Value = document.getElementById("input1").value;
    input1Value = parseInt(input1Value);
    let input2Value = document.getElementById("input2").value;
    input2Value = parseInt(input2Value);
    let inputan = input1Value - input2Value;
    document.getElementById("hasil").innerHTML = `Hasil: ${inputan}`;
  }

  function kali() {
    let input1Value = document.getElementById("input1").value;
    input1Value = parseInt(input1Value);
    let input2Value = document.getElementById("input2").value;
    input2Value = parseInt(input2Value);
    let inputan = input1Value * input2Value;
    document.getElementById("hasil").innerHTML = `Hasil: ${inputan}`;
  }
  function bagi() {
    let input1Value = document.getElementById("input1").value;
    input1Value = parseInt(input1Value);
    let input2Value = document.getElementById("input2").value;
    input2Value = parseInt(input2Value);
    let inputan = input1Value / input2Value;
    document.getElementById("hasil").innerHTML = `Hasil: ${inputan}`;
  }