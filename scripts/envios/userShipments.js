userShipmentsDiv = document.createElement("div");
userShipmentsDiv.id = "userShipments";
userShipmentsDiv.innerHTML = `
<div class="row justify-content-center">
    <div class="col-10" style="background:#283b82; padding: 50px 50px;">
        <div class="row">
        <div class="col-4">
            <p class="outsideP">1. Pendiente</p>
        </div>
        </div>
        <div class="row justify-content-around">
        <div class="col-2"><img src="img/productos/bolas/bolaBeisbol.jpg" class="cardImg"></div>
        <div class="col-2"><img src="img/productos/hoodie/hoodieRosa.jpg" class="cardImg"></div>
        <div class="col-2"><img src="img/productos/raqueta/2raquetas.jpg" class="cardImg"></div>
        <div class="col-2"><img src="img/productos/basketball-ball.jpg" class="cardImg"></div>
        <div class="col-2">
            <br><button class="productButton">Detalles</button><br>
            <p class="outsideP">+2</p>
        </div>
        </div><br>
        <div class="row">
            <div class="col-3">
                <p style="text-align:left; font-size:1.3rem;">Dirección de entrega:
                Bosques de Aragon, 
                57171, Nezahalcoyotl, 
                Mex.</p>
            </div>
            <div class="col-3 offset-md-6">
                <p style="text-align:right; font-size:1.3rem;">Indicaciones adicionales:
                Ninguna</p>
            </div>
        </div>
    </div>
</div><br><br>
`;
document.getElementById("mainBody").appendChild(userShipmentsDiv);