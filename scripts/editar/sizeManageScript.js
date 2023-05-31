sizeManageDiv = document.createElement("div");
sizeManageDiv.id = "sizeManage";
sizeManageDiv.innerHTML = `
    <div class="modal fade" id="ModalDeTallas" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5">Manejar tallas</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <label><input type="checkbox"    id="L">|    L    |</label><input type="number"     id="Lt" disabled><br>
            <label><input type="checkbox"    id="M">|    M    |</label><input type="number"     id="Mt" disabled><br>
            <label><input type="checkbox"    id="S">|    S    |</label><input type="number"     id="St" disabled><br>
            <label><input type="checkbox"   id="XS">|    XS   |</label><input type="number"   id="XSt" disabled><br>
            <label><input type="checkbox" id="Otro">|Sin talla|</label><input type="number" id="Otrot" disabled>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
<script>
const myModal = new bootstrap.Modal(document.getElementById('ModalDeTallas'));

</script>
`;
document.getElementById("prodForm").appendChild(sizeManageDiv);

document.getElementById('L').onchange = function() {
    document.getElementById('Lt').disabled = !this.checked;
};
document.getElementById('M').onchange = function() {
    document.getElementById('Mt').disabled = !this.checked;
};
document.getElementById('S').onchange = function() {
    document.getElementById('St').disabled = !this.checked;
};
document.getElementById('XS').onchange = function() {
    document.getElementById('XSt').disabled = !this.checked;
};
document.getElementById('Other').onchange = function() {
    document.getElementById('Othert').disabled = !this.checked;
};