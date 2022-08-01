var cookie = document.querySelector("#policy")

function load(){
    alert("Loading weather report...")
}

function accept(){
    cookie.remove()
}

function c2f(temp) {
    return Math.round(9 / 5 * temp + 32);
}

function f2c(temp) {
    return Math.round(5 / 9 * (temp - 32));
}

function convert(element){
    for(var i=1; i<9; i++){
        var temp = document.querySelector("#temp" + i);
        var val = parseInt(temp.innerText);
        if(element.value == "°C"){
            temp.innerText = f2c(val);
        } else {
            temp.innerText = c2f(val);
        }
    }
}