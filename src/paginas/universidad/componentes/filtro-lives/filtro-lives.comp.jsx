import React from 'react';
import BarraDeBusqueda from '../barra-buscar/barra-de-busqueda';
import ContenedorFormulario from '../contenedor-formulario/contenedor-formulario';
import TablaDeInfoLives from '../tabla-info-lives/tabla-info-lives';
import './filtro-lives.style.css';



const FiltroLives = (props) => {
    return(
        <div className = "contenedor-filtro-lives">
            <div className = "titulo">
                LIVES MANIZALES
            
            </div>

            <BarraDeBusqueda/>
            <TablaDeInfoLives livesM = {props.livesM}/>
            <ContenedorFormulario/>
        </div>

    );

}

export default FiltroLives;