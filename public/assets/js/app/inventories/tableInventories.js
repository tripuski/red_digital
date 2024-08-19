$(document).ready(function () {
    $("#basic-datatables").DataTable({
        colReorder: true,
        serverSide: true,
        responsive: true,
        //pagingType: "simple",
        deferRender: true,
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
            url: "inventories/get-products",
            type: "GET",
            dataType: "json",
            dataSrc: function (json) {
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
            { data: "brand_description", title: "Marca", className: "text-left" }, // Texto alineado a la izquierda
            { data: "measurement_unit_description", title: "Unidad", className: "text-right" }, // Números alineados a la derecha
            { data: "supplier_description", title: "Proveedor", className: "text-right" }, // Números alineados a la derecha
            {
                data: "unit_cost",
                title: "Precio",
                className: "text-right",
                render: function(data, type, row) {
                    // Suponiendo que la moneda es COP (Peso Colombiano)
                    return '$' + parseFloat(data).toLocaleString('es-CO', { minimumFractionDigits: 2 });
                }
            },
            {
                data: "quantity",
                title: "Existencia",
                createdCell: function (td, cellData, rowData, row, col) {
                    $(td).addClass('text-center'); // Añade una clase específica
                },
            }, // Números alineados a la derecha
            { data: "warehouse_description", title: "Bodega", className: "text-right" }, // Números alineados a la derecha
            {
                // Columna para el botón de acción
                title: "Acción",
                // className: "text-center",
                orderable: false, // No permitir ordenar por esta columna
                data: null,
                createdCell: function (td, cellData, rowData, row, col) {
                    $(td).addClass('text-center'); // Añade una clase específica
                },
                render: function (data, type, full, meta) {
                    // `full` contiene los datos completos de la fila
                    return `<button class="btn btn-outline-primary btn-sm border-0" onclick="showProductDetails(${full.id})">
                                <i class="fas fa-eye"></i>
                            </button>`;
                }
            }
        ],
        order: [[0, 'asc']], // Ordenar por la primera columna de forma ascendente por defecto
    });
});
