WorkerResult2Div = document.createElement("div");
WorkerResult2Div.id = "WorkerResult2";
WorkerResult2Div.innerHTML = `
<a href="editarPerfilEmpleado.html">
    <div class="row">
        <div class="col-2 text-center offset-md-1">
            <img src="img/fotos_de_perfil/userprofile.png" style="width:80%; height:auto; border-radius:50%">
        </div>
        <div class="col-8">
            <p style="font-size:1.6rem; color:white; text-align:left;">Nombre: Empleado 1 (#7EA114N) - Disponible</p>
            <p style="text-align:left; font-size:1.4rem;">Teléfono: 55 87 65 43 21</p>
            <p style="text-align:left; font-size:1.4rem;">Correo: empleado1mm2@aragon.unam.mx</p>
        </div>
    </div>
    <br>
</a>
`;
document.getElementById("mainBody").appendChild(WorkerResult2Div);