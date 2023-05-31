cartEntryDiv = document.createElement("div");
cartEntryDiv.id = "cartEntry";
cartEntryDiv.innerHTML = `
<div class="row">
    <div class="col-1 offset-md-1">
        <img class="d-block w-100" style="border-radius:10%" src="img/productos/hoodie/hoodieRosa.jpg">
    </div><div class="col-10"><div class="row">
    <div class="col-7">
        <p style="text-align:left"><b>Nike</b> Sudadera Rosa</p>
        <div class="row">
            <div class="col-4">
                <button class="productSize" style="width:auto; padding-left:10px; padding-right:10px; height:40px;">Playeras - L</button>
            </div>
            <div class="col-2 offset-md-2 productPriceYellow">$280</div>
        </div>
    </div>
    <div class="col-3" style="color:white; font-size:1.12rem;">
        <br><div class="row">
        <div class="col-4"><input type="number" style="width:2rem;" max="13" min="1" value="2" style="offset:10px"> / 13</div>
        <div class="productPriceYellow col-4">$560</div>
        <div class="col-3"><button class="productSize" style="width:auto; padding-left:10px; padding-right:10px; height:40px;">Quitar</button></div></div>
    </div>
          </div></div>
</div><br>
`;
document.getElementById("cartForm").appendChild(cartEntryDiv);