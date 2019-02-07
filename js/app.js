var href = document.getElementsByClassName("tecla");
var panelres = document.getElementById("display");
var a;
var b;
var continua=true;
var operacion;
var resultado;

for (var i=0;i<href.length;i++) {
	href[i].onclick = function() {
		 //alert(this.id);
		 var contador = panelres.textContent.length;
		 if (contador>=8){

		}else if(contador>=1 || contador==0) {
			if(panelres.innerHTML=="0"){
				panelres.innerHTML="";
			}
				switch (this.id) {
					case "1":
						panelres.innerHTML = panelres.innerHTML + "1";
				 		break;
					case "2":
						panelres.innerHTML = panelres.innerHTML + "2";
					 	break;
					case "3":
						panelres.innerHTML = panelres.innerHTML + "3";
					 	break;
					case "4":
						panelres.innerHTML = panelres.innerHTML + "4";
						break;
					case "5":
						panelres.innerHTML = panelres.innerHTML + "5";
					 	break;
					case "6":
						panelres.innerHTML = panelres.innerHTML + "6";
						 break;
					case "7":
			 			panelres.innerHTML = panelres.innerHTML + "7";
			 		 	break;
			 		case "8":
			 			panelres.innerHTML = panelres.innerHTML + "8";
			 			 break;
					case "9":
			 			panelres.innerHTML = panelres.innerHTML + "9";
			 		 	break;
			 		case "0":
			 			panelres.innerHTML = panelres.innerHTML + "0";
			 			 break;
					default:
				}
		}

		 switch (this.id) {
			case "punto":
				var valor = encontrar(panelres.innerHTML,".");
				if (valor == -1){
					panelres.innerHTML = panelres.innerHTML + ".";
				}else{
					break;
				}
	 	 		break;
			case "mas":
				a = panelres.innerHTML;
				operacion = "+";
		 	 	limpiar();
		 	 	break;
			case "menos":
				a = panelres.innerHTML;
				operacion = "-";
				limpiar();
		 	 	break;
			case "por":
				a = panelres.innerHTML;
				operacion = "*";
				limpiar();
		 	 	break;
			case "dividido":
				a = panelres.innerHTML;
				operacion = "/";
				limpiar();
		 	 	break;
			case "igual":
				b = panelres.innerHTML;
				resultado = resolver(a,b);
				panelres.innerHTML=resultado;
				if (continua==true){
					a = b;
					continua=false;
				}
			 	break;
			case "on":
				resetear();
				break;
			case "sign":
				var valor_s = encontrar(panelres.innerHTML,"-");
				if (valor_s == -1){
					panelres.innerHTML = "-" + panelres.innerHTML ;
				}else if(valor_s==0){
					panelres.innerHTML = panelres.innerHTML.replace("-","");
					break;
				}
		 	default:
		 }
	}
}

function limpiar(){
	panelres.innerHTML = "";
}

function resetear(){
  panelres.innerHTML = 0;
  a = 0;
  b = 0;
  operacion = "";
	continua=true;
}

function resolver(a,b) {
	var res = 0;
	switch (operacion) {
		case "+":
			res = parseFloat(a) + parseFloat(b);
			break;
		case "-":
			res = parseFloat(a) - parseFloat(b);
			break;
		case "*":
			res = parseFloat(a) * parseFloat(b);
			break;
		case "/":
			res = parseFloat(a) / parseFloat(b);
			break;

		default:
	}
	return res;
}

function encontrar(cadena,caracter){
	var sientro = cadena.indexOf(caracter);
		return sientro;
	}
