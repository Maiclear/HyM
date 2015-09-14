
//	TAREA ------------------
/// CONSTRUCTOR MONSTRUO /////

function Monstruo(nombre,raza,salud, ataque){
			this.nombre = nombre;
			this.raza = raza;
			this.salud = salud;
			this.ataque = ataque;
			}

var ufthak = new Monstruo('Ufthak','Orco',200,30);
var snaga = new Monstruo('Snaga','Orco',200,200);
var ugluk= new Monstruo('Uglúk','Uruk-hai',400,500);
var saruman = new Monstruo('Saruman','Maiar',500,1000);
var maiclear = new Monstruo('MaiClear','Marciana',10000,1000);


///constructor heroe//////

function Heroe(nombre, raza,salud, ataque,experiencia, nivel){
			this.nombre = nombre;
			this.raza = raza;
			this.salud = salud;
			this.ataque = ataque;
			this.experiencia = experiencia;
			this.nivel = nivel;

			}
var galadriel = new Heroe('Galadriel','Elfa',500,100,500,1);

//prototipo de ataque mosntruo////

Monstruo.prototype.ataca = function (heroe) {
	if (heroe.salud >0){
		heroe.salud = heroe.salud - this.ataque;
		if(heroe.salud <=50){
			alert('Energía baja');
		}
		if(heroe.salud <= 0){
			console.log(heroe.nombre + ' '+ this.nombre +' '+'te ha aniliquilado... ! VUELVE A INTENTARLO ACTUALIZANDO LA PÁGINA!');
		}
	}
};


//prototipo de ataque heroe////
Heroe.prototype.ataca = function (monstruo) {
	if (monstruo.salud >0){
		monstruo.salud = monstruo.salud - this.ataque;

		if(monstruo.salud <= 0){
			console.log(monstruo.nombre  +' fue destruido');
			console.log('Congratulaciones '+ this.nombre +' aumentaste tu experiencia en ' + monstruo.ataque);
			this.experiencia = this.experiencia + monstruo.ataque;
			if(this.experiencia >= this.nivel*1000){
				this.nivel = this.nivel + 1;
				this.salud = this.salud*this.nivel;
				this.ataque = this.ataque*this.nivel;
				console.log(this.nombre + ' has subido al nivel '+ this.nivel + ' !!!');
				console.log('Aumentaste tu salud en '+ this.salud + ' y aumentaste tu ataque en '+this.ataque);
		}
		}

	}

};

//constructor POCION//
function Pocion(energia){
			this.energia = energia;

			}

var brebajeverde = new Pocion(100);
var brebajerojo	 = new Pocion(50);




//prototipo de pocion

Heroe.prototype.tomapocion = function(pocion){
		this.salud = this.salud + pocion.energia;
		console.log('Slurp!! Magnífico has aumentado tu energía a ' + this.salud);
};