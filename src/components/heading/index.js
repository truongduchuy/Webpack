import './index.css'

class Heading {
    render(){
        const body = document.querySelector('body')
        const h1 = document.createElement('h1')
        h1.innerHTML = 'Webpack is awesome'
        body.appendChild(h1)
    }
}

export default Heading