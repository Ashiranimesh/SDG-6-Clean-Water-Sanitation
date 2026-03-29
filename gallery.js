const items = document.querySelectorAll(".gallery-item");
const modal = document.getElementById("modal");
const title = document.getElementById("modal-title");
const desc = document.getElementById("modal-desc");
const img = document.getElementById("modal-img");

const closeBtn = document.getElementById("closeBtn");
const colorBtn = document.getElementById("colorBtn");
const fontBtn = document.getElementById("fontBtn");

/* HOVER USING JS */
items.forEach(item => {

    item.addEventListener("mouseover", () => {
        item.style.opacity = "0.7";
    });

    item.addEventListener("mouseout", () => {
        item.style.opacity = "1";
    });

    /* CLICK TO OPEN */
    item.addEventListener("click", () => {
        modal.style.display = "flex";

        title.textContent = item.dataset.title;
        desc.textContent = item.dataset.desc;
        img.src = item.dataset.img;
    });

});

/* CLOSE BUTTON */
closeBtn.onclick = () => {
    modal.style.display = "none";
};

/* CHANGE COLOR */
colorBtn.onclick = () => {
    document.querySelector(".modal-content").style.backgroundColor = "lightblue";
};

/* CHANGE FONT */
fontBtn.onclick = () => {
    document.querySelector(".modal-content").style.fontFamily = "Courier New";
};

/* CLICK OUTSIDE CLOSE */
window.onclick = (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
};
