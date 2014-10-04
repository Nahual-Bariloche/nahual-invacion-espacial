/**********************************/
/* Juan Gabriel Rodr�guez Carri�n */
/*    jlabstudio.com       2011   */
/**********************************/

/**
 * Una entidad representa cualquier elemento que puede aparecer en el juego. La
 * entidad es responsable de resolver colisiones y moviminetos basados en una serie
 * de propiedades definidos en la subclase o en una clase externa.
*/

function Entidad(){
	//La coordenada x actual
	this.x;
	//La coordenada y actual
	this.y;
	//La velocidad actual en el eje X (pixel/segundo)
	this.dx=0;
	//La velocidad actual en el eje Y (pixels/segundo)
	this.dy=0;
	//El ancho del rect�ngulo usado para esta entidad para calcular colisiones, y dibujarse
	this.ancho;
	//El alto del rect�ngulo usado para esta entidad para calcular colisiones, y dibujarse
	this.alto;
	//El color con el que pintar esta entidad
	this.color;
	
	//Para evitar detectar colisiones de dos objetos del mismo tipo
	this.tipo;
	/**
	* El constructor de una entidad basado en una imagen sprite y una coordenada
	*
	* anchoIni es en ancho que tiene la entidad
	* altoIni es en alto que tiene la entidad
	* ColorIni es en color que tiene la entidad
	* xIni es la coordenada x inicial
	* yIni es la coordenada y inicial
	* tipoIni es el tipo de objeto que estamos creando
	*/
	this.constructorBase=function(anchoIni, altoIni, colorIni,xIni,yIni,tipoIni){
		this.ancho=anchoIni;
		this.alto=altoIni;
		this.color=colorIni;
		this.x=xIni;
		this.y=yIni;
		this.tipo=tipoIni;
	};
	/**
	* Solicitamos que esta entidad se muevaa seg�n el tiempo transcurrido.
	*
	* delta es el tiempo en milisegundos transcurrido.
	*/
	this.moverBase=function(delta){
		//Actualizamos las posiciones de las coordenadas
		this.x+=(delta*this.dx)/1000;
		this.y+=(delta*this.dy)/1000;
	};
	/**
	* Establece una velodidad de movimiento en el eje Y
	*
	* dxIni es la velocidad en el eje X en (pixels/segundo)
	*/this.setVelocidadHorizontal=function(dxIni){
		this.dx=dxIni;
	};
	/**
	* Establece una velodidad de movimiento en el eje Y
	*
	* dyIni es la velocidad en el eje Y en (pixels/segundo)
	*/this.setVelocidadVertical=function(dyIni){
		this.dy=dyIni;
	};
	/**
	* Devuelve el valor de la velocidad horizontal de esta entidad
	*/
	this.getVelocidadHorizontal=function(){
		return this.dx;
	};
	/**
	* Devuelve el valor de la velocidad vertical de esta entidad
	*/
	this.getVelocidadVertical=function(){
		return this.dy;
	};
	/**
	* Devuelve la coordenada X
	*/
	this.getX=function(){
		return this.x;
	};
	/**
	* Devuelve la coordenada Y
	*/
	this.getY=function(){
		return this.y;
	};
	/**
	* Devuelve el tipo de objeto
	*/
	this.getTipo=function(){
		return this.tipo;
	};
	/**
	* Dibuja esta entidad en el contexto gr�fico indicado
	*
	* contexto es el contexto gr�fico (canvas) en el que dibujar
	*/
	this.dibujar=function(contexto){
		contexto.fillStyle = this.color;  
		contexto.fillRect (this.x, this.y, this.ancho, this.alto);
	};
	/**
	* Comprueba si esta entidad y la que nos pasan, est�n colisionando
	*
	* otro es la entidad con la que comprobar si colisionamos
	*/
	this.colision=function(otro){
		if (this.x + this.ancho < otro.x) {
			return false;
		}
		if (this.y + this.alto < otro.y) {
			return false;
		}
		if (this.x > otro.x + otro.ancho) {
			return false;
		}
		if (this.y > otro.y + otro.alto) {
			return false;
		}
		return true;
	};
}