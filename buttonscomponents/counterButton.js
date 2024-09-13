class CounterButton extends HTMLElement  {

    static get observedAtributes() 
    {
       
        return  ['img //estan vacios, no tienen ninguna infromacion, deben ir en minusculas']
    }
    constructor() {
        super();
        this.attachShadow( {mode: 'open'})
        this.count = 0;
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

    incrementCount() {
        this.count ++;
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = `
       
            <button>Counter: ${this.count}</button>
        `;

        this.shadowRoot.querySelector('button').addEventListener('click',() => this.incrementCount())
    }

}

customElements.define('cpunter-button', Card);
export default Card;

