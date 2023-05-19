forgotPasswordDiv = document.createElement("div");
forgotPasswordDiv.id = "forgotPassword";
forgotPasswordDiv.innerHTML = `
<p class="outsideP" style="text-align: center; font-size: 1.7rem;">
    ¿Olvidaste tu contraseña?
</p>
<br>
<form action="" method="POST">
    <div class="row" style="font-size: 1.7rem; color:white;">
        <div class="col-4 offset-md-4 text-center">
        <label for="Email">Email</label><br><br>
        <input type="email" name="Email"><br>
        <a href="iniciarSesion.html"><label style="color:white; text-decoration:underline;">Iniciar sesión</label></a><br>
        <a href="registrarUsuario.html"><label style="color:white;  text-decoration:underline;">Regístrate</label></a>
        
        </div>
    </div><br>
    <div class="row">
        <div class="col-6 text-center offset-md-3">
            <button type="submit" class="blackSquareButton">Reestablecer contraseña</button><br>
        </div>
    </div>
</form>
`;
document.getElementById("mainBody").appendChild(forgotPasswordDiv);