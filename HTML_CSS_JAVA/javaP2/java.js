// Submit no login, código da aula
document.addEventListener('DOMContentLoaded', function() {

    let login = document.querySelector('.login')

    let senha = document.querySelector('.senha')

    function update() {
        submit = document.querySelector('input[type="submit"]')

        if(login.value == '' || senha.value == '') {
            submit.disabled = true
        } else {
            submit.disabled = false
        }
    }


    login.addEventListener('input', function() {
        update()
    })

    senha.addEventListener('input', function() {
        update()
    })

    update()

})