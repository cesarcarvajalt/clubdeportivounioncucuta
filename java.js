var imagenes=new Array(['imagenes/fabio.JPG','imagenes/fabio2.JPG',"ENTRENADOR"],
['imagenes/german.JPG','imagenes/german2.JPG',"ENTRENADOR"],
['imagenes/tellez.JPG','imagenes/tellez2.JPG',"ENTRENADOR"],
['imagenes/andelfo1.JPG','imagenes/andelfo2.JPG',"PSICOLOGO"],);
var contador=-1;
 function rotarImagenes(){
     contador++
     document.getElementById("varia").src=imagenes[contador%imagenes.length][0];
      document.getElementById("varias").src=imagenes[contador%imagenes.length][1];
      document.getElementById("text").innerHTML=imagenes[contador%imagenes.length][2]
     }
onload=function(){
    rotarImagenes();
    setInterval(rotarImagenes,5000);
 }


