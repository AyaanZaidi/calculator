var display = document.getElementById("display")

function abc(a){
    display.value += a;
}

function equal(){
    var b = eval(display.value)
    display.value = b
}
function cancel(){
    display.value = ""
}