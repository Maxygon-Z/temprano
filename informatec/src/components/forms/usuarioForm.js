import React, {useEffect, useState} from "react";
import M from "materialize-css";
import ConexionApi from "../../services/ConexionAxios";

function UsuarioForm() {
  
  const variablesInicio={
    nombre:"",
    apellidos:"",
    correo:"",
    matricula:"",
  }

  const selectorUno = () => {
    var elems = document.querySelectorAll("select");
    M.FormSelect.init(elems);
  };

  useEffect(() => {
    selectorUno();
  }, []);


 const [values, setValues]=useState(variablesInicio)

 const guardarUser=async()=>{
   await ConexionApi.post("/user/crearUser",{
     nombre: values.nombre,
     apellidos: values.apellidos,
     correo: values.correo,
     matricula: values.matricula
   }).then((res)=>{
     console.log(res)
     //console.log(data)
   })
 }
 
 const onClick=(e)=>{
  e.preventDefault();
  alert(
    "Los datos son:" +
      values.nombre +
      " " +
      values.apellidos +
      " " +
      values.correo +
      " " +
      values.matricula
  );
  guardarUser();
  setValues(variablesInicio)
} 

 const onChange=(e)=>{
   const{name, value}=e.target
   setValues({...values,[name]:value})
 }

  return (
    <div>
      <div className="row">
        <form className="col s12">
          <div className="row">
            <div className="input-field col s6">
              <input id="nombre" type="text" className="validate" name="nombre" onChange={onChange} value={values.nombre}/>
              <label for="first_name">Nombre(s)</label>
            </div>
            <div className="input-field col s6">
              <input id="last_name" type="text" className="validate" name="apellidos" onChange={onChange} value={values.apellidos} />
              <label for="last_name">Apellidos</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s6">
              <input id="email" type="email" className="validate" name="correo" onChange={onChange} value={values.correo} />
              <label for="email">Correo Electrónico</label>
              <span
                className="helper-text"
                data-error="Tu correo es incorrecto"
                data-success="Correcto"
              >
                Inserte su correo electrónico aquí
              </span>
            </div>
            <div className="input-field col s6">
              <input id="matr" type="text" className="validate" name="matricula" onChange={onChange} value={values.matricula}/>
              <label>Matrícula</label>
            </div>
            <div className="input-field col s12">
              <input id="password" type="password" className="validate" name="contraseña" />{/*onChange={onChange} value={values.contraseña} */}
              <label for="password">Constraseña</label>
            </div>
          </div>
          <div className="input-field col s12">
            <select multiple>
              <option value="" disabled="disabled">
                Selecciona tus preferencias
              </option>
              <option value="1">Ing. Sistemas Computacionales</option>
              <option value="2">Ing. Civil</option>
              <option value="3">Lic. Administración</option>
              <option value="4">Ing. Industrial</option>
              <option value="5">Ing. Bioquímica</option>
              <option value="6">Ing. Electromecánica</option>
              <option value="7">Ing. Ambiental</option>
            </select>
            <label>Carreras</label>
            <span className="helper-text">
              Seleccione las carreras que quiera recibir noticias
            </span>
          </div>
        </form>
      </div>
      <button
        id="send"
        className="btn waves-effect waves-light"
        type="submit"
        name="enviar"
     onClick={onClick} >
        Enviar
        <i className="material-icons left">send</i>
      </button>
    </div>
  );
}

export default UsuarioForm;
