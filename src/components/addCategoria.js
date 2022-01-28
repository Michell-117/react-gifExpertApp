import React, { useState } from 'react';
import PropTypes from 'prop-types'

export const AddCategoria = ( { setcat }) => {
    
    const [inputValor, setInputValor] = useState('');

    const tomarcambioInput = (e) =>{
        console.log(e.target.value)
        setInputValor(e.target.value)
    }

    const tomarvalorInput = (e)=>{
        e.preventDefault() // si esto lo quitamos, cada que se le demos enter al input, este recargara la pagina, con esta instruccion evitamos que eso pase             ----.preventDefault--- cancela el evento si este es cancelable, sin detener el resto del funcionamiento
        console.log('Presionaste enter')

        if (inputValor.trim().length > 2) {
            setcat( cats =>[ ...cats, inputValor] )
            setInputValor('')
        }else{
            alert('Ingresa un nombre valido')
        }

        
    }
    
    return( 
        <form onSubmit={ tomarvalorInput }> {/* onSubmit es el atributo que se activa cuando se envia el fomulario */}
            <h2> Añadir categoria </h2>
            <input 
                type="text"
                value={ inputValor }
                onChange={ tomarcambioInput }
                placeholder='Ingresa un anime'
            />
            <p>{ inputValor }</p>
        </form>
    );
};

AddCategoria.protoTypes = {
    setcat: PropTypes.string.isRequired
}


