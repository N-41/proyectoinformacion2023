userShipments2Div = document.createElement("div");
userShipments2Div.id = "userShipments2";
userShipments2Div.innerHTML = `
<div class="row justify-content-center">
    <div class="col-10" style="background:#283b82; padding: 50px 50px;">
        <div class="row">
        <div class="col-4">
            <p class="outsideP">2. Cancelado</p>
        </div>
        </div>
        <div class="row justify-content-around">
        <div class="col-2"><img src="img/productos/kayakPaddle.jpg" class="cardImg"></div>
        <div class="col-2"><img src="img/productos/goldenBall.jpg" class="cardImg"></div>
        <div class="col-2"></div>
        <div class="col-2"></div>
        <div class="col-2">
            <br><button class="productButton">Detalles</button><br>
            <p class="outsideP"></p>
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
document.getElementById("mainBody").appendChild(userShipments2Div);