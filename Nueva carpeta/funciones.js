
	function obtenerTabla(){
		var select = document.getElementById('cosotabla');
		select.addEventListener('change',
  function(){
    var selectedOption = this.options[select.selectedIndex];
    console.log(selectedOption.value + ': ' + selectedOption.text);
	if(selectedOption.value === "cliente"){
		document.getElementById("tablaCliente").style.display='block';
		document.getElementById("tablaProveedor").style.display='none';	
	}else if(selectedOption.value === "proveedor"){
		document.getElementById("tablaCliente").style.display='none';
		document.getElementById("tablaProveedor").style.display='block';	
	}else{
		document.getElementById("tablaCliente").style.display='none';
		document.getElementById("tablaProveedor").style.display='none';
	}
  });

		

	}

	function leerGET() {
		var cadGET= location.search.substr(1,location.search.length);
		var arrGET= cadGET.split("&");
		var asocGET= {};
		var variable= "";
		var valor= "";

		for (i=0;i<arrGET.length;i++) {
			var aux=arrGET[i].split("=");
			variable= aux[0];
			valor=aux[1];
			asocGET[variable]=valor;
			}
		return asocGET;
	}
		
	function escribir() {

		var paresVarValor=leerGET();
		var tipoFormulario= paresVarValor["tipo"];
		console.log("hola"+tipoFormulario);

		if (tipoFormulario==="cliente") {
			document.getElementById("tabla1").style.display='block';
			document.getElementById("tabla2").style.display='none';
			document.getElementById("nombre").innerHTML=paresVarValor["nombre"];
			document.getElementById("correo").innerHTML=paresVarValor["correo"];
			document.getElementById("documento").innerHTML=paresVarValor["documento"];
			document.getElementById("metodo").innerHTML=paresVarValor["metodo"];			
			document.getElementById("pago").innerHTML=paresVarValor["plata"];
		}

		else if (tipoFormulario==="proveedor") {
			document.getElementById("tabla1").style.display='none';
			document.getElementById("tabla2").style.display='block';
			document.getElementById("nombreP").innerHTML=paresVarValor["nombreP"];
			document.getElementById("correoP").innerHTML=paresVarValor["correoP"];
			document.getElementById("cedula").innerHTML=paresVarValor["cedula"];
			document.getElementById("metodoP").innerHTML=paresVarValor["metodoP"];			
			document.getElementById("cobro").innerHTML=paresVarValor["plataP"];	
		}
	}
















