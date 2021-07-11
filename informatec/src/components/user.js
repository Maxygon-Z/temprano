import React from 'react'
//import informatec from '../sources/informatec.png'


export default function user() {
    return (
        <div>
        <nav>
    <div class="nav-wrapper">
        {/*
        Aquí debería ir un logo pero aún no descubro cómo modificar dimensiones de esta forma, ni importarlo de manera adecuada
        <img class="responsive-img" src={informatec}></img>*/}
    <a href="#" class="brand-logo right">InformaTec</a>
      <ul id="nav-mobile" class="left hide-on-med-and-down">
       { /*Aquí debería poner el botón de hamburguesa para la pestaña de
       navegaión lateral */}
        <li>Side Bar</li>
      </ul>
    </div>
  </nav>
  {/* Aquí debería estar el código de la pestaña de navegación lateral*/}
        <div class="row">
    <form class="col s12">
      <div class="row">
        <div class="input-field col s6">
          <input placeholder="Nombre" id="nombre" type="text" class="validate"/>
          
        </div>
        <div class="input-field col s6">
          <input placeholder="Apellidos" id="last_name" type="text" class="validate"/>
         
        </div>
      </div>
      {/*
      Sección de pruebas disabled
      <div class="row">
        <div class="input-field col s12">
          <input disabled value="Instituto Tecnológico Superior de los Ríos" id="disabled" type="text" class="validate"/>
        </div>
    </div>*/}
    <div class="row">
        <div class="input-field col s12">
          <input id="email" type="email" class="validate"/>
          <label for="email">Correo electrónico</label>
        </div>
      <div class="row">
        <div class="input-field col s12">
          <input placeholder="Contraseña" id="password" type="password" class="validate"/>     
        </div>
      </div>    
      {/*
      Aquí debería haber barra de selección múltiple pero no funciona
      */}
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
  </div>
      </div>
    </form>
  </div>
  </div>
    )
}
