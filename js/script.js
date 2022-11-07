let output = document.getElementById("screen");

function show(num){
    output.value += num;
}

function calculation(){
    try{
        output.value = eval(output.value);
    }
    catch{
        alert("invalid !")
    }
}

function clr(){
    output.value = "";
}

function del(){
    output.value = output.value.slice(0,-1);
}