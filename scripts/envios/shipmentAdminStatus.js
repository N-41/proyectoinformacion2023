shipmentAdminStatusDiv = document.createElement("div");
shipmentAdminStatusDiv.id = "shipmentAdminStatusDiv";
shipmentAdminStatusDiv.innerHTML = `
<select name="EstatusSelect">
	<option selected>Cancelado</option>
	<option>Pendiente</option>
	<option>Enviado</option>
</select>
`;
document.getElementById("Estatus").appendChild(shipmentAdminStatusDiv);