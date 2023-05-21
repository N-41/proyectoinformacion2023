cartFooterDiv = document.createElement("div");
cartFooterDiv.id = "cartFooter";
cartFooterDiv.innerHTML = `
<div class="row justify-content-center">
    <div class="col-2 offset-md-5"><hr>
    <div class="col-4"></div>
</div> 
<div class="row justify-content-center">
    <div class="col-4">
        <button class="productButton" type="submit">Proceder al pago</button>    
    </div>
    <div class="col-2 offset-md-3 productPriceYellow">???</div>
    <div class="col-2" />
</div>

`;
document.getElementById("cartForm").appendChild(cartFooterDiv);