const botones = document.getElementById('caja')
const numeros = document.getElementById('letrasB')
const letras = document.getElementById('letrasA')

// botones.addEventListener('click',(event)=>{
//   console.log('omg', event);
// })
let array = ['1-A','2-B','3-C','4-D','5-E','6-F','7-G','8-H','9-I','0-I']
let arrayL = ['A','B','C','D','E','F','G','H','I','J']
let centinela = 0
function tecla (input){ 
  if (centinela<10) {
    if(input-1==centinela){
      centinela++
      letras.innerHTML=letras.innerHTML+arrayL[centinela-1] 
    } else {
      if(centinela>=input){
        swal("Este boton ya lo oprimiste L", "Oprime el siguiente boton", "warning");
      } else {
        impresion(centinela, input)
      }    
    }
  } else {
    if(input+9==centinela){
      centinela++
      if(input == 10){
        numeros.innerHTML=numeros.innerHTML+0
      } else {
        numeros.innerHTML=numeros.innerHTML+input
      }      
      if (input==10) {
        swal("Good job!", "terminaste!", "success");
      }
    } else {
      if(centinela>=input){
        swal("Este boton ya lo oprimiste N", "Oprime el siguiente boton", "warning");
      } else {
        impresion(centinela-9, input)
      }    
    }
  }  
}

function impresion(cent, inp){
 let impresion = ''
 for(let i=cent;i<inp-1;i++){
  impresion=impresion+' '+array[i]
 }
 swal("Ten cuidado!", "te faltaron los botones: "+impresion, "error");
}