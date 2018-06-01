let string = document.getElementById("paraph");
let offset = document.getElementById("space");

let button1 = document.getElementById("encodeButton");
button1.addEventListener("click", () => {
    let callFunctionEncode = window.cipher.encode (parseInt(offset.value),string.value);
    document.getElementById("text1").value = callFunctionEncode;
    
} ); 







