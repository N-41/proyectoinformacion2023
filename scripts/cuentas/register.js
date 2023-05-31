registerDiv = document.createElement("div");
registerDiv.id = "register";
registerDiv.innerHTML = `
<p class="outsideP" style="text-align: center; font-size: 1.7rem;">
    Registrarse
</p>
<br>
<form action="" method="POST">
    <div class="row" style="font-size: 1.7rem; color:white;">
        <div class="col-3 offset-md-2 text-center">
            <label for="Nombre">Nombre</label><br><br>
            <input type="text" name="Nombre"><br>
            <label for="Contraseña">Contraseña</label><br><br>
            <input type="password" name="Contraseña"><br>
        </div>
        <div class="col-3 offset-md-2 text-center">
            <label for="Email">Email</label><br><br>
            <input type="email" name="Email"><br>
            <label for="Telefono">Telefono</label><br><br>
            <input type="tel" name="Telefono"><br>
        </div>
    </div><br>
    <div class="row">
        <div class="col-4 offset-md-4 text-center">
        <button type="submit" class="blackSquareButton">Crear cuenta</button><br><br>
        <a href="iniciarSesion.html"><label style="font-size:1.7rem;  text-decoration:underline;">Iniciar sesión</label></a>
        </div>
    </div>
</form>
`;
document.getElementById("mainBody").appendChild(registerDiv);