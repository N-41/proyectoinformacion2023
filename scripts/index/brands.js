brandsDiv = document.createElement("div");
brandsDiv.id = "mainBrands";
brandsDiv.innerHTML = `
<p class="outsideP" style="text-align:center;">Marcas</p>
<div class="row justify-content-around text-center">
    <div class="col-2">
        <a href="#">
            <img src="img/marcas/puma.png" alt="puma" class="cardImg">
        </a>
        <label style="font-weight: bold;">Puma</label>
    </div>
    <div class="col-2">
        <a href="#">
            <img src="img/marcas/vans.jpg" alt="vans" class="cardImg">
        </a>
        <label style="font-weight: bold;">Vans</label>
    </div>
    <div class="col-2">
        <a href="#">
            <img src="img/marcas/adidas.jpg" alt="adidas" class="cardImg">
        </a>
        <label style="font-weight: bold;">Adidas</label>
    </div>
    <div class="col-2">
        <a href="marcaNike.html">
            <img src="img/marcas/nike.png" alt="nike" class="cardImg">
        </a>
        <label style="font-weight: bold;">Nike</label>
    </div>
</div>
<p></p>
`;
document.getElementById("mainBody").appendChild(brandsDiv);