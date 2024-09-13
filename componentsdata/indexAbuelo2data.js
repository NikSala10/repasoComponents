import * as components from './characterCard.js'
import  {data} from './data.js'
class AppContainer extends HTMLElement {
constructor () {
    super();
    this.attachShadow( {mode: "open"})  

} 


connectedCallback() {

    this.render()
} 


render() {
    this.shadowRoot.innerHTML = ``;

        data.forEach(element => {

            //en la siguiente vulta vas a agregar a lo que ya habia nates algo nuevo (+=)
            this.shadowRoot.innerHTML += `<character-card
                name=${element.name}
                gender=${element.gender}
            ></charcater-card>`
        });
    
}
}



customElements.define('app-container', AppContainer)
