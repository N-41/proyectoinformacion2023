shipmentFooter1Div = document.createElement("div");
shipmentFooter1Div.id = "mainshipmentFooter1";
shipmentFooter1Div.innerHTML = `
<div class="row">
    <div class="col-1 offset-md-3">
        <label class="outsideP" style="font-weight:normal;">Estátus: </label>
        <span id="Estatus" class="outsideP" style="color:white; font-weight:normal;"></span>
    </div>
    <div class="col-8">
        <div class="row">
            <div class="col-10">
                <div class="row">
                    <div class="col-2 offset-md-6"><hr></div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-10">
                <div class="row">
                    <div class="col-3 offset-md-5 productPriceYellow">$1240</div>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="row">
    <div class="col-3 offset-md-3">
        <p style="text-align:left;">Alejandro Blanco Figueroa<br>
        Tel: 55 98 76 54 32</p>
    </div>
    <div class="col-6">
        <div class="row"><div class="col-5">
        <p style="text-align:right;">Indicaciones adicionales:<br>
        Ninguna
        </div></div>
    </div>
</div>
<div class="row">
    <div class="col-3 offset-md-3">
        <p style="text-align:left;">Solicitado<br>
        11/02/2023</p>
        
    </div>
    <div class="col-6">
        <div class="row"><div class="col-5">
        <p style="text-align:right;">Entregado<br>
        19/02/2023</p>
        </div></div>
    </div>
</div>
<div class="row">
    <div class="col-7 offset-md-3">
        <p style="text-align:left">Dirección: Bosques de Aragon, 57171 Nezahualcóyotl, Méx.
        </p>
    </div>
</div>
`;
document.getElementById("mainBody").appendChild(shipmentFooter1Div);