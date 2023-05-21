productCreateDiv = document.createElement("div");
productCreateDiv.id = "productCreate";
productCreateDiv.innerHTML = `
<div class="row">
    <div class="col-7 offset-md-1">
        <p class="outsideP">Editando producto #27</p>
    </div>
    <div class="col-3">
        <a href="#"><button class="blackSquareButton">Cancelar</button></a>
    </div>
</div>
<div class="row justify-content-center">
    <div class="col-3">
        <button disabled class="cardImg" style="font-size:4rem;">+</button>
    </div>
</div>
<form action="" method="POST">
    <div class="row">
        <div class="col-4 offset-md-1" style="text-align:right;">
            <label for="Nombre">Nombre</label><br>
            <input type="text" name="Nombre"><br>
            <label for="Estatus">Estatus</label><br>
            <label style="font-size:1rem">Disponible</label><br>
            <label for="Imágen">Imágen</label><br>
            <button type="file" name="Imágen">Agregar Archivo</button><br>
            <label for="Descripción">Descripción</label><br>
            <input type="text" name="Descripción"><br>
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
            <label for="PrecioPublico">Precio público</label><br>
            <input type="number" name="PrecioPublico" min="0"><br>
            <label for="PrecioProveedor">Precio del proveedor</label><br>
            <input type="number" name="PrecioProveedor" min="0"><br>
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
            <label>Playeras</label><br>
            <label><input type="checkbox" id="XXL">XXL</label><input type="number" id="XXLt" disabled><br>
            <label><input type="checkbox"  id="XL">XL </label><input type="number"   id="XLt" disabled><br>
            <label><input type="checkbox"   id="L">L  </label><input type="number"     id="Lt" disabled><br>
            <label><input type="checkbox"   id="M">M  </label><input type="number"     id="Mt" disabled><br>
            <label><input type="checkbox"   id="S">S  </label><input type="number"     id="St" disabled><br>
            <label><input type="checkbox"  id="XS">XS </label><input type="number"   id="XSt" disabled><br>
            <label>Shorts y pants</label><br>
            <label><input type="checkbox" id="28">28</label><input type="number" id="28t" disabled>
            <label><input type="checkbox" id="29">29</label><input type="number" id="29t" disabled><br>
            <label><input type="checkbox" id="30">30</label><input type="number" id="30t" disabled>
            <label><input type="checkbox" id="31">31</label><input type="number" id="31t" disabled><br>
            <label><input type="checkbox" id="32">32</label><input type="number" id="32t" disabled>
            <label><input type="checkbox" id="33">33</label><input type="number" id="33t" disabled><br>
            <label><input type="checkbox" id="34">34</label><input type="number" id="34t" disabled>
            <label><input type="checkbox" id="35">35</label><input type="number" id="35t" disabled><br>
            <label>Calzado</label><br>
            <label><input type="checkbox"   id="5">5</label><input type="number"   id="5t" disabled>
            <label><input type="checkbox" id="5.5">5.5</label><input type="number" id="5.5t" disabled><br>
            <label><input type="checkbox"   id="6">6</label><input type="number"   id="6t" disabled>
            <label><input type="checkbox" id="6.5">6.5</label><input type="number" id="6.5t" disabled><br>
            <label><input type="checkbox"   id="7">7</label><input type="number"   id="7t" disabled>
            <label><input type="checkbox" id="7.5">7.5</label><input type="number" id="7.5t" disabled><br>
            <label><input type="checkbox"   id="8">8</label><input type="number"   id="8t" disabled>
            <label><input type="checkbox" id="8.5">8.5</label><input type="number" id="8.5t" disabled><br>
            <label><input type="checkbox"   id="9">9</label><input type="number"   id="9t" disabled>
            <label><input type="checkbox" id="9.5">9.5</label><input type="number" id="9.5t" disabled><br>
            <label><input type="checkbox"  id="10">10</label><input type="number"  id="10t" disabled><br>
            <label>Balones</label><br>
            <label><input type="checkbox" id="Estandar">Estándar</label><input type="number" id="Estandart" disabled>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
</form>
<script>
const myModal = new bootstrap.Modal(document.getElementById('ModalDeTallas'));

</script>
`;
document.getElementById("mainBody").appendChild(productCreateDiv);