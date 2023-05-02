headerDiv = document.createElement("div");
headerDiv.id = "mainHeader";
headerDiv.innerHTML = `
<div class="container-fluid" style="background: linear-gradient(to right, #cdffd8 , #94b9ff);"><nav class="navbar navbar-lg">
    <a class="navbar-brand" href="index.html">
        <img src="logo.png" width="40" height="40" alt="">
    </a>
    <a class="nav-item" href="index.html">Inicio</a>
    <a class="nav-item" href="index.html#mainSports">Deportes</a>
    <a class="nav-item" href="index.html#mainBrands">Marcas</a>
    <a class="nav-item" href="#">Quiénes somos</a>
    <a href="#"><button>Iniciar Sesión</button></a>
    <a href="#"><img src="cart.png" id="shopcart"></img></a>
</nav></div>
<p></p>
`;
document.getElementById("mainBody").appendChild(headerDiv);