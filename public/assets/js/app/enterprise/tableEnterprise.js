
$(document).ready(function () {
    $("#basic-datatables").DataTable({
        serverSide: true,
        responsive: true,
        //pagingType: "simple",
        language: {
            decimal: "",
            emptyTable: "No hay información",
            info: "Mostrando _START_ a _END_ de _TOTAL_ Empresas",
            infoEmpty: "Mostrando 0 a 0 de 0 Empresas",
            infoFiltered: "(Filtrado de _MAX_ total Empresas)",
            infoPostFix: "",
            thousands: ",",
            lengthMenu: "Mostrar _MENU_ Empresas",
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
            url: "enterprises/get-enterprises",
            type: "GET",
            dataType: "json",
            dataSrc: function (json) {
                // Transformar los datos aquí
                json.data.forEach(function (item) {
                    item.nit = capitalize(item.nit);
                    item.commercial_name = capitalize(item.commercial_name);
                    item.first_name = capitalize(concatenateNames(item.first_name, item.second_name, item.first_last_name, item.second_last_name));
                    item.description_zone = capitalize(item.description_zone);
                    item.description_city = capitalize(item.description_city);
                    item.address = capitalize(item.address);
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
            { data: "nit", title: "NIT", className: "text-right" }, // Números alineados a la derecha
            { data: "commercial_name", title: "Nombre comercial", className: "text-left" }, // Texto alineado a la izquierda
            { data: "first_name", title: "Nombre contacto", className: "text-left" }, // Texto alineado a la izquierda
            { data: "description_zone", title: "Departamento", className: "text-left" }, // Texto alineado a la izquierda
            { data: "description_city", title: "Ciudad", className: "text-left" }, // Texto alineado a la izquierda
            { data: "address", title: "Dirección", className: "text-left" }, // Texto alineado a la izquierda
        ],
        order: [[0, 'asc']], // Ordenar por la primera columna de forma ascendente por defecto
    });
});

function capitalize(text) {
    if (text == null) {
        return 'N/A';
    }
    return text.toLowerCase().replace(/(?:^|\s|["'([{])+\S/g, function (match) {
        return match.toUpperCase();
    });
}

function concatenateNames(first_name, second_name, first_last_name, second_last_name) {
    let fullName = '';
    if (first_name) fullName += first_name + ' ';
    if (second_name) fullName += second_name + ' ';
    if (first_last_name) fullName += first_last_name + ' ';
    if (second_last_name) fullName += second_last_name + ' ';
    return fullName.trim() || 'N/A';
}
