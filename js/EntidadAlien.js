/**********************************/
/* Juan Gabriel Rodríguez Carrión */
/*    jlabstudio.com       2011   */
/**********************************/

/**
* Esta entidad representa las naves alienígenas que quieren invadir la tierra
*/
function EntidadAlien(){
	//La velocidad de movimiento en el eje X de la nave alienígena
	this.velocidadMovimiento=75;
	//Puntero al juego para poder notificarle eventos
	this.juego;
	
	/**
	* Constructor de la clase
	*
	* juego es el puntero al juego
	* xIni es la coordenada X inicial
	* yIni es la coordenada Y inicial
	*/
	this.constructor=function(juego,xIni,yIni){
		this.constructorBase(40,25,"blue",xIni,yIni,"a");
		this.juego=juego;
		this.dx=-this.velocidadMovimiento;
	};
	/**
	* Controla el movimiento de la nave alienígena utilizando el tiempo delta
	*
	* delta es el tiempo en milisegundos transcurridos desde el último movimiento
	*/
	this.mover=function(delta){
		//Si la nave alcanza el margen izquierdo del mapa, notifica al juego
		//para cambiar de sentido y avanzar un poco
		if (this.dx<0 && this.x<10)
		{
			this.juego.actualizaLogica();
		}
		//Si la nave alcanza el margen derecho del mapa, notifica al juego
		//para cambiar de sentido y avanzar un poco
		if (this.dx>0 && this.x>750)
		{
			this.juego.actualizaLogica();
		}
		//Movemos la nave
		this.moverBase(delta);
	};
	/**
	* Actualiza la lógica del juego respecto a los aliens
	*/
	this.logica=function(){
		//Avanza un poco la nave verticalmente
		this.dx=-this.dx;
		this.y+=10;
		//Si alcanza la zona donde está la nave del jugador, la partida se acaba
		if (this.y>570)
		{
			this.juego.notificarMuerte();
		}
	};
	/**
	* Las colisiones de los aliens son manejadas en otro lugar
	*/
	this.colosionadoCon=function(otro){
	};
}
EntidadAlien.prototype = new Entidad();