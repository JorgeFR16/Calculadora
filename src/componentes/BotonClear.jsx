import React from "react";
import "../hojas-de-estilo/BotonClear.css";
const BotonClear = (props) => (
  <div className="boton-clear" onClick={props.manejarClear}>
    {props.children}
  </div>
);

//Se puede ocupar simplemente CLEAR en vez de props.children y en app.js solamente se pondria la etiqueta de inicio

export default BotonClear;
