let ol = document.getElementById("infi-list");

let scrollHeit = 1;
const loop = () => {
  for (let i = 1; i <= 10; i++) {
    let created = document.createElement("li");
    created.innerText = `${"List Item " + scrollHeit ++}`;
    ol.appendChild(created);
  }
};
ol.addEventListener("scroll", (e) => {
  let totalScrollHeight = ol.scrollHeight;
  let visible = ol.clientHeight;
  let scrollHeight = ol.scrollTop;
  let rem = totalScrollHeight - visible - scrollHeight;
  
  if (rem <= 0) {
    loop();
  }
});
loop();