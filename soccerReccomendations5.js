soccer5Div = document.createElement("div");
soccer5Div.id = "soccerReccomendations5";
soccer5Div.innerHTML = `
<p class="outsideP" style="text-align:center; font-size:2rem;">Descubre más</p>
<div class="row">
    <div id="carousel5" class="carousel slide col-8 offset-md-2">
        <div class="carousel-indicators">
            <button type="button" data-bs-target="#carousel5" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carousel5" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carousel5" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
            <div class="carousel-item active">
                <a href="marcaNike.html"><img src="sold.jpg" class="d-block w-100" style="height: 442px" alt="sold.jpg"></a>
                <p class="outsideP" style="text-align:center;">Nike Futbol</p>
            </div>
            <div class="carousel-item">
                <img src="sale.png" class="d-block w-100" style="height: 442px" alt="sale.png">
                <p class="outsideP" style="text-align:center;">Adidas Futbol</p>
            </div>
            <div class="carousel-item">
                <img src="futbol.jpeg" class="d-block w-100" style="height: 442px" alt="futbol.jpeg">
                <p class="outsideP" style="text-align:center;">Camisas de equipos</p>
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carousel5" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carousel5" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
</div>
<p></p>
`;
document.getElementById("mainBody").appendChild(soccer5Div);