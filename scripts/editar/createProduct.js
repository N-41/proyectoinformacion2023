productCreateDiv = document.createElement("div");
productCreateDiv.id = "productCreate";
productCreateDiv.innerHTML = `
<div class="row">
    <div class="col-7 offset-md-1">
        <p class="outsideP">Crear producto</p>
    </div>
    <div class="col-3">
        <a href="#"><button class="blackSquareButton">Cancelar</button></a>
    </div>
</div>
<div class="row justify-content-center">
    <div class="col-3">
        <button class="cardImg" style="font-size:4rem;">+</button>
    </div>
</div>
<form action="" method="POST" id="prodForm">
    <div class="row">
        <div class="col-4 offset-md-1" style="text-align:right;">
            <label for="Nombre">Nombre</label><br>
            <input type="text" name="Nombre"><br>
            <label for="Descripción">Descripción</label><br>
            <textarea type="text" name="Descripción" style="height:5.9rem;"></textarea><br>
            <br>
                <button type="button" class="blackSquareButton" style="background: white; color: black;" data-bs-toggle="modal" data-bs-target="#ModalDeTallas">
                Manejar tallas</button>
            
        </div>
        <div class="col-4 offset-md-1" style="text-align:left;">
            <label for="Marca">Marca</label><br>
            <select name="Marca" style="font-size:1.2rem;">
                <option value="adidas">Adidas</option>
                <option value="nike">Nike</option>
                <option value="puma">Puma</option>
                <option value="vans">Vans</option>
            </select><br>
            <label for="Precio">Precio</label><br>
            <input type="number" name="Precio" min="0"><br>
            <label for="Promocion">Promoción</label><br>
            <input type="number" name="Promocion" id="PromocionNumero" width="0.5rem">%<input type="checkbox" id="PromocionBandera" value="PromocionBandera"><br><br>
            <button type="submit" class="blackSquareButton">Guardar</button>
        </div>
    </div>
    <div class="modal fade" id="ModalDeTallas" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5">Manejar tallas</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <label><input type="checkbox"    id="L">|    L    |</label><input type="number"     id="Lt" disabled><br>
            <label><input type="checkbox"    id="M">|    M    |</label><input type="number"     id="Mt" disabled><br>
            <label><input type="checkbox"    id="S">|    S    |</label><input type="number"     id="St" disabled><br>
            <label><input type="checkbox"   id="XS">|    XS   |</label><input type="number"   id="XSt" disabled><br>
            <label><input type="checkbox" id="Otro">|Sin talla|</label><input type="number" id="Otrot" disabled>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
</form>

`;
document.getElementById("mainBody").appendChild(productCreateDiv);