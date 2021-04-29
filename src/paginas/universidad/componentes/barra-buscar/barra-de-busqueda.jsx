import React from 'react';
import './barra-de-busqueda.css';


const BarraDeBusqueda = () => {
    return(
        <div className = "contenedor-barra-de-busqueda"> 
            <input type = "text" placeholder = "Buscar..."/>
        </div>
    );

}

export default BarraDeBusqueda;