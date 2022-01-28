import React, { useState } from 'react';


import { AddCategoria } from './components/addCategoria';
import AddJuegos from './components/AddJuegos';
import GifGrid from './components/GifGrid';


export const GifExpert = ()=>{

    const categorias = [ 'One Punch', 'Samurai x','Dragon Ball', 'Demon Slayer', 'Ranma 1/2']

    const [cat, setcat] = useState(['Boruto', 'fut basket', 'Naruto', 'Demon Slayer', 'Caballeros del Zodiaco']);

    const animeAdd = () => {
        // cat.push('Cytrus')
        // console.log( cat )
        // si hacemos lo anterior comentado, vamos a mutar la constante cat, pero son malas practicas, en su lugar vamos a utilizar setCat()

        //setcat('Cytrus') haciendo estamos sustituyendo el array por el valor de 'Cytrus' y nosotros queremos agregarlo.

        setcat([...cat, 'Bob esponja' ])
    }

    //-------------------------------------------------------------------------------------------------------------------------------------------------------------------

    const [juego, setjuego] = useState(['Halo Infinite']);

    return(
        <>
            <h2>Gift Expert App</h2>
            <hr/>

        
            {
                categorias // si mostramos de esta manera, los elementos del array se mostraran de manera continua, nosotros buscamos que se muestre en una lista, por lo tanto este metodo no nos funciona.
            }

            <hr/>

            
            <ol>  
                {
                    categorias // nos colocara todos los elementos del array en una sola posicion
                }
            </ol>

            <hr/>

            <ol>
                {
                    categorias.map( category => { // asignamos cada elemento del array a un li y se muestra correctamente, sin embargo si queremos agregar nuevos elementos al array, no vamos a poder, porque no se puede mutar una constante ------- .map()recive dos parametros, uno para los elementos y otro para el indice
                        
                        return <li key={ category }> { category } </li>
                    })
                }
            </ol>

            <hr/>   

            <button onClick={ animeAdd }>Agregar</button>

            {/* Para poder agregar valores al array haremos lo siguiente, ademas necesitamos importar ----useState---  de la linea 10 a la 20 */}
            <ol>
                {
                    cat.map(posicion => {
                        return <li key={ posicion }> { posicion } </li>
                    })
                }
            </ol>

            <hr/>
            <hr/>

            <AddCategoria setcat = { setcat }/> {/* Podemos añadir un componente dentro de otro componente  */}

            {/* ---------------------------------------------------------------------------------------------------------------------------------------------- */}
            {/* ---------------------------------------------------------------------------------------------------------------------------------------------- */}

            <hr/>

            <h2> Gif Grids!!!!</h2>

            <AddJuegos juegoset ={ setjuego }/>

            <ol>
                {
                    juego.map( njuego =>(
                        <GifGrid 
                            key={ njuego }
                            njuego={ njuego } 
                        />
                    ))
                }
            </ol>

            


            

        </>
    )
}

