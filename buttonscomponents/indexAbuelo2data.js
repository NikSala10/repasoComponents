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
    

        data.forEach(element => {
            this.shadowRoot.innerHTML += `<character-card
                name=${element.name}
                gender=${element.gender}
            ></charcater-card>
            <counter-button></counter-button>
            `
            
        });
        this.shadowRoot.innerHTML += `<counter-button></counter-button>`;
}
}



customElements.define('app-container', AppContainer)
