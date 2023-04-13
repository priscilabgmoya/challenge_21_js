/**
 * Realizar un programa que dada la vida de un personaje, realice una accion:
   - si la vida esta entre 0 y 20 que el personaje huya (escribir)
   - si la vida esta entre 21 y 50 que el personaje se ponga en modo defensivo.
   - si la vida esta entre 51 y 80 que el personaje se ponga en modo moderado.
   - si la vida esta entre 81 y 100 que el personaje se ponga en modo ofensivo.
  a) resolver sin conectores lógicos
 */

const acciones_personaje = ["HUYA", "MODO DEFENSIVO", "MODO MODERADO", "MODO OFENSIVO"];

let vida_personaje = parseInt(prompt('Ingrese vida del personaje'));

if(! isNaN(vida_personaje)){
if(vida_personaje >0 ){
    if (vida_personaje <= 20){
        alert(`ACCION: ${acciones_personaje[0]}`);
    }else if(vida_personaje >= 21 ){
        if(vida_personaje <= 50){
            alert(`ACCION: ${acciones_personaje[1]}`);
        }
    }else if(vida_personaje >= 51){
        if(vida_personaje <=80){
            alert(`ACCION: ${acciones_personaje[2]}`);
        }
    }else if (vida_personaje >=81){
        if(vida_personaje <=100){
            alert(`ACCION: ${acciones_personaje[3]}`);
        }else{
            alert('Ingrese una vida menor a cien');
        }
    }
}else{
    alert('Ingrese una vida mayor a cero');
}
}else{
    alert('ingrese una vida correcta');
}