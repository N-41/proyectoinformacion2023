profileEditDiv = document.createElement("div");
profileEditDiv.id = "profileEdit";
profileEditDiv.innerHTML = `
<div class="row">
    <div class="col-3 offset-md-1">
        <p class="outsideP">Tu perfil</p>
    </div>
    <div class="col-4">
        <a href="#"><button class="blackSquareButton" style="background:yellow; color:black; border-radius:4rem;">Consultar pedidos</button></a>
    </div>
    <div class="col-3">
        <a href="#"><button class="blackSquareButton">Cancelar</button></a>
    </div>
</div>
<form action="" method="POST">
    <div class="row">
        <div class="col-6 offset-md-1">
            <label for="Nombre">Nombre</label><br>
            <input type="text" name="Nombre" placeholder="Alejandro Blanco Figueroa"><br>
            <label for="Teléfono">Teléfono</label><br>
            <input type="tel" name="Teléfono" placeholder="55 98 76 54 32"><br>
            <label for="Email">Email</label><br>
            <input type="email" name="Email" placeholder="alejandroblanco316@aragon.unam.mx"><br>
            <label for="Contraseña">Contraseña</label><br>
            <input type="password" name="Contraseña" placeholder="(cambiar)"><br>
            <label for="Dirección">Dirección</label><br>
            <input type="text" name="Dirección" placeholder="Bosques de Aragon, 57171 Nezahualcóyotl, Méx."><br>
            <br><br>
            <p class="outsideP">Cartera</p>
            <label for="Número de tarjeta">Número de tarjeta</label><br>
            <input type="number" name="Número de tarjeta" minlength="16" maxlength="16" placeholder="************1234"><br>
            <label for="CVC">CVC</label><br>
            <input type="number" name="CVC" minlength="3" maxlength="3" placeholder="***"><br>
            <label for="Nombre del propietario">Nombre del propietario</label><br>
            <input type="text" name="Nombre del propietario" placeholder="Alejandro Blanco Figueroa"><br>
            <label for="Caducidad">Caducidad</label><br>
            <input type="date" name="Caducidad" placeholder="12/16"><br>
        </div>
    </div>
    <div class="row">
        <div class="col-7 offset-md-1">
            <label for="Dirección">Dirección</label><br>
            <input type="text" name="Dirección" placeholder="Bosques de Aragon, 57171 Nezahualcóyotl, Méx.">
        </div>
        <div class="col-3">
            <button typè="submit" class="blackSquareButton">Guardar</button>
        </div>
    </div>
</form>
`;
document.getElementById("mainBody").appendChild(profileEditDiv);