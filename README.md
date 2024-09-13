Node.js es un entorno de ejecución que permite ejecutar código JavaScript fuera del navegador, en el lado del servidor. Está basado en el motor V8 de Google Chrome (el motor que ejecuta JavaScript en el navegador), pero lo extiende para que puedas usar JavaScript para construir aplicaciones del lado del servidor, como servidores web, aplicaciones de tiempo real, herramientas de línea de comandos, APIs, entre otros. TIENE CONTENDIO DINAMICO
 
 
 POO, programacion orientada a objeto, un objeto es algo que tiene atribitos y metodos, osea caracterisiticas productos(por ej: productos, personas, paises) cosas que tienen metodos(ordenes, pedidos, envios) -> objeto
- una orden tiene caracterisiticas: fecha, mesa, sillas
- clase: cada, conjunto de onjetos similares, que constta de medtods y datos, cosa que tenga carcatrisiticas, idenfitifcarlo en problemas, (puede tener metodos o atributos, o los dos) algo que tenga carcteristicas se puede describir como clase. 
- ojetos tienen uncionalidades, funciones del objeto y de las clase, tienen datods que son comunes -> metodos
- ej: una clas euede ser libros: ese libro tiene cosas similares: atributos -> nombre, autor, pg q tine, editorial. atributos son datos que tienen los libros como tal
de esa clase, s epuede  rear objetos: -> obejtos son: el articulo, un libro Objeto -> 
- la clase tiene atributos -> nombre a tal
- de la clase se puede derivar al objeto
- clase- metodos, atributos o constructor
- clase prodcutos-> puede tener objetos como: -> helados, paletas, chcocnos -> esos objetos pueden tener cantidad, ide, precio, marca, nombre, soto, proveedor
- la clase se puede dividir en muchas cosas: helados o cosas frias
- una clase pued etener una herencia -> prodcutos seria el padre y la clase helados es el hijo -> la herencia es: 
- los atributos pueden tener un metodos -> printiar el producto, imprimir el producto
metodo eliminar, cambiar la cantidad, el id
- esos metoods proviene de la clase productos -> una clase hija q venga de la clase productos, los helados van a tener las miosmos atributos q la clase productos, y esas clase puede tener mas atrbutos, ellos heredan los atributos de la clase padre, pueden heredar loa syributos a loshelados
si se tiene mas cosas
- la clase helados tiene sus proios atributos: caracterisiticas de los helados ->(sabor, tamaño, tipo) pero tambn tiene los atributos de la clase q heredaorn
- la clase mecato -> (subclase de la clase) -> atributos -> (tipo, peso)
- las clases hijas pueden tener sus propios atributos y metodos.

- constructor: es un metodo del cual se pueden cerar ese objeto, sirve para crear objeto, depoende de la clase cmsotrcutor para crear el obejto (mew onjeto)

- el objeto: es cada uno de los productos por ej de helados -> objeto paletas, obj chocnos. cuando se tiene el objeto dde la clase se utiliza los atributos y metodos
de la clase e¿helados se crea un nuevo objeto, paletas -
< se ponen los atributos, tiene todas las caracteristic<s
se puede hacer un objeto con distintos valores de los atributos

- de una clase se pueden crear los objetos, osea que la clase es una plantilla de la cual se puede crear un objeto -> los atributoss de ese objeto son un grupo de variables, son cajitas en las cuales se van a meter cada unos de los datos del objeto

- una clase tiene metodos y atributos, que los metodos son las funciones de los objetos,
 los atributos son las caracterisiticas comunes que tienen los objetos- los obejtos se deruvan de la clase, 
ya que la clase es una plantilla para crear objetos


- en el html primero va la clase y despues el index



--> si es verdad haz esto, sino esto, ayuda a distinguir posibilidades
--> tengo o no tengo algo
--> se usa para comparaciones
--> si las cadenas de textos son iguales o diferentes 

null -> el valor que tiene es nulo
undefined - no definido 

bigint -z se usa para representar un entero mas grande, se coloca una n al final del numero

symbol -x cada que se ejecuta crea un symbolo unico y no repetible, no hay ninguno igual a el, cada symbolo es diferente, al hacer una comparacion entre el ismo symbolo va a dar false
 

tipos de datos:
-numer
-string
-boolean
-null
-undefined
-bigint
-symbol

estructuras de control IF, WHILE, FOR
If -> si cumples esta condidiocn, sucede tal cosa



- el consolo log, e suna funcion, funcionalidad asignada
- una function s epuede reutilizar, conjunto de instrucciones
- las llaves lo que hace es separar en duferentes ambitos el codigo, ejecucion
-declarando la funcion
-hay dos formas de declarar una fncion: -declararcion o -expresion
 - function: conjunto de instrucciones reutilizables 


parametros y argumentos:
-los parametros que recibe la funcion
-arguemntos: valor que le estamos pasando




MODULES 


MODULO: pieza mas pequeña, objetos o funciones para usarlo en el mismo proyecto o código.

PAQUETE: grupo de módulos que esta contenido en un archivo o en otros archivos, y sirve para tener funcionalidades que vamos a usar.

LIBRERIA:  varios paquetes, o paquete que se publica pra que alguien mas lo utilice.

FRAMEWORK:  esquema de trabajo, nos dice como debemos trabajar, que lineamientos seguimos, convenciones para trabajar codigo. 

NPM: administrador que permite instalar librerias, dependecnias, etc

PACKAGE.JSON:  toda la infromacion del proyecto, version, git
PACKAGE LOCK JSON: descripcion de todos los paquetes o dependcnias que se instalan en el proyecto como un archivo de derechos de autor.

npm init -y: permite saltar las preguntas del inicio

SCRIPTS: sirven para ejecutar acciones de las dependcias: 
--- npm start: comando para inicializar el proyecto
--- todos los demas scripts que creemos o queramos tiene que llevar la palabra run antes del nombre del comando para ejecutarse.


DEV-DEPENDECNIAS: dependencias del  desarrollador

DEEPENDENCIAS: necesarias en el proyecto que si o si, necesita para funcionar. 

MODULO: función 

IMPORT DEFAULT: export por defecto

para exportar solo uno que hay en el archivo: export default nombrefuncion
para mas de uno: se utiliza export antes de la funcion




WEB COMPONENTS:

--Es una tecnología que permite crear tecnología reutilizable, nos permitir crear cosas que podemos usar mas adelnante, no solo codigo, tambien visual, se crea a partir de html, css y js. Se llama donde los necesitamos y se puede cambiar la información. Se crea una sola voz, y se repite cunatas veces sea necesario. Tienen que estar diseñados para recibir lo que necesitemos.

--trabajan recibiendo propiedades, aquello que necesitamos diferente en el componente. componentes reutilizables. Ahorramos tiempo, ordenado, eficiente para el procesamiento de la pagina.

--Es una cajita que se puede reutilizar, todo funciona conjuntamente, ponemos esa cajita donde la necesitemos. 

1. Creamos los archivos, html, css, js
2.  se tiene que registrar los componentes, ponerle un nombre



NODE --> empezar a crear proyectos, primera herramientas de los proyectos. Es un ambiente de trabajo para java script en tiempo real, todo lo que necesitamos para correr un proyecto de js. 
-Crear plataformas que sean escalables, va creciendo y crea plataformas más grades, node hace que el código o la página no se caiga.
Para evitar que en tiempo real se colpae con tantos procesos
trabajar sin hilos  en NODEJS

NODE --> entender la navegacion en las aplicaciones --> node para aplicaciones movil, aparte de web
NODE es el mesero, en vez de coinar la comida que es la aplicaicon final, el es quien toma las ordes, osea es el mesero, tkma la peticion del uasrio, para que el navegador la proceso
la comida es la parte visual -->
node--> recibir,llevar y traer petiicones detras de la palicacion
es una herrmaientas que ayude que los servidores se comuniquen de manera eficiente, se crea de muhcos usuarios haciendo pedidos
ayuda que la comuniccaion entre servidor y usario sea eficiente 
corre en un motor que se llama V8 creado por google --> ejecuta todo esos procesamientos --> lo que hace es coger el codigo, conviete eso ne un lenguage que la maquina entiende y es mucho mas faicl de entender

--> crear servidores, para poder hacer APIS 
-->APIS base de datos alojado en un servidor, al cual se le hace una petición para poder trabajar con el


NODE --> Module, library, framework, package --> EN EL PARCIAL, DIFERENCIAS 

Modulos: pieza del lego mas chiquita, base de todo, conjunto de funciones o objetos en java script, de alguna u otra froma se queria exportar para no repetir codigo, cuando se vaya a volver a usar 

cuando se exporta una funcion o un objeto --> funciones y obejtos en javascrt para volverlos a exportar --> MODULO

PAQUETE: --> uno o mas modulos agrupados, bolsa de varias piezas de legos: un paquete son operaciones matematicas(sumar,restar,dividr), estan agrupado por un objetivo, CONJUNTO DE MODULOS -< esta en el codigo

LIBRERIA --> son paquetes que han hecho los desarolladores y han publicado --< NPM -> paquetes de todo, pag web --> en el que se publica se convierte en library al moemnto en subirlo

codigo que ha escrito alguien mas y lo publico alguien, son paquetes que sirven para varias cosas

FRAMEWORK --> un marco de trabajo, empresa de desarrollo y vamos a trabajar con este lineamiento, vamos acerca los comits con esta sintaxis. Objetivos específicos para los proyectos 

REACT -Z es una librería y al mismo tiempo framework
YOU

NODE PACKAGE MANAGER
le damos las rdendes y el se encarga de lo que hay por detras, se puede insalar librerias d ealguien mas, nace a partir del oackage, trabaja con el codigo d eotras personas. --> pagina oficial NPM

por defecto de js --> permite publicar, instalar y usar librerias

NPM--< es como si fuera un terminal --< en la terminal --> npm
dependencias en el proyecto

PACKAGE.JSON -->  quien conien toda la infromacion del proyeto, nombre, version, en que git esta, en ese proyecto tiene instalaadas esta sdependecnas para dalr creito al autor. Estoy utilizando el codigo de esta persona qui en este ptoyecto
documento ofical donde esta toda la descricion del proyecto

comando --> npm init ---> para crear un proyecto de NODE, inicializar el proyecto

PACKAGE-LOCK.JSON --> descripcion mucho mas detallada de las dependenais que stan instaladas, detalle de toda la descripcion d e eses pauqte , s genera automaicmante. SOLO se ve cunaod se instalan DEPENDECIAS en el PROYECTO 

npm init -y -- para que no aparezcan todas esa preguntas


SCRIPTS --> comdando para ejectar codigo --> acciones para iniciar proyecto, comandos para que sepa que jecutar
npm start --> comdando para ejetutar el codigo --> solo funciona con START --> no,bre clave a una linea mucho mas larga
para ptro script se usa -> npm run (test, nombre del script)
todo los diferentes a start van con run

BUILD --> procesar tods los archivos y dejarlos listos para que le servidor los --> cuando se trabaja con libreria

TEST --> se corren todos los test del codigo

DEPENDENCIAS --> librerias, apquetes o modulos que se instalan en el proecto --> dependencia que si o si se necsitan en el proyecto

DEPDNECIAS DEL DESARROLLADOR --> dependencias que son ayudas para el desarrollador, se borran cuando se publica el proyecto. EL PROYECTO CAPAZ DE VIVIR SIN ELLA --> ahi van todos, te muestran cosas, te ayudan en el codigo a autocompletatr, etc

para instalar una dependecnai --> COMADO --> npm install (nombre de la dependencia) para hacer la diferencia entre la dendencia le agrego --> COMANDO --> -D (dependencia del desarrollador) otra opción de comando -->  -dev



la dependecian server: es para qu eno hayan incoveniente sa la hora de exportar los modulos
npm i serve -> abrir la depemdemcia

para desistalar es npm unistall serve()nombre d ela depemdcia

npm i serve -D --> dependecnai del desarrollador

la carpeta node_modules --> no se sube al git
al eliminar esa carpeta en el package.json se puede colver a instalar con el comando npm i

no hay que tener meido al borrarla 

START: inicializa el protecto por ej, start: serve  ----> en un script en estart se pone el nombre de la deoenccia

con control c --> se cierra el servidor, se desconecta la coonexion, se hace control c en la terminal
o simplemente elimnado el terminal

la deencia nodemom --> recarga los cambios automaticamnet

LODASH --> tiene funciones para trabajar con fechats, matemticas, cadena d etexto --Z EVITAR
y al inicializarlo se hace con el comando npm serve(nombre de la depencia)



Tecnología que permite crear codigo reutilizable, cada función tiene nos permite crear cosas que nos permite usar mas adelante, mas que todo, visual, crear una pieza, que nos permite crear otros componentes. Codigo funcional y visual, que se necesita en el resto de la página.

Trabajan recibiendo propiedades, aquello que necesitamos diferentes en el proyecto. 

Componente --> creado una sola vez, pero que se repite cuantas veces sea necesario. Creado de tal manera que nos permita añadir o modificar las propiedades.  Componentes reutilizables que se pueden reutilizar, mas ordenado. 

Web component --> js, html, css --> junciona ocmo un conjunto, ponemos esa cajita donde queremos en la pag web.

1. Pensar en el componente, que queremos que haga, como es visualmente, va a hacer tal cosa, clikeable, solo texto.
2. Crear archivo html
3. definir propiedades y metodos
4. todos los componentes se tienen que registrar, los componentes se crean de elementos ya creados desde el html. Darles un nombre.

FILE SYSTEM 
estructura de carpetas más organizada
Carpetas --> crear los nombres específicos de esa carpeta.

Carpeta Public --> el servidor va a air a buscar para ejecutar
SRC --> rutas



Condicionales: Como if, else, else if, permiten ejecutar bloques de código según condiciones.
Bucles: Como for, while, do...while, permiten repetir bloques de código varias veces.

Arreglos (Arrays): Son estructuras de datos en las que puedes almacenar múltiples elementos en un solo objeto. Cada elemento del arreglo tiene un índice numérico. Se pueden utilizar para almacenar listas de datos.
Funciones: Son bloques de código que pueden ejecutarse cuando se "invocan" o llaman. Las funciones pueden aceptar argumentos (datos de entrada) y devolver valores.

En JavaScript (y en muchos otros lenguajes de programación), un objeto es una estructura que permite almacenar y organizar datos en forma de pares clave-valor. Cada clave es una propiedad o atributo del objeto, y el valor puede ser cualquier tipo de dato: números, cadenas, arreglos, funciones u otros objetos.





REPOS: 
https://github.com/ASunart/DCA_PreParcial_1.git
https://github.com/LeiderCalvo/DCA/blob/08_webComponentsWithData/public/src/data/dataCards.js
https://github.com/pangar03/Repaso-quiz-1
https://github.com/davidgarciamunozz/Arrays-One-Compiler
https://github.com/Majorosas16/Preparcial/blob/master/README.md

BUILD: PROCESA TODO SLOS ARCHIVOS Y LOS LISTOS EN EL SERVIDOR
TEST: TESTEA SI HAY ERRORES
