
document.addEventListener('DOMContentLoaded', () => {

    if (document.getElementById("room1")){
        const room1 = new View360("#room1", {
            initialYaw: 55,
            projection: new View360. CylindricalProjection({
                src: "images/room1.jpg",
                partial: true,
            })
        });
    }

    if (document.getElementById("room2")){
        const room2 = new View360("#room2", {
            initialYaw: 0,
            projection: new View360.CylindricalProjection({
                src: "images/room2.jpg",
                partial: true,
            })
        });
    }

    }
);

const showInfo = document.querySelectorAll('.search-hotspot');
const dialog = document.querySelector("dialog");
const closeButton = document.querySelector(".btn-close");
const info = document.querySelector(".info");
const img = document.querySelector("img");

for (let i = 0; i < showInfo.length; i++) {
    showInfo[i].addEventListener("click", () => {
        const imageName = showInfo[i].dataset.item;
        img.setAttribute("src", "images/" + imageName + ".jpg");
        info.innerHTML = showInfo[i].querySelector(".desc").innerHTML;
        document.body.classList.add("scroll-lock")
        dialog.showModal();
    });
}

  dialog.addEventListener('click', (event) => {
    if (event.target === dialog) {
        info.innerHTML = '';
        img.setAttribute("src", "");
        dialog.close();
    }
  });

closeButton.addEventListener("click", () => {
    document.body.classList.remove("scroll-lock")
    info.innerHTML = '';
    img.setAttribute("src", "");
    dialog.close();
});
