let hora = document.querySelector('#hora')
let fliyer = document.querySelector('#fliyer')
let btnFliyer = document.querySelector('#btnFliyer')
let logoAlmacen = document.querySelector('.logoAlmacen')
let dia = new Date();
let now = dia.getHours()

btnFliyer.addEventListener("click", () => {
fliyer.classList.remove('show')
fliyer.classList.remove('d-block')
fliyer.classList.add('d-none')
})

if (now > 13  && now < 20){
    hora.setAttribute('src', '../img/unReflejoAzulDeInvierno/almacen_dia.jpg');
    logoAlmacen.setAttribute("src", "../img/unReflejoAzulDeInvierno/logoAlmacen.png")
}
else{
    hora.setAttribute('src', '../img/unReflejoAzulDeInvierno/almacen_noche.jpg')
    logoAlmacen.setAttribute('src', "../img/unReflejoAzulDeInvierno/logoAlmacenBlanco.png")
}

if(now == 13 || now == 20){location.reload}