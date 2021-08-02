
import * as UI from "./interfaz.js";
import API from './api.js'


UI.formularioBuscar.addEventListener('submit', buscarCancion);

 function buscarCancion(e){
     e.preventDefault();

     //Odtener datos del formulario

     const artista = document.querySelector('#atista').value;
     const cancion = document.querySelector('#cancion').value;



     if( artista === '' || cancion === ''){
         //El usuario mostro almenos un campo vacio , mostrar error 

         UI.divMensajes.textContent = 'Error... Todos los campos son obligatorios';
         UI.divMensajes.classList.add('error');


         setTimeout(() => {
             UI.divMensajes.textContent = '';
             UI.divMensajes.classList.remove('error');
         }, 3000);
     }

     return;
     
 }


 //Consultar API

 const busqueda = new API(artista, cancion);
 busqueda.consultarAPI

 console.log (busqueda);


