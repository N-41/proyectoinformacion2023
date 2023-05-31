shipmentEntry3Div = document.createElement("div");
shipmentEntry3Div.id = "shipmentEntry3";
shipmentEntry3Div.innerHTML = `
<div class="row">
    <div class="col-1 offset-md-3">
        <img class="d-block w-100" style="border-radius:10%" src="img/productos/goldenBall.jpg">
    </div><div class="col-8"><div class="row">
    <div class="col-10">
        <p style="text-align:left"><b>adidas</b> Balón dorado 68cm</p>
        <div class="row">
            <div class="col-4">
                <button class="productSize" style="width:auto; padding-left:10px; padding-right:10px; height:40px;">Accesorio</button>
                <button class="productSize" style="width:auto; padding-left:10px; padding-right:10px; height:40px;">X 4</button>
            </div>
            <div class="col-1"><button class="productSize" style="width:auto; padding-left:10px; padding-right:10px; height:40px;">Total: </button></div>
            <div class="col-2 offset-md-1 productPriceYellow">$360</div>
        </div>
    </div>
    
          </div></div>
</div><br>
`;
document.getElementById("mainBody").appendChild(shipmentEntry3Div);