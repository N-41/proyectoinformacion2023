productDiv = document.createElement("div");
productDiv.id = "mainProduct";
productDiv.innerHTML = `
<p />
<div class="row">
    <div class="col-5 offset-md-1 container-fluid">
        <img src="goldenBall.jpg" style="width:95%; height:auto";>
        <p />
        <p style="font-size:1.5rem; text-align:right; margin-right:5%">Descripción</p>
        <p style="text-align:right; margin-right:5%">El veloz murciélago hindú comía feliz cardillo y kiwi.</p>
    </div>
    <div class="col-5">
        <p class="outsideP">Marca</p>
        <p style="text-align:left; font-size:1.2rem">Balon de soccer dorado 58cm</p>
        <p style="text-align:left; font-size:1.5rem">Talla</p>
        <button class="productSize selected"id="xs">XS</button>
        <button class="productSize" id="s">S</button>
        <button class="productSize" id="m">M</button>
        <button class="productSize" id="l">L</button>
        <p />
        <div class="row">
            <div class="col-3 productPrice">
                $180
            </div>
        </div>
        <p />
        <div style="font-size:1.4rem; color:white; font-weight:bold; color:black;">Cantidad: <input type="number" id="ammount" name="ammount" min="1" max="14"> /14</div>
        <p> </p>
        <a href="#"><button class="productButton">Agregar al carrito</button></a>
        <p> </p>
        <a href="index.html"><button class="productButton">Seguir comprando</button></a>
    </div>
</div>
<p></p>
`;
document.getElementById("mainBody").appendChild(productDiv);