function ConfirmarCompra(){
    console.log('Probasodjasd')
    document.getElementById('detallesCompra').style.display='none'
    document.getElementById('confirmarCompra').style.display='block'
}

function regresarConfirmacion(){
    document.getElementById('detallesCompra').style.display='block'
    document.getElementById('confirmarCompra').style.display='none'
}

function inicioSesion(){
    document.getElementById('InicioSesion').style.display='block'
    document.getElementById('Landing-page').style.display='none'
}

function regresoLanding(){
    document.getElementById('InicioSesion').style.display='none'
    document.getElementById('Landing-page').style.display='block'
}