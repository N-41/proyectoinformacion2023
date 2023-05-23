shipmentFilterDiv = document.createElement("div");
shipmentFilterDiv.id = "shipmentFilter";
shipmentFilterDiv.innerHTML = `
<div class="row">
    <div class="col-2 offset-md-1">
        <p class="outsideP">Filtrar por:</p>
    </div>
    <div class="col-2">
        <button class="productButton white" id="entregado" onclick="entregado();">Entregado</button>
    </div>
    <div class="col-2">
        <button class="productButton white" id="pendiente" onclick="pendiente()">Pendiente</button>
    </div>
    <div class="col-2">
        <button class="productButton white" id="cancelado" onclick="cancelado()">Cancelado</button>
    </div>
</div>
`;
document.getElementById("mainBody").appendChild(shipmentFilterDiv);

