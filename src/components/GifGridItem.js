import React from 'react';

export const GifGridItem = ( { id,title,url,carro } ) => {
    console.log( { id,title,url, carro })
  return (
      <div>
          <img src={ url } alt={ title }/>
          <p> { title } </p>
      </div>
  );
};
