productEditDiv = document.createElement("div");
productEditDiv.id = "productEdit";
productEditDiv.innerHTML = `
<div class="row">
    <div class="col-7 offset-md-1">
        <p class="outsideP">Editando producto #27</p>
    </div>
    <div class="col-3">
        <a href="#"><button class="blackSquareButton">Cancelar</button></a>
    </div>
</div>
<div class="row">
    <div class="col-3 offset-md-4">
        <img src="img/productos/goldenBall.jpg" class="d-block w-100">
    </div>
</div>
<form action="" method="POST">
    <div class="row">
        <div class="col-4 offset-md-1" style="text-align:right;">
            <label for="Nombre">Nombre</label><br>
            <input type="text" name="Nombre" placeholder="Balón Dorado"><br>
            <label for="Estatus">Estatus</label><br>
            <div class="radio-tool">
            <input type="radio" name="Estatus" id="Disponible" value="disponible" checked>
            <label for="Disponible">Disponible</label>
            <input type="radio" name="Estatus" id="NoDisponible" value="no_disponible">
            <label for="NoDisponible">No Disponible</label><br>
            </div>
            <label for="Imágen">Imágen</label><br>
            <button type="file" name="Imágen">Agregar Archivo</button><br>
            <label for="Descripción">Descripción</label><br>
            <input type="text" name="Descripción" height="4rem"><br>
            <label for="Tallas Disponibles"">Tallas Disponibles</label><br>
            <div class="DivDeTallas">
            <input type="text" name="t:1-1" clasS="t1" placeholder="XS" size="2">   <input type="text" name="t:1-2" clasS="t1" placeholder="Xtra Small"><br>
            <input type="text" name="t:2-1" clasS="t2" placeholder="S" size="2">   <input type="text" name="t:2-2" clasS="t1" placeholder="Small"><br>
            <input type="text" name="t:3-1" clasS="t3" placeholder="M" size="2">   <input type="text" name="t:3-2" clasS="t1" placeholder="Medium"><br>
            <input type="text" name="t:4-1" clasS="t4" placeholder="L" size="2">   <input type="text" name="t:4-2" clasS="t1" placeholder="Large"><br>
            </div>
        </div>
        <div class="col-4 offset-md-1" style="text-align:left;">
            <label for="Marca">Marca</label><br>
            <select name="Marca" style="font-size:1.2rem;">
                <option value="adidas">Adidas</option>
                <option value="nike">Nike</option>
                <option value="puma">Puma</option>
                <option value="vans">Vans</option>
            </select><br>
            <label for="PrecioPublico">Precio público</label><br>
            <input type="number" name="PrecioPublico" min="0" placeholder="180"><br>
            <label for="PrecioProveedor">Precio del proveedor</label><br>
            <input type="number" name="PrecioProveedor" min="0" placeholder="110"><br>
            <label for="Promocion">Promoción</label><br>
            <input type="number" name="Promocion" id="PromocionNumero" width="0.5rem" placeholder="20">%<input type="checkbox" id="PromocionBandera" value="PromocionBandera"><br>
            <label for="DisponibilidadDeTallas">Disponibilidad de Tallas</label><br>
            <input type="number" name="t:1-3" clasS="t1" min="0" placeholder="11"><br>
            <input type="number" name="t:2-3" clasS="t2" min="0" placeholder="17"><br>
            <input type="number" name="t:3-3" clasS="t3" min="0" placeholder="7"><br>
            <input type="number" name="t:4-3" clasS="t4" min="0" placeholder="8"><br>
            <button type="submit" class="blackSquareButton">Guardar</button>
        </div>
    </div>
</form>
`;
document.getElementById("mainBody").appendChild(productEditDiv);