$(document).ready(function () {
    $("#basic-datatables").DataTable({
        serverSide: true,
        responsive: true,
        //pagingType: "simple",
        language: {
            decimal: "",
            emptyTable: "No hay información",
            info: "Mostrando _START_ a _END_ de _TOTAL_ Productos",
            infoEmpty: "Mostrando 0 a 0 de 0 Productos",
            infoFiltered: "(Filtrado de _MAX_ total Productos)",
            infoPostFix: "",
            thousands: ",",
            lengthMenu: "Mostrar _MENU_ Productos",
            loadingRecords: "Cargando...",
            processing: "Procesando...",
            search: "Buscar:",
            zeroRecords: "Sin resultados encontrados",
            paginate: {
                first: "Primero",
                last: "Ultimo",
                next: "Siguiente",
                previous: "Anterior",
            },
        },
        ajax: {
            url: "products/get-products",
            type: "GET",
            dataType: "json",
            dataSrc: function (json) {
                // Transformar los datos aquí
                json.data.forEach(function (item) {
                    item.product = item.product;
                    item.product_description = item.product_description;
                    item.reference = item.reference;
                });
                return json.data;
            },
            data: function (d) {
                // Agregar parámetros adicionales si es necesario
                return $.extend({}, d, {
                    // Si tu servidor espera parámetros específicos, añádelos aquí
                    page: (d.start / d.length) + 1
                });
            },
        },
        columns: [
            { data: "product", title: "Producto", className: "text-right" }, // Números alineados a la derecha
            { data: "product_description", title: "Descripción", className: "text-left" }, // Texto alineado a la izquierda
            { data: "reference", title: "Referencia", className: "text-left" }, // Texto alineado a la izquierda
            {
                // Columna para el botón de acción
                data: null,
                title: "Acción",
                createdCell: function (td, cellData, rowData, row, col) {
                    $(td).addClass('text-center'); // Añade una clase específica
                },
                orderable: false, // No permitir ordenar por esta columna
                render: function (data, type, full, meta) {
                    // `full` contiene los datos completos de la fila
                    return `<button class="btn btn-outline-primary btn-sm border-0" onclick="showUploadModal(${full.id})">
                                <i class="fas fa-upload"></i>
                            </button>
                            <button class="btn btn-outline-primary btn-sm border-0" onclick="showProductDetails(${full.id})">
                                <i class="fas fa-eye"></i>
                            </button>`;
                }
            }
        ],
        order: [[0, 'asc']], // Ordenar por la primera columna de forma ascendente por defecto
    });
});
