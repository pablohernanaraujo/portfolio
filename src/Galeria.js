import React from 'react'
import LazyLoad from 'react-lazyload'
import _ from 'lodash'

const Galeria = ({imagenes}) => {
  return (
    <div className='galeria-contenedor'>
      {_.map(imagenes, (ima, index) => {
        return (
          <LazyLoad key={index} height={300} once offset={200}>
            <img className='imagen' src={`images/${ima.imagen}.png`} alt=""/>
          </LazyLoad>
        )
      })}
      <div style={{clear: 'both'}}></div>
    </div>
  )
}

export default Galeria