contactFormDiv = document.createElement("div");
contactFormDiv.id = "contactForm";
contactFormDiv.innerHTML = `
<p class="outsideP" style="text-align: center; font-size: 1.5rem;">
    Contáctanos
</p>
<form action="" method="POST">
    <div class="row">
        <div class="col-5" style="text-align: right;">
            <label style="font-size:1.4rem; font-weight:bold;">Teléfono</label><br><br>
            <label style="font-size:1.12rem;">55 12 34 56 78</label>
            <br><br><br>
            <label style="font-size:1.4rem; font-weight:bold;">Email</label><br><br>
            <label style="font-size:1.12rem;">mm2deportes@gmail.com</label>
            <br><br><br>
            <label style="font-size:1.4rem; font-weight:bold;">Ubicación</label><br><br><br>
            <label style="font-size:1.12rem">Bosques de Aragon, 57171, Nezahualcóyotl, Méx.</label><br><br>
            <div id="map">
                <script
                  src="https://maps.googleapis.com/maps/api/js?key=AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg&callback=initMap&v=weekly"
                  defer
                ></script>
            </div>
        </div>
        <div class="col-5 offset-md-2" style="text-align: left;">
            <p class="outsideP">Nombre*</p>
            <input name="Nombre" type="text">
            <br><br>
            <p class="outsideP">Teléfono*</p>
            <input name="Telefono" type="tel">
            <br><br>
            <p class="outsideP">Email*</p>
            <input name="Email" type="email">
            <br><br>
            <p class="outsideP">Mensaje*</p>
            <input name="Mensaje" type="text" height="400px">
            <br><br>
            <button type="submit" class="blackSquareButton">Enviar</button>
            <br><label style="font-size: 0.6rem;">*Obligatorio</label>
        </div>
    </div>
</form>
`;
document.getElementById("mainBody").appendChild(contactFormDiv);

function initMap() {
              
              const uluru = { lat: -25.344, lng: 131.031 };
             
              const map = new google.maps.Map(document.getElementById("map"), {
                zoom: 1,
                center: uluru,
              });
              
              const marker = new google.maps.Marker({
                position: uluru,
                map: map,
              });
            }

            window.initMap = initMap;

