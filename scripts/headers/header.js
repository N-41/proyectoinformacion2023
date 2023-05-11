headerDiv = document.createElement("div");
headerDiv.id = "mainHeader";
headerDiv.innerHTML = `
<div class="container-fluid" style="background: linear-gradient(to right, #cdffd8 , #94b9ff);"><nav class="navbar navbar-lg">
    <a class="navbar-brand" href="index.html">
        <img src="img/adicional/logo.png" width="28" height="28" alt="">
    </a>
    <a class="nav-item" href="../../index.html">Inicio</a>
    <a class="nav-item" href="../../index.html#mainSports">Deportes</a>
    <a class="nav-item" href="../../index.html#mainBrands">Marcas</a>
    <a class="nav-item" href="../../editarPerfilAdmin.html">Quiénes somos</a>
    <a href="../../editarPerfilUsuario.html"><button>Iniciar Sesión</button></a>
    <a href="#"><img src="img/adicional/cart.png" class="shopcart"></img></a>
</nav></div>
<p></p>
`;
document.getElementById("mainBody").appendChild(headerDiv);