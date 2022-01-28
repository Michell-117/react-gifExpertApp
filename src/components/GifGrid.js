import React, { useEffect, useState } from 'react';
import { GifGridItem } from './GifGridItem';
//import PropTypes from 'prop-types';



const GifGrid = ( { njuego } ) => {
    
    const [contador, setcontador] = useState(1); // useState

    //este hook nos permite renderizar la funcion solo la primera vez que se renderiza
    useEffect( ()=>{
        tomargifs()
        
    },[]) 

    const [images, setImages] = useState( [] );

    

    const tomargifs = async() =>{

        const url = 'https://api.giphy.com/v1/gifs/search?api_key=DgwQFDw8EpN43chNPV3B1zMTKYrn0jjA&q=Halo&limit=10'
        const respuesta = await fetch( url )
        const { data }  = await respuesta.json()

        const gifs = data.map( imagen =>{ //imagen es el nombre que nosotros asignamos, puede ser cualquiera.
            return{
                id: imagen.id, //nosotros podemos colocar cualquier nombre antes de 2 puntos ":", pero si debemos respetar los nombres que vienen despues, esos los encontramos en el array
                title: imagen.title,
                url: imagen.images.downsized_medium.url
            }
        })
        console.log( url )
        console.log( data )
        console.log( gifs )
        
        setImages( gifs )

    }

    //tomargifs()


    console.log( njuego )

    

    
    return (
                <div>

                    <button onClick={ () => setcontador( contador + 1) }> "useEffect" </button>
                    <h4> { contador } </h4>

                    <h3>{ njuego }</h3>


                    <hr/>
                    <hr/>
                    
                    <ol>
                        {
                            images.map( img =>(
                                <li key={ img.id }> { img.title } </li>
                            ))
                        }
                    </ol>

                    <hr/>
                    <hr/>

                    {
                        images.map(img1 =>(
                            <GifGridItem 
                                key={ img1.id }
                                {...img1}

                            />
                        ))
                    }
                    
                    
                </div>
            );
};

GifGrid.propTypes = {
    //njuego: PropTypes.func.isRequired
};

export default GifGrid;
