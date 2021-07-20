import React, { useEffect } from "react";
import M from "materialize-css";
import not1 from '../../sources/noticias/notic5.jpeg'
import not2 from '../../sources/noticias/notic.jpeg'
import not3 from '../../sources/noticias/notic1.jpeg'

function Noticias() {
  const FAB = () => {
    var elems = document.querySelectorAll('.fixed-action-btn');
    var instances = M.FloatingActionButton.init(elems, {
      toolbarEnabled: true
    });
  };

  useEffect(() => {
    FAB();
  }, []);

  return (
    <div>
      <div className="row">
        <div className="col s12 m7">
          <div className="card">
            <div className="card-image">
              <img src={not1} alt="" />
            </div>
            <div className="card-content">
              <p>Reunión con integrantes del Cuerpo Académico “Desarrollo Agroindustrial Sustentable del Sureste” y el Coordinador Territorial de Sembrando Vida, Xpujil, Campeche</p>
              <a className="waves-effect waves-light btn-black datepicker"><i className="medium material-icons">event_available</i></a>
            </div>
            {/*Aquí debería ser un solo menú desplegable pero usar FAB no me sirvió */}
            <div className="card-action">
              <ul className="collapsible">
                <li>
                  <div className="collapsible-header">
                    <i className="material-icons">access_alarm</i>Alarma
                  </div>
                  <div className="collapsible-body">
                    <input
                      placeholder="Introduzca la hora a la que será notificado"
                      type="text"
                      className="timepicker"
                    />
                  </div>
                </li>
                {/*Aquí debería direccionar al calendario del teléfono o a la agenda del mismo */}
                <li>
                  <div className="collapsible-header">
                    <i className="material-icons">schedule</i>Agendar
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col s12 m7">
          <div className="card">
            <div className="card-image">
              <img src={not2} alt="" />
            </div>
            <div className="card-content">
              <p>Aquí hay información del evento en cuestión</p>
              <a className="waves-effect waves-light btn-black datepicker"><i className="medium material-icons">event_available</i></a>

            </div>
            {/*Aquí debería ser un solo menú desplegable pero usar FAB no me sirvió */}
            <div className="card-action">
              <ul className="collapsible">
                <li>
                  <div className="collapsible-header">
                    <i className="material-icons">access_alarm</i>Alarma
                  </div>
                  <div className="collapsible-body">
                    <input
                      placeholder="Introduzca la hora a la que será notificado"
                      type="text"
                      className="timepicker"
                    />
                  </div>
                </li>
                {/*Aquí debería direccionar al calendario del teléfono o a la agenda del mismo */}
                <li>
                  <div className="collapsible-header">
                    <i className="material-icons">schedule</i>Agendar
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col s12 m7">
          <div className="card">
            <div className="card-image">
              <img src={not3} alt="" />
            </div>
            <div className="card-content">
              <p>Aquí hay información del evento en cuestión</p>
              <a className="waves-effect waves-light btn-black datepicker"><i className="medium material-icons">event_available</i></a>
            </div>
            {/*Aquí debería ser un solo menú desplegable pero usar FAB no me sirvió */}
            <div className="card-action">
              <ul className="collapsible">
                <li>
                  <div className="collapsible-header">
                    <i className="material-icons">access_alarm</i>Alarma
                  </div>
                  <div className="collapsible-body">
                    <input
                      placeholder="Introduzca la hora a la que será notificado"
                      type="text"
                      className="timepicker"
                    />
                  </div>
                </li>
                {/*Aquí debería direccionar al calendario del teléfono o a la agenda del mismo */}
                <li>
                  <div className="collapsible-header">
                    <i className="material-icons">schedule</i>Agendar
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Noticias;
