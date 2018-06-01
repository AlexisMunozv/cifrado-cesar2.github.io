let string = document.getElementById("paraph").value;
let offset = parseInt(document.getElementById("space").value);
let string2 = cipher.encode(offset,string);

let button1 = document.getElementById("encodeButton");
button1.addEventListener("click", () => {
    let callFunctionEncode = window.cipher.encode (offset.value,string.value);
    document.getElementById("text1").value = stringCode;
} ) 







