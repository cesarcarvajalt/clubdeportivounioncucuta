
    var imagenes1=new Array(['imagenes/2010.jpg'],
    ['imagenes/20101.jpg'],
    ['imagenes/20102.jpg'],
    ['imagenes/20103.jpg'],
    ['imagenes/20104.jpg'],
    ['imagenes/20105.jpg'],);
    var contador=-1;
     function rotarImagenes1(){
         contador++
         document.getElementById("varia1").src=imagenes1[contador%imagenes1.length][0];
          
         }
    onload=function(){
        rotarImagenes1();
        setInterval(rotarImagenes1,5000);
     }
   