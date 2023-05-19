loginDiv = document.createElement("div");
loginDiv.id = "login";
loginDiv.innerHTML = `
<p class="outsideP" style="text-align: center; font-size: 1.7rem;">
    Iniciar sesión
</p>
<br>
<form action="" method="POST">
    <div class="row" style="font-size: 1.7rem; color:white;">
        <div class="col-4 offset-md-4 text-center">
            <label for="Email">Email</label><br><br>
            <input type="email" name="Email"><br>
            <label for="Contraseña">Contraseña</label><br><br>
            <input type="text" name="Contraseña"><br>
            <a href="restableciendoContraseña.html"><label style="color:white; text-decoration:underline;">¿Olvidaste la contraseña?</label></a><br><br>
            <button type="submit" class="blackSquareButton">Enviar</button><br>
            <a href="registrarUsuario.html"><label style="color:white; text-decoration:underline;">Regístrate</label></a>
        </div>
    </div>
</form>
`;
document.getElementById("mainBody").appendChild(loginDiv);