nikeDiv = document.createElement("div");
nikeDiv.id = "nikeReccomendations";
nikeDiv.innerHTML = `
<p class="outsideP" style="text-align:center; font-size:2rem;">Deportes</p>
<div class="row">
    <div id="carousel5" class="carousel slide col-8 offset-md-2">
        <div class="carousel-indicators">
            <button type="button" data-bs-target="#carousel5" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carousel5" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carousel5" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img src="img/adicional/sold.jpg" class="d-block w-100" style="height: 442px" alt="sold.jpg">
                <p class="outsideP" style="text-align:center;">Natación</p>
            </div>
            <div class="carousel-item">
                <img src="img/adicional/sale.png" class="d-block w-100" style="height: 442px" alt="sale.png">
                <p class="outsideP" style="text-align:center;">Basquetbol</p>
            </div>
            <div class="carousel-item">
                <a href="deporteFutbol.html"><img src="img/adicional/futbol.jpeg" class="d-block w-100" style="height: 442px" alt="futbol.jpeg"></a>
                <p class="outsideP" style="text-align:center;">Futbol</p>
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
document.getElementById("mainBody").appendChild(nikeDiv);