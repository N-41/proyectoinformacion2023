cartEntry3Div = document.createElement("div");
cartEntry3Div.id = "cartEntry3";
cartEntry3Div.innerHTML = `
<div class="row">
    <div class="col-1 offset-md-1">
        <img class="d-block w-100" style="border-radius:10%" src="img/productos/goldenBall.jpg">
    </div><div class="col-10"><div class="row">
    <div class="col-7">
        <p style="text-align:left"><b>adidas</b> Balón dorado 68cm</p>
        <div class="row">
            <div class="col-4">
                <button class="productSize" style="width:auto; padding-left:10px; padding-right:10px; height:40px;">Balón</button>
            </div>
            <div class="col-2 offset-md-2 productPriceYellow">$90</div>
        </div>
    </div>
    <div class="col-3" style="color:white; font-size:1.12rem;">
    <br><div class="row">
        <div class="col-4"><input type="number" style="width:2rem;" max="20" min="1" value="4" style="offset:10px"> / 13</div>
        <div class="productPriceYellow col-4">$360</div>
        <div class="col-3"><button class="productSize" style="width:auto; padding-left:10px; padding-right:10px; height:40px;">Quitar</button></div></div>
    </div>
          </div></div>
</div><br>
`;
document.getElementById("cartForm").appendChild(cartEntry3Div);