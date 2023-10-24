let ol = document.getElementById("infi-list");

let scrollHeit = ol.scrollHeight;
const loop = () => {
  for (let i = 1; i <= 10; i++) {
    let created = document.createElement("li");
    created.innerText = `${"List Item "}` + i;
    ol.appendChild(created);
  }
};
ol.addEventListener("scroll", (e) => {
  if (ol.clientHeight <= ol.scrollHeight) {
    loop();
  }
});
loop();