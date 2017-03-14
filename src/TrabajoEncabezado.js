import React from 'react'
import _ from 'lodash'

const TrabajoEncabezado = ({tipo, titulo, subtitulo, links, tecnologias}) => {
  return (
    <div className='encabezado-contenedor'>
      <div className='encabezado-tipo'>{tipo}</div>
      <div className='encabezado-titulo'>{titulo}</div>
      <div className='encabezado-texto'>{subtitulo}</div>
      <div className='encabezado-texto'>{links.texto} 
        <a href={links.url} target='_blank'> Aqui</a>.
      </div>
      <div className='encabezado-texto'>Tecnologías usadas</div>
      <div className='encabezado-tecnologias'>
        {_.map(tecnologias, (tec, index) => {
          return (
            <a key={index} className={tec.tec} href={tec.url} target='_blank'></a>
          )
        })}
      </div>
    </div>
  )
}

export default TrabajoEncabezado