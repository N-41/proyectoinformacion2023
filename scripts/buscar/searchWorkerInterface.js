browseWorkerDiv = document.createElement("div");
browseWorkerDiv.id = "browseWorker";
browseWorkerDiv.innerHTML = `
<form action="" method="POST" target="buscarEmpleado.html">
    <div class="row">
        <div class="col-2 offset-md-1 text-center">
            <p class="outsideP">Empleados</p>
        </div>
        <div class="col-2 text-center">
            <select name="Type" style="font-size:1.2rem; padding: 0.19rem 0 0.19rem;">
                <option selected>Nombre</option>
                <option>ID</option>
            </select>
        </div>
        <div class="col-2 text-center">
            <input name="Field" type="text" style="font-size:1.2rem;">
        </div>
        <div class="col-2 text-center">
            <select name="Estatus" style="font-size:1.2rem; padding: 0.19rem 0 0.19rem;">
                <option selected>Disponible</option>
                <option>No disponible</option>
            </select><br>
        </div>
        <div class="col-2 text-center">
            <button type="submit" class="blackSquareButton text-center" style="padding:0.2rem 0.2rem; margin:auto; font-size:1.4rem;">Buscar</button>
        </div>
    </div>
</form>
`;
document.getElementById("mainBody").appendChild(browseWorkerDiv);