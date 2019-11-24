


$(document).ready(function(){
    $("#enviar").click(function(){
        
        
      var clave = $("#contraseña").val();  
      var mes = $("#mes").val();  
      var genero = $("#genero").val();  
      var telefono = $("#telefono").val(); 
      if(clave.length<6)
      {
          alert("la clave deberia tener minimo 6 caracteres");
          return false;
      }
      if(mes ==''){
          
          alert("selecciones mes valido");
          return false;
      }
      if(genero =='')
      {
          alert("seleccione genero");
          return false;
          
      }
      if(telefono.length<9)
      {
          alert("ingrese un nuemro valido");
          return false;
          
      }
      alert("validaciones OK");
      
    });
    
        
        
    });
