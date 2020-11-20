document.addEventListener('DOMContentLoaded', function() {

    h2 = document.querySelector('h2')

    text = document.querySelector('input[type="text"]')

    submit = document.querySelector('input[type="submit"]')

    submit.addEventListener('click', function(event) {
        h3 = document.createElement('h3')
        h3.innerHTML = text.value
        h2.innerHTML = ("Você comentou")
        h2.appendChild(h3)

        event.preventDefault()
    })

})