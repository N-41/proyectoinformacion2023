addBrandDiv = document.createElement("div");
addBrandDiv.id = "addBrand";
addBrandDiv.innerHTML = `
<div class="row justify-content-around text-center">
    <div class="col-2">
        <a href="#">
            <button class="cardImg" style="font-size:4rem;">+</button></a>
        </a>
        <label style="font-weight: bold;">Agregar marca</label>
    </div>
    <div class="col-2">
    
    </div>
    <div class="col-2">
    
    </div>
    <div class="col-2">
    
    </div>
</div>
<p></p>
`;
document.getElementById("mainBody").appendChild(addBrandDiv);