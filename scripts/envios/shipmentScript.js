e = document.getElementById("entregado").className;
p = document.getElementById("pendiente").className;
c = document.getElementById("cancelado").className;

one = document.getElementById("userShipments").display;
two = document.getElementById("userShipments2").display;

function entregado(){
    document.getElementById("entregado").className = "productButton white slct";
    document.getElementById("pendiente").className = "productButton white";
    document.getElementById("cancelado").className = "productButton white";
    document.getElementById("userShipments").style.display = "none";
    document.getElementById("userShipments2").style.display = "none";
}

function pendiente(){
    document.getElementById("entregado").className = "productButton white";
    document.getElementById("pendiente").className = "productButton white slct";
    document.getElementById("cancelado").className = "productButton white";
    document.getElementById("userShipments").style.display = "block";
    document.getElementById("userShipments2").style.display = "none";
}

function cancelado(){
    document.getElementById("entregado").className = "productButton white";
    document.getElementById("pendiente").className = "productButton white";
    document.getElementById("cancelado").className = "productButton white slct";
    document.getElementById("userShipments").style.display = "none";
    document.getElementById("userShipments2").style.display = "block";
}

pendiente();