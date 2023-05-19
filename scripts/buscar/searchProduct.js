browseProductDiv = document.createElement("div");
browseProductDiv.id = "browseProduct";
browseProductDiv.innerHTML = `
<form action="" method="POST" style="font-size:1.12rem;" target="buscarProducto.html">
    <div class="row">
        <div class="col-2 offset-md-2 text-center">
            <label style="font-weight:bold;">Productos</label><br><br>
            <button type="submit" style="border: 1px; margin-left:none;">Buscar</button>
        </div>
        <div class="col-2 text-center">
            <input name="Nombre" type="text" style="font-size:1.12rem; margin-bottom:0.12rem" placeholder="Nombre"><br><br>
            <input name="Marca" type="text" placeholder="Marca">
        </div>
        <div class="col-2 text-center">
            <input name="ID" style="margin-bottom:0.12rem" type="text" placeholder="ID"><br><br>
            <input name="Deporte" type="text" placeholder="Deporte">
        </div>
        <div class="col-2 text-center">
            <label><input name="Promocion" type="checkbox" style="margin:none; font-size:1rem;">Promoción</label><br><br>
            <select name="Estatus" type="text" style="padding:0.2rem 0 0.2rem 0;">
                <option selected>Disponible</option>
                <òption>No disponible</option>
            </select>
        </div
    </div>
</form>
`;
document.getElementById("mainBody").appendChild(browseProductDiv);