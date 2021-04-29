import React, { useState } from 'react';
import AsociadosNombre from '../asociados/asociados';
import './contenedor-formulario.css';


const ContenedorFormulario = () => {



    const [placa, setPlaca] = useState(' ');
    const [marca, setMarca] = useState(' ');
    const [modelo, setModelo] = useState(' ');
    const [color, setColor] = useState(' ');
    const [asociado, setAsociado] = useState(' So1');
    const agregarVehiculo =(event)=>{
        event.preventDefault();
        console.log('asociado' + asociado);
        console.log('placa' + placa);
        console.log('marca' + marca);
        console.log('modelo' + modelo);
        console.log('color' + color);
    }

    

    return(
        <div className = "contenedor-formulario">
            <div className = "titulo">
                REGISTRO LIVES
            </div>

            <div className = "informacion-form">
                <form>
                    <table> 
                        <tr>
                            <td>
                                Asociado
                            </td>  
                        </tr>
                            <tr>
                                <td> 
                                    <select value = {asociado}
                                        onChange = {(event)=>{   
                                        setAsociado(event.target.value); 
                                        }}
                                    >
                                        <option value = "So1">Sebastián Betancur Castillo</option>
                                        <option value = "So2">Rubén Darío Castillo Bedoya</option>
                                        <option value = "So3">Laura Natalia Molina Calderón</option>
                                        <option value = "So4">Carlos Betancur Gómez</option>
                                    </select>
                                </td>
                            </tr> 
                                <tr>
                                    <td>Placa del Vehículo</td>
                                </tr>
                            <tr>
                                <td><input  type = "text" 
                                            value = {placa}
                                            onChange = {(event)=>{
                                            setPlaca(event.target.value);

                                            }}
                                    /> 
                                </td>
                            </tr> 
 
                                <tr>
                                    <td>Marca del Vehículo</td>
                                </tr>
                            <tr>
                                <td><input  type = "text"
                                            value = {marca}
                                            onChange = {(event)=>{
                                            setMarca(event.target.value);

                                            }}
                                     /> 
                                </td>
                            </tr>

                            <tr>
                                    <td>Modelo del Vehículo</td>
                                </tr>
                            <tr>
                            <td><input      type = "text"
                                            value = {modelo}
                                            onChange = {(event)=>{
                                            setModelo(event.target.value);

                                            }}
                                     /> 
                                </td>
                            </tr>

                            <tr>
                                    <td>Color del Vehículo</td>
                                </tr>
                            <tr>
                                <td><input  type = "text"
                                            value = {color}
                                            onChange = {(event)=>{
                                            setColor(event.target.value);

                                            }}
                                     /> 
                                </td>
                            </tr>

                            <tr>
                                <td><button
                                            onClick={agregarVehiculo}
                                >
                                    Agregar Vehículo</button></td>
                            </tr>

                            

                            
                        </table>
                    </form>
                </div>
        

    
        </div>
    );

}

export default ContenedorFormulario;