document.addEventListener('DOMContentLoaded', function() {

    p = document.querySelector("p")

    text = document.querySelector('input[type="text"]')

    submit = document.querySelector('input[type="submit"]')

    submit.addEventListener('click', function(event) {
        h2 = document.createElement('h2')
        h2.innerHTML = ("Você comentou")
        p.appendChild(h2)
        h3 = document.createElement('h3')
        h3.innerHTML = text.value
        h2.appendChild(h3)

        event.preventDefault()
    })

})