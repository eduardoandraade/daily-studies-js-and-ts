
 function calcularVelocidades() { 
    const car1 = document.getElementById("car1");
    const car2 = document.getElementById("car2");
    const speed1 = document.getElementById("speed1").value;
    const speed2 = document.getElementById("speed2").value;
    let msg;

    if (speed1 > speed2) {
        msg = "Carro 01 é mais rápido!";
    } else if (speed2 > speed1) {
        msg = "Carro 02 é mais rápido!";
    } else {
        msg = "Os dois carros tem a mesma velocidade!";
    }

    document.getElementById("msg").innerHTML = msg;
    
} 



