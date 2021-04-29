import React from 'react';
import './info-vehiculos.estilo.css';

const InfoVehiculo = (props) => {
    return(
        <div className="info-vehiculo-contenedor">
            &nbsp; &nbsp;{props.vehiculo.placa}&nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp;{props.vehiculo.marca}&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp;{props.vehiculo.modelo}&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
            &nbsp; &nbsp;{props.vehiculo.color}&nbsp; &nbsp;
        </div>
    );

}

export default InfoVehiculo;