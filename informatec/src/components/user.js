import React from 'react'
//import informatec from '../sources/informatec.png'


export default function user() {
    return (
        <div>
          <link rel="stylesheet" href="../css/user.css"></link>
       <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
        <nav id="barra" class="green">
    <div class="nav-wrapper" >
        {/*
        Aquí debería ir un logo pero aún no descubro cómo modificar dimensiones de esta forma, ni importarlo de manera adecuada
        <img class="responsive-img" src={informatec}></img>*/}
    <a href="#" class="brand-logo right">InformaTec</a>
      <ul id="nav-mobile" class="left hide-on-med-and-down">
        <li><a class="waves-effect waves-light btn-flat"><i class="material-icons">list</i></a></li>
      </ul>
    </div>
  </nav>
  {/* Aquí debería estar el código de la pestaña de navegación lateral*/}
        <div class="row">
    <form class="col s12">
      <div class="row">
        <div class="input-field col s6">
          <input id="nombre" type="text" class="validate"/>
          <label for="first_name">Nombre(s)</label>
        </div>
        <div class="input-field col s6">
          <input  id="last_name" type="text" class="validate"/>
         <label for="last_name">Apellidos</label>
        </div>
      </div>
        <div class="row">
          <div class="input-field col s12">
           <input  id="email" type="email" class="validate"/>
           <label for="email">Correo Electrónico</label>
           <span class="helper-text" data-error="Tu correo es incorrecto" data-success="Correcto">Inserte su correo electrónico aquí</span>
          </div>
        <div class="input-field col s12">
          <input id="password" type="password" class="validate"/>   
          <label for="password">Constraseña</label>  
        </div> 
      </div>
    </form>
  </div>
  </div>
    )
}
{/*
  No me funciona porque no sé dónde inicializar el DOM
  <div class="input-field col s12">
    <select multiple>
      <option value="" disabled selected>Selecciona tus preferencias</option>
      <option value="1">Ing. Sistemas Computacionales</option>
      <option value="2">Ing. Civil</option>
      <option value="3">Lic. Administración</option>
      <option value="4">Ing. Industrial</option>
      <option value="5">Ing. Bioquímica</option>
      <option value="6">Ing. Electromecánica</option>
      <option value="7">Ing. Ambiental</option>
    </select>
    <label>Carreras</label>
  </div> */}