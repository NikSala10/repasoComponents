class CounterButton extends HTMLElement  {

    static get observedAtributes() 
    {
       
        return  ['img //estan vacios, no tienen ninguna infromacion, deben ir en minusculas']
    }
    constructor() {
        super();
        this.attachShadow( {mode: 'open'})
        this.isSelected = false;
    }

    connectedCallBack() {
        this.render();
    } 

    atributeChangedCallBack ( propName, oldValue, newValue
       
    ) {
        if (oldValue !== newValue) {
        this[propName] = newValue;
        this.render();
        }
    } 

    changeMessage() {
        this.isSelected = !this.isSelected
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = `
       
            <button>Counter: ${this.isSelected ? 'agragdo': 'agtregar a favoritos'}</button>
        `;

        this.shadowRoot.querySelector('button').addEventListener('click',() => this.incrementCount())
    }

}

customElements.define('message-button', Card);
export default Card;

