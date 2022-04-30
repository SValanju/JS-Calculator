function ClearScreen(){
    document.getElementById("result").value = "";
}

function display(value){
    document.getElementById("result").value += value;
}

function Backspace(){
    var input = document.getElementById("result");
    var ss = input.selectionStart;
    var se = input.selectionEnd;
    var ln = input.value.length;

    input.value = input.value.substring(0, ss-1) + input.value.substring(se, ln);
    input.focus();
    input.selectionStart = ss-1;
    input.selectionEnd = ss-1;
}

function Calculate(){
    var a = document.getElementById("result").value;
    var b = eval(a);
    document.getElementById("result").value = b;
}
