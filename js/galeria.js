/* =========================================
   GALERÍA INTERACTIVA
========================================= */


/* =========================================
   ELEMENTOS
========================================= */

const modal =
    document.getElementById("imageModal");

const modalImage =
    document.getElementById("modalImage");

const modalTitle =
    document.getElementById("modalTitle");

const closeModal =
    document.getElementById("closeModal");


/* =========================================
   TARJETAS
========================================= */

const visualCards =
    document.querySelectorAll(".visual-card");


visualCards.forEach(card => {

    const imageWrapper =
        card.querySelector(".image-wrapper");

    const viewButton =
        card.querySelector(".view-btn");


    /*
     * Datos de la imagen
     */

    const image =
        card.dataset.image;

    const title =
        card.dataset.title;


    /*
     * Abrir haciendo clic en la imagen
     */

    imageWrapper.addEventListener(
        "click",
        () => {

            openImage(image, title);

        }
    );


    /*
     * Abrir con el botón
     */

    viewButton.addEventListener(
        "click",
        () => {

            openImage(image, title);

        }
    );

});


/* =========================================
   ABRIR MODAL
========================================= */

function openImage(image, title) {

    modalImage.src = image;

    modalImage.alt = title;

    modalTitle.textContent = title;

    modal.classList.add("active");

    document.body.style.overflow = "hidden";

}


/* =========================================
   CERRAR MODAL
========================================= */

function closeImage() {

    modal.classList.remove("active");

    document.body.style.overflow = "";

}


closeModal.addEventListener(
    "click",
    closeImage
);


/* =========================================
   CERRAR AL HACER CLIC AFUERA
========================================= */

modal.addEventListener(
    "click",
    event => {

        if (
            event.target === modal
        ) {

            closeImage();

        }

    }
);


/* =========================================
   ESC PARA CERRAR
========================================= */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape"
        ) {

            closeImage();

        }

    }
);