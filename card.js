class Card extends HTMLElement  {

    static get observedAtributes() //observa los atributos, cuales son los que voy a mandar de forma dinamica para que mi componente cargue
    // crear los atributos. todos los componentes hijos tienen que tener propiedades para poder evaluar que necesitamos o que se va a cambiar, que vamos a ahcer de forma dinamica. Atributos o propiedades a observar, decir cuales son esas propiedades: 
    {
        // propiedades que sean dinamicas
        return  ['img //estan vacios, no tienen ninguna infromacion, deben ir en minusculas']
    }
    constructor() {
        super();
        this.attachShadow( {mode: 'open'})
        //a esta sombra le voya a gergar el html. mas abajo. si estuviera en modo cerrado no podria accdeder a la sombra ni incustrar elemntos html a esa sombra. por eso son importantes todos los metodos
    }

    connectedCallBack() {
        this.render();
    } // nos permite saber cuando el componente ya esta cargado en el DOM

    atributeChangedCallBack ( propName, oldValue, newValue
        //Cuanod un valor se ca,bia el activa este metodo. escuchar el cambio de un atributo
        // activarse cuando algunos de los atributos cambien. actualiza los cambios. se activa cuando un atributo esta siendo observado. trabaja de la mano con sattic, son hermanos
    ) {
        if (oldValue !== newValue) {
        this[propName] = newValue;
        this.render();
        }
    } 


    render() {
        this.shadowRoot.innerHTML = `
        //siempre sea dinmaico el contenido, comillas inversas. TEMPLATE STRINGS
            // <h1></h1> // template strings ${ this.img}//permite utilizar ahi dentro variables -> this,img}
        `
    }

}

customElements.define('product.card', Card);
export default Card;

