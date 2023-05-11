BrandEditDiv = document.createElement("div");
BrandEditDiv.id = "BrandEdit";
BrandEditDiv.innerHTML = `
<br>
<p class="outsideP" style="text-align:center;">Editar marca</p>
<form action="" method="POST"">
<div class="row">
    <div class="col-4 offset-md-1" style="text-align:right;">
        <label for="Marca">Nombre de marca</label><br>
        <label for="Representante">Representante</label><br>
        <label for="Logo">Logo</label>
    </div>
    <div class="col-4 offset-md-2">
        <input name="Nombre" type="text" style="font-size:1.2rem; margin-bottom:0.4rem;"><br>
        <input name="Representante" type="text" style="font-size:1.2rem; margin-bottom:0.4rem;"><br>
        <input name="Logo" type="file">
    </div>
</div>
<div class="row justify-content-center">
    <div class="col-2">
        <button type="submit" class="blackSquareButton d-block w-100 text-center" style="padding:1rem 0rem;">Guardar</button>
    </div>
</div>
</form>
<p></p>
`;
document.getElementById("mainBody").appendChild(BrandEditDiv);