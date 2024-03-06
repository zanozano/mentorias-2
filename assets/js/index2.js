$(document).ready(function () {
    let historico = []


    $('#btnLogIn').click(function (event) {
        event.preventDefault();

        let user = $('#userName').val()
        let password = $('#password').val()

        if (user === 'admin' && password === '555') {
            $('#logInSuccess').removeClass('d-none')
            $('#logInSuccess').addClass('text-success text-center')
            $('#logInError').addClass('d-none')
            $('#socialNets').addClass('d-none')
            $('.switch').addClass('d-none')
            $('#deposits').removeClass('d-none')

        } else {
            $('#logInSuccess').addClass('d-none')
            $('#logInError').removeClass('d-none')
            $('#logInError').addClass('text-danger text-center')
            alert('Error en Log In')
        }

        $('#btnDeposito').click(function () {
            let monedaSeleccionada = $('#moneda').val()
            let deposito = $('#monto').val()

            let operacion = {
                moneda: monedaSeleccionada,
                monto: deposito,
                date: new Date().toLocaleString()
            }

            historico.unshift(operacion);
            console.log(historico);

            /* let arreglo = ['casa', 'perro', 'tomate'];
            let objeto = {inmueble: 'casa', mascota:'perro', verdura:'tomate'};

            console.log(arreglo[0]);
            console.log(arreglo[2]);

            console.log('objetos.... ');
            console.log(objeto['inmueble']);
            console.log(objeto.mascota); */


        })
    })
})
