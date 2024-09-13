import * as components from './characterCard.js'
import  {data} from './data.js'
class AppContainer extends HTMLElement {

    //CREO UN ARREGLO DE CARDS VACIO
    cards= [];
constructor () {
    super();
    this.attachShadow( {mode: "open"})  

    data.forEach(element => {
        //CREO UN ELEMENTO EN ESTE DOCUMENTO DE TIPO CARCATER-CARD (MI COMPONENTE)

        //OWNERDOUMENT: SIGNIFICA QUE SE CRRE EN ESTE DOCUMENTO EN EL QUE ESTAMOS TRABAJANDO:     const card = this.ownerDocument.createElement('character-card');


        //por cada objeto teniene que crearun compojete y pasarle la info de la data. En cada vuelta que tu hagas vas a crear una constante llamada card

        // this.ownerdocument: en este documento que estoy trabajando vas a crear un elemnto y el eemnto que vas a crear va a ser la etiqueta del componente. lo crea para crealo en este mismo bloque de codigo. 1- creame  un elemnto charactercard en este doumento. 2- a ese elemnto que acanas de crear le asigno las propiedades necesarias para que funcione.
        const card = this.ownerDocument.createElement('character-card');

        // LE INDICAMOS QUE VALORES VA A GUARDAR SOBRE ATRIBUTOS ESPECIFICOS
        card.setAttribute('name', element.name)

        // setatrbite: permite pasarle propiedades: ''
        // cada que hace el forecha esta obteniendo un objeto, en la priera vuelta el obtiene el primero, me crea una card, que es mi componente, y a ese componente en la porpeida nombre le asigna lo que haya en elemnt.name y as sucesivamente.

        //lo guardo en el arreglo
        //UNA VEZ CREAMOS EL COMPONNETE Y SETEAMOS LOS ATRIBUTOS, LO GUARDAMOS EN EL ARREGLO CARDS
        this.cards.push(card)
    });
} 


connectedCallback() {

    this.render()
} 


render() {


    this.shadowRoot.innerHTML = ``;

    this.cards.forEach(characterCard => {
        this.shadowRoot.appendChild(characterCard)
    });
}
}



customElements.define('app-container', AppContainer)
