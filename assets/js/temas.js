const dark = document.getElementById('dark')
const light = document.getElementById('light')
let tema = temaActual()
if(!tema){
  localStorage.setItem("tema","light")
  temaNuevo(temaActual())
}
else
{
  temaNuevo(temaActual())
}

dark.addEventListener('click', ()=>{
  if (!tema) {
    localStorage.setItem("tema","dark")
    temaNuevo(temaActual())
  } 
  else {
    temaRemove(temaActual())
    temaNuevo("dark")
  }
  tema = temaActual()
});

light.addEventListener('click', ()=>{
  if (!tema) {
    localStorage.setItem("tema","light")
    temaNuevo(temaActual())
  } 
  else {
    temaRemove(temaActual())
    temaNuevo("light")
  }
  tema = temaActual()
});

function temaActual()
{
  return localStorage.getItem("tema")
}
function temaRemove(temaActual)
{
  document.getElementById('container').classList.remove(temaActual)
}
function temaNuevo(temaNuevo)
{
  document.getElementById('container').classList.add(temaNuevo)
  localStorage.setItem("tema",temaNuevo)
}