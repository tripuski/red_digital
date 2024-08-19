$(document).ready(function () {
    $("#basic-datatables").DataTable({
        colReorder: true,
        responsive: true,
        //pagingType: "simple",
        language: {
            decimal: "",
            emptyTable: "No hay información",
            info: "Mostrando _START_ a _END_ de _TOTAL_ Marcas",
            infoEmpty: "Mostrando 0 a 0 de 0 Marcas",
            infoFiltered: "(Filtrado de _MAX_ total Marcas)",
            infoPostFix: "",
            thousands: ",",
            lengthMenu: "Mostrar _MENU_ Marcas",
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
        order: [[0, 'asc']], // Ordenar por la primera columna de forma ascendente por defecto
    });
});
