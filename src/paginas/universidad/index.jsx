import React from 'react';
import FiltroLives from './componentes/filtro-lives/filtro-lives.comp';


const PaginaLives = () => {

    let livesM = [
            {
                id: "So1",
                nombre: 'Sebastián Betancur Castillo',
                vehiculos: [
                    {
                        id: "Ve1So1",
                        placa: "NAU169",
                        marca: "Spark LT",
                        modelo: "2009",
                        color: "Gris Bretaña"
                    },
                    {
                        id: "Ve2So1",
                        placa: "TAR876",
                        marca: "Spark go",
                        modelo: "2017",
                        color: "Verde"
                    },
                    {
                        id: "Ve3So1",
                        placa: "COE534",
                        marca: "KIA Picanto",
                        modelo: "2020",
                        color: "Negro"
                    },
                    {
                        id: "Ve4So1",
                        placa: "TOE765",
                        marca: "Sandero",
                        modelo: "2019",
                        color: "Azul"
                    },
                    {
                        id: "Ve5So1",
                        placa: "LOY324",
                        marca: "Sedan",
                        modelo: "2017",
                        color: "Rojo"
                    }
                ]
            },
            {
                id: 'So2',
                nombre: 'Rubén Darío Castillo B.',
                vehiculos: [
                    {
                        id: 'Ve1So2',
                        placa: "UFT678",
                        marca: "Chevrolet Corsa Evolution",
                        modelo: "2006",
                        color: "Rojo"
                    },

                    {
                        id: "Ve2So2",
                        placa: "SGD864",
                        marca: "Corsa",
                        modelo: "2014",
                        color: "Blanco"
                    },

                    {
                        id: "Ve3So2",
                        placa: "SKL734",
                        marca: "Mazda 3",
                        modelo: "2012",
                        color: "Negro"
                    }
                ] 
            },
            {
                id: "So3",
                nombre: 'Laura Natalia Molina Calderón',
                vehiculos: [
                    {
                        id: "Ve1So3",
                        placa: "SYN192",
                        marca: "Mazda 6",
                        modelo: "2020",
                        color: "Negro"
                    },
                    {
                        id: "Ve2So3",
                        placa: "TYJ764",
                        marca: "Sandero",
                        modelo: "2019",
                        color: "Rojo"
                    },
                    {
                        id: "Ve3So3",
                        placa: "SHD734",
                        marca: "Clio",
                        modelo: "2016",
                        color: "Verde"
                    }
                ]
            },

            {
                id: "So4",
                nombre: 'Carlos Betancur Gómez',
                vehiculos: [
                    {
                        id: "Ve1So4",
                        placa: "SFD764",
                        marca: "Sandero",
                        modelo: "2017",
                        color: "Verde"
                    },
                    {
                        id: "Ve2So4",
                        placa: "KSD756",
                        marca: "Spark GT",
                        modelo: "2021",
                        color: "Gris"
                    },
                    {
                        id: "Ve3So4",
                        placa: "SGD763",
                        marca: "Corsa",
                        modelo: "2018",
                        color: "Azul"
                    }

                ]
            },
        ];
    

    return(
        <>
            <FiltroLives
             livesM = {livesM}
             />

            
        </>


    
    
    
    );

}

export default PaginaLives;