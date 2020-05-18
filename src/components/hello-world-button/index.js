import './index.scss'

class HelloWorldButton {
    buttonClass = 'hello-world-button'

    render() {
        const body = document.querySelector('body')
        const button = document.createElement('button')
        button.classList.add(this.buttonClass)
        button.innerHTML= 'Hello-world'
        button.onclick = function() {
            const textElement = document.createElement('p')
            textElement.classList.add('hello-world-text')
            textElement.innerHTML = 'some text'
            body.appendChild(textElement)

        }
        body.appendChild(button)
    }
}

export default HelloWorldButton