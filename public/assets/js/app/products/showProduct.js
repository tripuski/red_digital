const offcanvasContent = document.querySelector('#offcanvasContent');

const showProductDetails = (product_id) => {

    offcanvasContent.innerHTML = '';

    GetProduct(product_id).then((result) => {
        offcanvasContent.innerHTML = result;

        const offcanvasElement = document.getElementById('offcanvasRight');
        const offcanvas = new bootstrap.Offcanvas(offcanvasElement);
        offcanvas.show();
    });
}

function GetProduct(product_id) {
    return new Promise((resolve, reject) => {
        $.ajax({
            headers: {
                "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content"),
            },
            url: `${window.appConfig.baseUrl}admin/products/${product_id}`,
            type: "GET",
            success: function (result) {
                resolve(result);
            },
            error: function (error) {
                reject(error);
            }
        });
    });
}

document.addEventListener('DOMContentLoaded', function() {
    const imageModal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');

    imageModal.addEventListener('show.bs.modal', function(event) {
        const button = event.relatedTarget; // Elemento que activó el modal
        const src = button.getAttribute('data-bs-src'); // Extraer la información del atributo data-bs-src

        // Actualizar la imagen del modal
        modalImage.src = src;
    });
});
