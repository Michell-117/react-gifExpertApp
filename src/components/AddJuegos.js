import React, { useState } from 'react';

export default function AddJuegos( { juegoset }) {

    const [inputJuego, setinputJuego] = useState('');

    const tomarJuego = (e) =>{
        setinputJuego(e.target.value) // nos permite escribir dentro del input porque ya le asignamos un valor al input, de lo contrario no lo podremos hacer
        //console.log(e.target.value)
    }
    const asignarJuego = (i)=>{
        i.preventDefault()

        juegoset( games =>[...games, inputJuego] )
        setinputJuego('')
        
    }

    

    

    return (
                <>
                    <form onSubmit={ asignarJuego }>
                        <input 
                            id='inputj'
                            placeholder='Añade juego'
                            value={ inputJuego } // aqui estamos agregando un valor al input, pero no podemos modificar posteriormente ese valor, para poder hacerlo necesitamos onChange ={ tomarJuego }
                            onChange={ tomarJuego } //nos permite escribir dentro del input
                            type= 'text'
                        />
                        <p> { inputJuego } </p>
                    </form>
                </>
            );
}
