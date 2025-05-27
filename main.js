
document.addEventListener('DOMContentLoaded', () => {
    const viewer = new View360("#viewer", {
    initialYaw: 55,
    projection: new View360. CylindricalProjection({
        src: "images/IMG_9556.jpg",
        partial: true,
    })

    });
});

const showInfo = document.querySelectorAll('.search-hotspot');
const dialog = document.querySelector("dialog");
const closeButton = document.querySelector(".btn-close");

for (let i = 0; i < showInfo.length; i++) {
    showInfo[i].addEventListener("click", () => {
        const img = document.querySelector("img");
        const imageName = showInfo[i].dataset.item;
        img.setAttribute("src", "images/" + imageName + ".jpg");
        dialog.showModal();
    });
}

closeButton.addEventListener("click", () => {
  dialog.close();
});
