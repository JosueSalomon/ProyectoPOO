function entrarOrden(){
    console.log('funciona')
    document.getElementById('vista-motorista').style.display='block'
    document.getElementById('registro-motoristas').style.display='none'
}

function regresarOrdenes(){
    document.getElementById('vista-motorista').style.display='none'
    document.getElementById('registro-motoristas').style.display='block'
}

function regresoInicio(){
    document.getElementById('readigo-motorista').style.display='block'
    document.getElementById('registro-motoristas').style.display='none'
}

function entrarOrdenes(){
    document.getElementById('readigo-motorista').style.display='none'
    document.getElementById('registro-motoristas').style.display='block'
}