paymentDiv = document.createElement("div");
paymentDiv.id = "mainpayment";
paymentDiv.innerHTML = `
<div class="row">
    <div class="col-11 offset-md-1">
    <p class="outsideP">Elige tu forma de pago</p>
    </div>
</div>
<div class="row">
    <div class="col-4 offset-md-1" style="text-align:right">
        <button id="cartera" class="productButton Wide" style="font-size:2.29rem;" onclick="selectPay(this.id);">Cartera</button>
    </div>
    <div class="col-4 offset-md-2">
        <button id="paypal" class="productButton Wide" style="background:white;" onclick="selectPay(this.id);"><img src="img/marcas/paypal.png" style="height:55px; width:auto;"></button>
    </div>
</div><br>
<form action="" method="POST">
<div class="row">
    <div class="col-5 text-right">
        <p>Dirección de entrega</p>
        <a href="https://goo.gl/maps/DDAvHSRUTG9Vknhv9"><p style="color:white; font-weight:none; font-size:0.92rem; text-decoration:underline;">Puedes copiar tu dirección desde Google Maps</p></a>
        <input type="text" style="text-align: right;">
    </div>
    <div class="col-5 offset-md-2 text-left">
        <p>Indicaciones adicionales</p>
        <textarea type="text" style="height:4.3rem;"></textarea>
    </div>
</div><br>
<div class="row">
    <div class="col-6 offset-md-3 text-center">
        <p>Estos campos no se pueden editar después de confirmar el pago, a menos que nos contactes por correo o teléfono para editarlo antes de que se entregue</p>
        <div id="submitDiv"></div>
    </div>
</div>
</form>
`;
document.getElementById("mainBody").appendChild(paymentDiv);

function selectPay(id){
    switch(id){
    case "cartera":
        document.getElementById("cartera").className = "productButton Wide pSelected";
        document.getElementById("paypal").className = "productButton Wide";
        document.getElementById("submitDiv").innerHTML = `
        <button type="submit" class="productButton">Confirmar pago</button>
        `; break;
    case "paypal":
        document.getElementById("cartera").className = "productButton Wide";
        document.getElementById("paypal").className = "productButton Wide pSelected";
        document.getElementById("submitDiv").innerHTML = `
        <button style="background:white;" class="productButton">Abrir Paypal</button>
        `; break;
    default:
        document.getElementById("cartera").className = "productButton Wide";
        document.getElementById("paypal").className = "productButton Wide"; 
        document.getElementById("submitDiv").innerHTML = "";
        break;
    }
}