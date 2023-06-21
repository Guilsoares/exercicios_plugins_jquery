$(document).ready(function(){

    $('#tel').mask('(00) 00000-0000', {
        placeholder: '(__) _____-____'
    })

    $('#cpf').mask('000.000.000-00', {
        placeholder: '___.___.___-__'
    })

    $('#cep').mask('00.000-000',{
        placeholder: '__.___-___'
    })

    $('form').validate({
        rules:{
            nomeCompleto:{
                required: true
            },
            eMail:{
                required: true,
                email: true
            },
            tel:{
                required: true
            },
            cpf:{
                required: true
            },
            endereco:{
                required: true
            },
            cep:{
                required: true
            }
        },
        messages:{
            nomeCompleto: 'Campo obrigatório',
            eMail: 'Campo obrigatório',
            tel: 'Campo obrigatório',
            cpf: 'Campo obrigatório',
            endereco: 'Campo obrigatório',
            cep: 'Campo obrigatório'
        }
        
    })

})