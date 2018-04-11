function validarFormulario(){
 
		var txtCorreo = document.getElementById('correo').value;
		
		var password = document.getElementById('pwd').value;
	console.log(password);
		var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/;
 
		//Test correo
		if(!(/\S+@\S+\.\S+/.test(txtCorreo))){
			alert('ERROR: Debe escribir un correo válido');
			return false;
		}
		
		if(!regex.test(password)){
			alert('Error: ingrese una clave valida');
			return false;
		}
	
		if(txtCorreo==""){
			alert("El campo correo esta vacio---");
			return false;
		}
	
		if(password==""){
			alert("El campo password esta vacio---");
			return false;
		}
	
		if(txtCorreo!="admin@admin.arg"){
			alert("El correo es: admin@admin.arg");
			return false;
		}
	
		if(password!="Asdd1254@sa"){
			alert("el password es: Asdd1254@sa");
			return false;
		}
 
 
		return true;
	}