(function() {


    var validar = function(e) {


        var formulario = document.getElementsByName('formulario')[0];
        var elementos = formulario.elements;
        var boton = document.getElementById('btn');

        var validarNombre = function(e) {
            if (formulario.nombre.value == 0) {
                alert("completa el nombre");
                e.preventDefault();
                console.log('aaqui estoy vivo1');
            }
        };

        var validarRadio = function(e) {
            if (formulario.sexo[0].checked == true || formulario.sexo[1].checked == true) {} else {
                alert("Completa el campo sexo");

                e.preventDefault();
                console.log('aaqui estoy vivo2');
            }
        };

        var validarCheckbox = function(e) {
            if (formulario.terminos.checked == false) {
                alert("acepta los terminos");
                e.preventDefault();
                console.log('aaqui estoy vivo3');
            }

        };
        validarNombre(e);
        validarRadio(e);
        validarCheckbox(e);

    };

    formulario.addEventListener("submit", validar);



}())