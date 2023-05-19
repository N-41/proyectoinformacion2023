WorkerResult1Div = document.createElement("div");
WorkerResult1Div.id = "WorkerResult1";
WorkerResult1Div.innerHTML = `
<a href="crearPerfilEmpleado.html">
    <div class="row">
        <div class="col-2 offset-md-1 text-center">
            <img src="img/fotos_de_perfil/workerprofile.png" style="width:80%; height:auto; border-radius:50%">
        </div>
        <div class="col-8 text-center align-item-center">
            <br><br>
            <p style="font-size:1.6rem; color:white;">+ Añadir empleado</p>
        </div>
    </div>
    <br>
</a>
`;
document.getElementById("mainBody").appendChild(WorkerResult1Div);