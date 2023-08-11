var inputs = document.getElementById("input");
var text = document.querySelector(".text");

function add() {
  if (inputs.value == "") {
    alert("Please Enter Task");
  } else {
    var newEle = document.createElement("ul");
    newEle.innerHTML = `${inputs.value}  <lord-icon
        src="https://cdn.lordicon.com/gsqxdxog.json"
        trigger="hover"
        colors="primary:#ffffff,secondary:#ffffff"
        state="hover-empty"
        style="width:20px;height:20px cursor:pointer">
        </lord-icon>`;
    text.appendChild(newEle);
    inputs.value = "";
    newEle.querySelector("lord-icon").addEventListener("click", remove);

    function remove() {
      newEle.remove();
    }
  }
}
