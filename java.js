var imagenes=new Array(['imagenes/fabio.JPG','imagenes/fabio2.JPG'],
['imagenes/german.JPG','imagenes/german2.JPG'],
['imagenes/tellez.JPG','imagenes/tellez2.JPG'],);
var contador=-1;
 function rotarImagenes(){
     contador++
     document.getElementById("varia").src=imagenes[contador%imagenes.length][0];
      document.getElementById("varias").src=imagenes[contador%imagenes.length][1]
     }
onload=function(){
    rotarImagenes();
    setInterval(rotarImagenes,5000);
 }


