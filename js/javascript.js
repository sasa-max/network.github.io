alert('このページの画像はクリックで拡大できます。試してみてください。')

const popup = document.querySelectorAll(".popup");
const zoomback = document.getElementById("zoomback");
const zoomimg = document.getElementById("zoomimg");

popup.forEach(function(value) {
      value.addEventListener("click",kakudai);
      });

function kakudai(e) {

zoomback.style.display = "flex";

zoomimg.setAttribute("src",e.target.getAttribute("src"));
}

zoomback.addEventListener("click",modosu);

function modosu() {

zoomback.style.display = "none";
}