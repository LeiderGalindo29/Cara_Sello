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



    const lanzar = document.getElementById("throw")   
    lanzar.addEventListener('click', () => {
                
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
            })/*
        let apuesta, total;
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
    }
    );
   5*/
	    

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