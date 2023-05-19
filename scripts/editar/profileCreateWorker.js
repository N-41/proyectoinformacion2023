profileCreateDiv = document.createElement("div");
profileCreateDiv.id = "profileCreate";
profileCreateDiv.innerHTML = `
<div class="row">
    <div class="col-7 offset-md-1">
        <p class="outsideP">Creando perfil de empleado</p>
    </div>
    <div class="col-3">
        <a href="#"><button class="blackSquareButton">Cancelar</button></a>
    </div>
</div>
<form action="" method="POST">
    <div class="row">
        <div class="col-7 offset-md-1">
            <label for="Nombre">Nombre</label><br>
            <input type="text" name="Nombre"><br>
            <label for="Teléfono">Teléfono</label><br>
            <input type="tel" name="Teléfono"><br>
            <label for="Email">Email</label><br>
            <input type="email" name="Email"><br>
            <label for="Rol">Rol</label><br>
            <select name="Rol">
                <option>Empleado</option>
                <option>Administrador</option>
            </select><br>
            <label for="Disponibilidad">Disponibilidad</label><br>
            <select name="Disponibilidad">
            <option>Disponible</option>
            <option>No disponible</option>
        </select><br>
        </div>
        <div class="col-3">
            <img src="img/fotos_de_perfil/userprofile.png" width="262" height="262">
        </div>
    </div>
    <div class="row">
        <div class="col-7 offset-md-1">
            <label for="Foto de perfil">Foto de perfil</label><br>
            <button type="file" name="Foto de perfil">Agregar archivo</button>
        </div>
        <div class="col-3">
            <button typè="submit" class="blackSquareButton">Guardar</button>
        </div>
    </div>
</form>
`;
document.getElementById("mainBody").appendChild(profileCreateDiv);