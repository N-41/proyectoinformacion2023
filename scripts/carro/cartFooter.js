cartFooterDiv = document.createElement("div");
cartFooterDiv.id = "cartFooter";
cartFooterDiv.innerHTML = `
<div class="row">
    <div class="col-2 offset-md-8"><hr></div>
</div> 
<div class="row">
    <div class="col-4 offset-md-1">
        <button class="productButton" type="submit">Proceder al pago</button>    
    </div>
    <div class="col-2 offset-md-3 productPriceYellow">$1240</div>
    
</div>

`;
document.getElementById("cartForm").appendChild(cartFooterDiv);