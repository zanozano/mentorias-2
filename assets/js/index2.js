$(document).ready(function () {

    let historico = []

    let usuarios = [{
        username: 'admin',
        passsword: '555',
        email: 'admin@alkewallet.com',
        balance: 0,
    },
    {
        username: 'personal',
        passsword: '333',
        email: 'personal@alkewallet.com',
        balance: 0
    }
    ]

    let usuario1 = {
        username: 'admin',
        passsword: '555',
        email: 'admin@alkewallet.com',
        balance: 0,
    }

    let usuario2 = {
        username: 'personal',
        passsword: '333',
        email: 'personal@alkewallet.com',
        balance: 0,
    }

    $('#btnLogIn').click(function (event) {
        event.preventDefault();

        let user = $('#userName').val()
        let password = $('#password').val()

        if (user === usuario1.username && password === usuario1.passsword) {
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
                fecha: new Date().toLocaleString()
            }

            historico.unshift(operacion);
            console.log(historico);

            ///////////////!

            localStorage.setItem("historico", JSON.stringify(historico))



            // function borrarLocal() {
            //     return localStorage.clear()
            // }

            // setTimeout(borrarLocal, 5000)


            function recuperarLocal() {
                return JSON.parse(localStorage.getItem('historico'))
            }


            let historicoNuevo = recuperarLocal()

            let contenidoHTML = '';

            historicoNuevo.forEach(function (item) {
                contenidoHTML += `<tr>
                                    <td>${item.monto}</td>
                                    <td>${item.moneda}</td>
                                    <td>${item.fecha}</td>
                                </tr>`
            })


            setTimeout(function () {
                $('#dataLocalStorage').html(contenidoHTML);
            }, 1000);


        })
    })
})
