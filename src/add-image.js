import book1 from './book1.png'

function addImage() {
    const img = document.createElement('img')
    img.alt = 'book'
    img.width = 300
    img.src = book1

    const body = document.querySelector('body')
    body.appendChild(img)
}

export default addImage