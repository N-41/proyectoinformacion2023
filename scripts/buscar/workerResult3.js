WorkerResult3Div = document.createElement("div");
WorkerResult3Div.id = "WorkerResult3";
WorkerResult3Div.innerHTML = `
<a href="editarPerfilEmpleado.html">
    <div class="row">
        <div class="col-2 text-center offset-md-1">
            <img src="img/fotos_de_perfil/workerprofile.png" style="width:80%; height:auto; border-radius:50%">
        </div>
        <div class="col-8">
            <p style="font-size:1.6rem; color:white; text-align:left;">Nombre: Empleado 2 (#7EA114O) - Disponible</p>
            <p style="text-align:left; font-size:1.4rem;">Teléfono: 55 12 12 34 34</p>
            <p style="text-align:left; font-size:1.4rem;">Correo: empleado1mm2@aragon.unam.mx</p>
        </div>
    </div>
    <br>
</a>
`;
document.getElementById("mainBody").appendChild(WorkerResult3Div);