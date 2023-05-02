frontPageSliderDiv = document.createElement("div");
frontPageSliderDiv.id = "mainFrontPageSlider";
frontPageSliderDiv.innerHTML = `
<p class="outsideP" style="text-align:center;">Promociones de temporada</p>
<div class="row">
<div id="frontPageSlider" class="carousel slide col-6 offset-md-3">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#frontPageSlider" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#frontPageSlider" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#frontPageSlider" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <a href="#">
        <img src="sold.jpg" class="d-block w-100" style="height: 442px" alt="sold.jpg">
      </a>
    </div>
    <div class="carousel-item">
      <a href="#">
        <img src="sale.png" class="d-block w-100" alt="sale.png">
      </a>
    </div>
    <div class="carousel-item">
      <a href="#">
        <img src="futbol.jpeg" class="d-block w-100" alt="futbol.jpeg">
      </a>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#frontPageSlider" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#frontPageSlider" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</div>
<p></p>
<script>
const frontPageCarouselElement = document.querySelector('#frontPageSlider');

const carousel = new bootstrap.Carousel(frontPageCarouselElement, {
interval: 2000,
touch: false
})
</script>
`;
document.getElementById("mainBody").appendChild(frontPageSliderDiv);