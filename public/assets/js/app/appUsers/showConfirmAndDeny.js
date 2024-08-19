function showConfirmAndDeny(id) {
    swal({
        title: "Confirmar o Rechazar",
        text: "Seleccione una opción",
        icon: "warning",
        buttons: {
            confirm: {
                text: "Confirmar",
                value: "confirm",
                visible: true,
                className: "btn btn-success",
                closeModal: true
            },
            cancel: {
                text: "Rechazar",
                value: "cancel",
                visible: true,
                className: "btn btn-danger",
                closeModal: true
            }
        }
    }).then((value) => {
        switch (value) {
            case "confirm":
                // Mostrar el modal con el formulario y pasar el ID
                $('#confirmModal').modal('show');
                $('#formIdInput').val(id);
                $('#observation_div').hide();
                $('#formStatusInput').val('1');
                break;

            case "cancel":
                $('#confirmModal').modal('show');
                $('#formIdInput').val(id);
                $('#commercial_id_div').hide();
                $('#formStatusInput').val('2');
                break;

            default:
                break;
        }
    });
}

function validateAndSubmitForm() {
    // Limpiar errores previos
    document.getElementById('commercial_id_error').innerText = '';
    document.getElementById('observation_error').innerText = '';

    let valid = true;
    let formStatusInput = document.getElementById('formStatusInput').value;
    let commercialId = document.getElementById('commercial_id').value;
    let observationInput = document.getElementById('observation_input').value;

    // Validar según el valor de formStatusInput
    if (formStatusInput === '1') {
        // Si status es 1, commercial_id es obligatorio
        if (!commercialId) {
            document.getElementById('commercial_id_error').innerText = 'Seleccione un asesor comercial';
            valid = false;
        }
    } else if (formStatusInput === '2') {
        // Si status es 2, observation_input es obligatorio
        if (!observationInput) {
            document.getElementById('observation_error').innerText = 'Ingrese una observación';
            valid = false;
        }
    }

    // Si es válido, enviar el formulario
    if (valid) {
        document.getElementById('create-user-form').submit();
    }
}

