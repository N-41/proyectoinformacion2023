adminHeaderDiv = document.createElement("div");
adminHeaderDiv.id = "adminHeader";
adminHeaderDiv.innerHTML = `
<div class="container-fluid" style="background: linear-gradient(to right, #cdffd8 , #94b9ff);"><nav class="navbar navbar-lg">
    <a class="navbar-brand" href="index.html">
        <img src="logo.png" width="28" height="28" alt="">
    </a>
    <a class="nav-item" href="#">Productos</a>
    <a class="nav-item" href="#">Marcas</a>
    <a class="nav-item" href="#">Perfil</a>
    <a class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        Volver a
        </a>
        <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="index.html">index.html</a></li>
        <li><a class="dropdown-item" href="deporteFutbol.html">deporteFutbol.html</a></li>
        <li><a class="dropdown-item" href="marcaNike.html">marcaNike.html</a></li>
        <li><a class="dropdown-item" href="producto.html">producto.html</a></li>
        </ul>
    </a>
    <a href="#"><img src="adminprofile.png" class="shopcart"></img></a>
    <a href="#"><img src="cart.png" class="shopcart"></img></a>
</nav></div>
<p></p>
`;
document.getElementById("mainBody").appendChild(adminHeaderDiv);