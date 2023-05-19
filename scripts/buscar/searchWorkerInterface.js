browseWorkerDiv = document.createElement("div");
browseWorkerDiv.id = "browseWorker";
browseWorkerDiv.innerHTML = `
<form action="" method="POST" target="buscarEmpleado.html">
    <div class="row">
        <div class="col-2 offset-md-1 text-center">
            <p class="outsideP">Empleados</p>
        </div>
        <div class="col-2 text-center">
            <label for="Nombre">Nombre</label><br>
            <input name="Nombre" type="text" style="font-size:1.2rem; margin-bottom:0.4rem;">
        </div>
        <div class="col-2 text-center">
            <label for="ID">ID</label><br>
            <input name="ID" type="text" style="font-size:1.2rem; margin-bottom:0.4rem;">
        </div>
        <div class="col-2 text-center">
            <label for="Estatus">Estatus</label><br>
            <select name="Estatus">
                <option selected>Disponible</option>
                <option>No disponible</option>
            </select><br>
        </div>
        <div class="col-2 text-center">
            <button type="submit" class="blackSquareButton d-block w-100 text-center" style="padding:1rem 0rem;">Buscar</button>
        </div>
    </div>
</form>
`;
document.getElementById("mainBody").appendChild(browseWorkerDiv);