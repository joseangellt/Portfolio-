
document.addEventListener('DOMContentLoaded', function() {

     
   const presentation = document.getElementById('_presentation');
   const content = document.getElementById('_content');

   // Verificar si es la primera vez que se entra a la página

   let visitedValue = sessionStorage.getItem("visited");
      
   if (visitedValue === null) {
     sessionStorage.setItem("visited", "true");
     //Desvanecer presentation y mostrar content
     setTimeout(function() {
          presentation.style.opacity = '0';
          setTimeout(function(){
               presentation.style.display = 'none';
               content.style.display = 'block';
               setTimeout(function(){
                    content.style.opacity = '1';
               }, 50);
          }, 1000);
   }, 2000);
   
} else {

     presentation.style.display = 'none';
     content.style.display = 'block';
     content.style.opacity = '1';
}


});


//Capturar error del video

//TODO REVISAR CÓDIGO (console arroja un error.)
document.addEventListener('DOMContentLoaded', () => {
     const video = document.getElementById('galaxia');
     video.addEventListener('', () => {
          console.error('Error en el video', video.error);
     });
});


//Creando clase preview para no crear un elemento html de cada proyecto diferente.
//Desplegare la info de diferentes previews utilizando el mismo elemento con la ayuda de un arrayList[]

class Preview {
     constructor(titulo, video, descripcion){
          this.titulo = titulo;
          this.video = video;
          this.descripcion = descripcion;
     }

     getInfo(){
          return `titulo: ${this.titulo}, Video: ${this.video}`;
     }
}


let previewsArray = [];

//Creando instancias de previews

let locationApp = new Preview("Location App", "Previews/LocationApp.mp4", "Esta es un app sencilla que cree y lo que hace es conectarse a la API de google y me muestra la ubicación exacta en la que se encuentra el dispositivo.");
let musicAppUi = new Preview("Music App UI", "Previews/MusicAppUi.mp4", "Esta es la UI de un app de música que hice utilizando Jetpack Compose.");
let recepieApp = new Preview("Recepie App", "Previews/recepieApp.mp4", "Esta es un app sencilla que creé su función principal es que descarga información de una API de recetas de comidas en la web.");
let calculateYouAgeInMinutes = new Preview("Calculate Your Age In Minutes", "Previews/AgeInMinutes.mp4", "Esta es un app sencilla que cree para calcular tu edad en minutos.");
let fallDawn = new Preview("Fall Dawn", "Previews/Falldawn.mp4", "Este es una página web de venta de ropa contemporanea. Este proyecto lo realice como un proyecto final para una materia de la Universidad.");
let quizApp = new Preview("Quiz App", "Previews/QuizzApp.mp4", "Este es un juego que hice de trivias de adivinar las banderas del mundo");
let drawingApp = new Preview("Drawing App", "Previews/DRawingApp.mp4", "Esta es un app de dibujos para niños que creé utilizando canvas y Bitmap entre otros.");
let sevenMinutesWorkout = new Preview("7 Minutes Workout", "Previews/7minutesworkout.mp4", "Esta es un app sencilla que cree para ayudar a una persona a completar un a rutinas de ejercicios rápida y en casa. Cuenta con unas funcionalidades extra como una calculadora de Indice de Masa Corporal (BMI), así como un historial que registra todas las rutinas que has completado con fecha y hora.");
let portfolio = new Preview("Portfolio", "Previews/portfolio.mp4", "Este es mi portafolio como desarrollador, lo cree para mostrar mis habilidades y capacidades como desarrollador.");

//Agregar las instancias al array
previewsArray.push(locationApp);
previewsArray.push(musicAppUi);
previewsArray.push(recepieApp);
previewsArray.push(calculateYouAgeInMinutes);
previewsArray.push(fallDawn);
previewsArray.push(quizApp);
previewsArray.push(drawingApp);
previewsArray.push(sevenMinutesWorkout);
previewsArray.push(portfolio);



function setPreviews(){

     //seleccionamos todas las <a> de clase "item".
     var previews = document.querySelectorAll(".item");

     //obtener id de cada <a>.
     previews.forEach(function(item) {
          item.addEventListener('mouseover', function() {
               var anchorId = item.id;
               
               //asignando los el titulo y la imagen al preview correspondiente
               document.getElementById("tituloProyecto").textContent = previewsArray[anchorId-1].titulo;
               document.getElementById("videoProyecto").src = previewsArray[anchorId-1].video;
               document.getElementById("descripcion").textContent = previewsArray[anchorId-1].descripcion;

               //Efecto de aparecer
               var preview = document.getElementById("_preview");
               preview.style.display = "inline-block";
               setTimeout(function(){
                    preview.style.opacity = "1";
               }, 1);

               //efecto de desaparecer
               document.getElementById(anchorId).onmouseout = function(){
                    document.getElementById("_preview").style.display = "none";
                    document.getElementById("_preview").style.opacity = "0";
               }

          })
     })



}

setPreviews();


//copiar el correo electronico al portapapeles al darle click

document.getElementById("email").onclick = function(){
     var correo = this.getAttribute("data-email");
     var notification = document.getElementById("notificacionEmail");
     navigator.clipboard.writeText(correo).then(function(){
          setTimeout(function() {
               notification.style.opacity = "1";
               notification.style.display = "block";
               setTimeout(function(){
                    notification.style.opacity = "0";
                    notification.style.display = "none";
               }, 3000);
          }, 100);
     }).catch(function(error){
          console.log("Error al copiar el correo electronico " + error);
     });
}

//cuando se se pasa por encima cambiar el cursor a pointer.
document.getElementById("email").onmouseover = function(){
     document.getElementById("email").style.cursor = "pointer";
}



