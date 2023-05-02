sportsDiv = document.createElement("div");
sportsDiv.id = "mainSports";
sportsDiv.innerHTML = `
<p  class="outsideP" style="text-align:center;">Deportes</p>
<div class="row">
    <div class="col-2 offset-md-1">
        <div class="card" style="width: 12rem;">
            <a href="deporteFutbol.html"><img src="soccerPlayer.jpg" class="card-img-top cardImg" alt="futbol"></a>
            <div class="card-body text-center justify-content-center">
            <h5 class="card-title">Soccer</h5>
            <p />
            <p class="card-text">Calzado</p>
            <p class="card-text">Balones</p>
            <p class="card-text">Ropa</p>
            <p class="card-text">Accesorios</p>
            </div>
        </div>
    </div>
    <div class="col-2">
        <div class="card" style="width: 12rem;">
            <a href="#"><img src="basketballPlayer.jpg" class="card-img-top cardImg" alt="basquetbol"></a>
            <div class="card-body text-center justify-content-center">
            <h5 class="card-title">Basquetbol</h5>
            <p />
            <p class="card-text">Calzado</p>
            <p class="card-text">Balones</p>
            <p class="card-text">Ropa</p>
            <p class="card-text">Accesorios</p>
            </div>
        </div>
    </div>
    <div class="col-2">
        <div class="card" style="width: 12rem;">
            <a href="#"><img src="tennisPlayer.jpg" class="card-img-top cardImg" alt="tenis"></a>
            <div class="card-body text-center justify-content-center">
            <h5 class="card-title">Tennis</h5>
            <p />
            <p class="card-text">Calzado</p>
            <p class="card-text">Bolas</p>
            <p class="card-text">Ropa</p>
            <p class="card-text">Raquetas</p>
            </div>
        </div>
    </div>
    <div class="col-2">
        <div class="card" style="width: 12rem;">
            <a href="#"><img src="baseballPlayer.jpg" class="card-img-top cardImg" alt="beisbol"></a>
            <div class="card-body text-center justify-content-center">
            <h5 class="card-title">Beisból</h5>
            <p />
            <p class="card-text">Calzado</p>
            <p class="card-text">Bolas</p>
            <p class="card-text">Ropa</p>
            <p class="card-text">Equipo</p>
            <p class="card-text">Accesorios</p>
            </div>
        </div>
    </div>
    <div class="col-2">
        <div class="card" style="width: 12rem;">
            <a href="#"><img src="swimmingPlayer.jpg" class="card-img-top cardImg" alt="nadador"></a>
            <div class="card-body text-center justify-content-center">
            <h5 class="card-title">Natación</h5>
            <p />
            <p class="card-text">Equipo</p>
            <p class="card-text">Trajes</p>
            <p class="card-text">Accesorios</p>
            </div>
        </div>
    </div>
</div>
<p></p>
`;
document.getElementById("mainBody").appendChild(sportsDiv);