//Comentários

document.addEventListener('DOMContentLoaded', function() {

    ul = document.querySelector('.barra')

    text = document.querySelector('input[type="text"]')

    submit = document.querySelector('input[type="submit"]')

    submit.addEventListener('click', function(event) {
        li = document.createElement('li')
        li.className = "meudeus";
        li.innerHTML = text.value
        ul.appendChild(li)

        event.preventDefault()
    })

})