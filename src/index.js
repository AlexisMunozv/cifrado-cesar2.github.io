let string = document.getElementById("paraph");
let offset = document.getElementById("space");

let button1 = document.getElementById("encodeButton");
button1.addEventListener("click", () => {
    let callFunctionEncode = window.cipher.encode (parseInt(offset.value),string.value);
    document.getElementById("text1").value = callFunctionEncode;
} ); 

let button2 = document.getElementById("decodeButton");
button2.addEventListener("click", () => {
    let callFunctionDecode = window.cipher.decode (parseInt(offset.value), string.value);
    document.getElementById("text2").value = callFunctionDecode;
} );






