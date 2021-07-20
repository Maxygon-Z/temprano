import React, { useEffect } from "react";
import tec from "../../sources/sistema/informagold.png";
import M from "materialize-css";
import usuario from '../../sources/sistema/userclear.png';
import fondo from '../../sources/fondos/fondo.jpeg';
import {Link} from 'react-router-dom'

function BarrAlumno() {
  //Hook para inicializar SideNav
  const sideUser = () => {
    M.AutoInit();
  };

  useEffect(() => {
    sideUser();
  }, []);

  return (
    <div>
      <div className="navbar-fixed">
      <nav id="navbar">
        <div className="nav-wrapper">
          <Link className="brand-logo right" to="/" >
            <span>
              <img id="logo" className="responsive-img" src={tec} alt="" />
            </span>
          </Link>
          <ul id="nav-mobile" className="center">
              <Link
                href="#"
                data-target="slide-out"
                className="waves-effect waves-light btn-white sidenav-trigger">
                <i className="large material-icons">menu</i>
              </Link>
          </ul>
        </div>
      </nav>
      </div>
{/*_____________________________Sidenav_________________________________________ */}
      <ul id="slide-out" className="sidenav">
        <li>
          <div className="user-view">
            <div className="background">
              <img src={fondo} width="120%" height="120%" alt=""/>
            </div>
            <Link href="#">
              <img
                className="circle"
                src={usuario}
                width="30%"
                height="30%"
                alt=""
              />
            </Link>
            <Link href="#">
              <span className="white-text name">
                Maximiliano de Jesus Avendaño Sosa
              </span>
            </Link>
            <Link href="#">
              <span className="white-text email">maxygon.z327@gmail.com</span>
            </Link>
          </div>
        </li>
        <li>
          <Link  className="waves-effect" to="/">
            <i className="material-icons">home</i>Página principal
          </Link>
         
 </li>
         {/*
        <li>
          <div className="divider"></div>
        </li>
        <li>
          <Link href="#">Second Link</Link>
        </li>
        <li>
          <Link className="subheader">Subheader</Link>
        </li>
        <li>
          <Link className="waves-effect" href="#">
            Third Link With Waves
          </Link>
        </li>*/}
        <Link
        id="send"
        to="/user"
        className="btn waves-effect waves-light"><i className="material-icons">person</i>
        Crear cuenta
        </Link>
      </ul>
    </div>
  );
}

export default BarrAlumno;
