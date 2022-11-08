/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/*
const datos = document.getElementById("aceptar")
var apuesta = 0
    datos.addEventListener("click", () =>{
   var apuesta1 = document.getElementById("apostar").value
    apuesta = apuesta1;

    })
    
*/



/*
const lanzar = document.getElementById('aceptarSub')
lanzar.addEventListener('click', () => {

    let name = document.getElementById("name").value
    let bet = document.getElementById("apostar").value
    let sel = document.getElementById("main-select").value

    let elegir
    let uno = 1
    let total = 0
    const local = parseInt(uno) + (Math.random() * 2);

    elegir = confirm("COMENZAR")
    while (elegir == true) {
        const local = parseInt(uno) + (Math.random() * 2);
        if (local == 1 && sel == 1) {
            alert("Elegiste " + sel + " y ha salido cara," + name);
            total = total + bet * 2;
            alert("Has ganado " + bet * 2);
        } else if (local == 1 && sel == 2) {
            alert("Elegiste " + sel + " y ha salido cara," + name);
            total = total - bet;
            alert("Has perdido " + bet);
        } else if (local == 2 && sel == 2) {
            alert("Elegiste " + sel + " y ha salido sello," + name);
            total = total + bet * 2;
            alert("Has ganado " + bet * 2);
        } else if (local == 2 && sel == 1) {
            alert("Elegiste " + sel + " y ha salido sello," + name);
            total = total - bet;
            alert("Has perdido " + bet + "," + name);
        } else {
            alert("Esa no es una opcion valida!");
        }

        let cont;
        cont = 0;
        cont = cont + 1;
        let opcion

        opcion = window.confirm("Desea continuar jugando?");
    }   

    if (opcion == true) {
        alert("Has jugado un total de " + cont + " vez y tu dinero total es $" + total);
    } else {
        alert("Has jugado un total de " + cont + " veces y tu dinero total es $" + total);
    }
})
        */
const lanzar = document.getElementById('aceptarSub');
lanzar.addEventListener('click', () => {

    let choose = document.getElementById('main-select').value
    let bet = document.getElementById('apostar').value
    let year = document.getElementById('year').value
    let name = document.getElementById('name').value

    let total = 0;
    let elegir;
    let cont = 0;

if (year >= 18)
{
    elegir = confirm("COMENZAR")
    while (elegir == true) {
        const local = Math.floor(Math.random() *2) +1;
        if (local == 1 && choose == 1) {
            alert("Elegiste " + choose + " y ha salido sello");
            total = total - choose;
            alert("Has perdido " + total + "," +name);
        }
        else if (choose == 2 && local == 2) {
            alert("Elegiste " + choose + " y ha salido sello");
            total = total + (bet * 2)
            alert("Has ganado " + total + "," +name)
        }
        else {
            alert("El computador eligio "+local)
            alert("Has perdido")
            total=total-(bet)
            alert(`Usted ha perdido, acumulo: `+total)
        }

        cont = cont + 1;
        elegir = window.confirm("Desea seguir jugando? "+name)
    }
    alert(name +"Has jugado un total de " + cont + " veces y tu dinero total es $" + total);
}
else(
    alert(name+", Tiene que ser mayor de edad, no podra jugar")
)
})

/*
 
 
 
//var elige = document.getElementById("carasello").value
let uno = 1
const local = parseInt(uno)+(Math.random() * 2);

if (parseInt(local) == 1) {
let source = "../img/img1.png";
document.getElementById("Img").setAttribute('src', source);                  
}
else if (parseInt(local) == 2) {
let source = "../img/img0.png";
document.getElementById("Img").setAttribute('src', source);
}
else if ( )   
})*/



/* let apuesta, total;
 let cont;
 
 total=0;
 cont=0;
 
 do {

     apuesta = document.getElementById("apostar")
     apuesta = parseFloat(apuesta)

     elige = document.getElementById("carasello")

     if (local==0 && elige.equalsIgnoreCase("cara")) {
         alert("Elegiste "+elige+" y ha salido cara");
         total=total+apuesta*2;
         alert("Has ganado "+apuesta*2);
     }else if (local==0 && elige.equalsIgnoreCase("sello")) {
         alert("Elegiste "+elige+" y ha salido cara");
         total=total-apuesta;
         Salert("Has perdido "+apuesta);
     }else if (local==1 && elige.equalsIgnoreCase("sello")) {
         alert("Elegiste "+elige+" y ha salido sello");
         total=total+apuesta*2;
         alert("Has ganado "+apuesta*2);
     }else if (local==1 && elige.equalsIgnoreCase("cara")) {
         alert("Elegiste "+elige+" y ha salido sello");
         total=total-apuesta;
         alert("Has perdido "+apuesta);
     }else{
         alert("Esa no es una opcion valida!");
     }

     cont=cont+1;

     opcion = prompt("Desea continuar jugando?");
    

 } while (opcion.equalsIgnoreCase("si"));
 
 if (cont==1) {
     alert("Has jugado un total de "+cont+" vez y tu dinero total es $"+total);
 }else{
     alert("Has jugado un total de "+cont+" veces y tu dinero total es $"+total);
 }   
 
 
 
*/
/*
 function CaraSello(){          
 do {           
 let apuesta, total;
 let cont;
 
 total = 0;
 cont = 0;
 
 const nombre = document.getElementById("name").value;
 const elige = document.getElementById("carasello").value;
 const moneda = Math.random()*2;
 
 if (moneda === 0 && elige.equalsIgnoreCase("cara")) {
 alert("Elegiste " + elige + " y ha salido cara");
 total = total + apuesta * 2;
 alert("Has ganado " + apuesta * 2);
 } else if (moneda === 0 && elige.equalsIgnoreCase("sello")) {
 alert("Elegiste " + elige + " y ha salido cara");
 total = total - apuesta;
 alert("Has perdido " + apuesta);
 } else if (moneda === 1 && elige.equalsIgnoreCase("sello")) {
 alert("Elegiste " + elige + " y ha salido sello");
 total = total + apuesta * 2;
 alert("Has ganado " + apuesta * 2);
 } else if (moneda === 1 && elige.equalsIgnoreCase("cara")) {
 alert("Elegiste " + elige + " y ha salido sello");
 total = total - apuesta;
 alert("Has perdido " + apuesta);
 } else {
 alert("Esa no es una opcion valida!");
 }
 
 cont = cont + 1;
 
 alert("Desea continuar jugando?");
 let opcion;
 } while (opcion.equalsIgnoreCase("si"));
 if (cont === 1) {
 alert("Has jugado un total de " + cont + " vez y tu dinero total es $" + total);
 } else {
 alert("Has jugado un total de " + cont + " veces y tu dinero total es $" + total);
 }
 }
 
 CaraSello();*/