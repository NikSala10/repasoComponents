import * as components from './card.js'

class AppContainer extends HTMLElement {
//clase que se llama appcontainer) extendes HTMLElement(que va a utilizar los metodos y funciones que existen en html. casi con PO

//metodos de esa clase

constructor () {
    //incializar, que HTMLElement, como estamos extendiendo del html, lo que hace es ver que HTMLELEMNTS tome esos valores o recursos, se hace a traves de:
    super() //ya podemos utilizar los elemntos html

    // crea una sombra en modo abierto: en x momento vas a incluir ese elemnto que se pueda incluir en el DOM, html,, desde el  js se manda al html. Permite que se encuentre en el dom. SIEMPRE VA EN MODO ABIERTO.

    // attachShadow : crea una sombra, crea una referencia. Deja utilizar como etiquta ya que deja incluirlo en el DOM
    this.attachShadow( {mode: "open"}) // encapsular todo el cpdigo y permitir que el dom encuentre nuestra nueva clase. 
} 


connectedCallback() {
    // metodo que hace que: cuando el componente se carga en el DOM  hace lo que le indiquemos. Cuando la etiqueta aparece en el DOM. Cuando aparece por primera vez en el DOm el componente. el va a ejecutar lo que tengas aqui. el va a ejecutar el metodo

    // cuando crees la etiqueta en el DOM haz el render:
    this.render()
} 


render() {
// render se comporta como nuestro html
    // quiero ver algo


// a esa sombra que se creo a alla ariba, le estamos diciendo que en el hmtl de ella, le vamos a agregar algo. COMILLAS GRAVES EN EL INNER
    this.shadowRoot.innerHTML = `
    h1`
}
}

//estamos creando html desde js, haciendo uso de lo que ya existe en el html una nueva clase o un nuevo componente que queremos reutilzar mas adelnante.

customElements.define('app-container', AppContainer)
// cuando alguien utilice esa etiqueta lo que hace es utilizar esa clase APPCONTAINER


// Card con la capacida de verse igual pero con contendio distinto