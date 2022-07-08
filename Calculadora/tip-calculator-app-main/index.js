
function porcent_5(value) {
    let Cuenta_total = document.getElementById("total_cuenta").value;
    
    document.getElementById("total").value = (value*Cuenta_total/100).toFixed(2);
}

    
function amoud (value) {
    let Cuenta_total = document.getElementById("total_cuenta").value;
    let personas = document.getElementById("participantes").value;

    document.getElementById("amout").value = ((value*Cuenta_total)/100*personas).toFixed(2);
}