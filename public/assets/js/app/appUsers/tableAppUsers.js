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
            info: "Mostrando _START_ a _END_ de _TOTAL_ Usuario App",
            infoEmpty: "Mostrando 0 a 0 de 0 Usuario App",
            infoFiltered: "(Filtrado de _MAX_ total Usuario App)",
            infoPostFix: "",
            thousands: ",",
            lengthMenu: "Mostrar _MENU_ Usuario App",
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
            url: "app-users/get-app-users",
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
            { data: "name", title: "Nombre", className: "text-right" }, // Números alineados a la derecha
            { data: "email", title: "Correo", className: "text-left" }, // Texto alineado a la izquierda
            { data: "phone", title: "Teléfono", className: "text-left" }, // Texto alineado a la izquierda
            {
                data: "status",
                title: "Estado",
                createdCell: function (td, cellData, rowData, row, col) {
                    $(td).addClass('text-center'); // Añade una clase específica
                },
                render: function (data, type, row) {
                    let statusText, statusClass;
                    switch (data) {
                        case "0":
                            statusText = 'Pendiente';
                            statusClass = 'bg-secondary'; // Clase CSS para estilos
                            break;
                        case "1":
                            statusText = 'Revisado';
                            statusClass = 'bg-success';
                            break;
                        case "2":
                            statusText = 'Negado';
                            statusClass = 'bg-danger';
                            break;
                    }

                    return '<span class="badge ' + statusClass + '">' + statusText + '</span>';
                }
            },
            {
                data: "commercial_name",
                title: "Comercial asignado",
                createdCell: function (td, cellData, rowData, row, col) {
                    $(td).addClass('text-center'); // Añade una clase específica
                },
                render: function (data, type, row) {
                    // Si el valor es null o undefined, mostrar "N/A"
                    return data ? data : 'N/A';
                }
            }, // Números alineados a la derecha
            { data: "company_name", title: "Nombre de la empresa", className: "text-right" }, // Números alineados a la derecha
            { data: "nit", title: "Nit", className: "text-right" }, // Números alineados a la derecha
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
                    // Verificar el estado
                    if (canUpdate && full.status == "0") {
                        return `<button class="btn btn-outline-primary btn-sm border-0" onclick="showConfirmAndDeny(${full.id})">
                        <i class="fas fa-users-cog"></i>
                    </button>`;
                    } else {
                        // No mostrar ningún botón o algún otro mensaje
                        return '';
                    }
                }
            }
        ],
        order: [[0, 'asc']], // Ordenar por la primera columna de forma ascendente por defecto
    });
});
