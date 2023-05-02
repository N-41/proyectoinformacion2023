footerDiv = document.createElement("div");
footerDiv.id = "mainFooter";
footerDiv.innerHTML = `
<footer style="background: linear-gradient(to right, #cdffd8 , #94b9ff);">
    <div class="row justify-content-center text-center">
        <div class="col-3">
            <b>Teléfono</b>
        </div>
        <div class="col-3">
            <b>Horarios</b>
        </div>
        <div class="col-3">
            <b>Ubicación</b>
        </div>
        <div class="col-3">
            <b>Síguenos</b>
        </div>
    </div>
    <div class="row text-center">
        <div class="col-3">
            <p>55 12 34 56 78</p>
        </div>
        <div class="col-3">
            <p>9 am - 9 pm</p>
            <p>Lunes a Viernes</p>
        </div>
        <div class="col-3">
            <p>Bosques de Aragon, 57171 Nezahualcóyotl, Méx.</p>
        </div>
        <div class="col-3">
            <a href="https://www.facebook.com"><img src="facebook.png" width="90" height="90"></a>
            <a href="https://www.twitter.com"><img src="twitter.png" width="90" height="auto"></a>
        </div>
    </div>
</footer>
`;
document.getElementById("mainBody").appendChild(footerDiv);