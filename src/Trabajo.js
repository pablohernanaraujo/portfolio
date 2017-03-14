import React from 'react'

import TrabajoEncabezado from './TrabajoEncabezado'
import Galeria from './Galeria'

const Trabajo = ({tipo, titulo, subtitulo, links, tecnologias, imagenes}) => {
  return (
    <div className="trabajo-contenedor">
        <TrabajoEncabezado 
          tipo={tipo}
          titulo={titulo}
          subtitulo={subtitulo}
          links={links}
          tecnologias={tecnologias}
        />
        <Galeria
          imagenes={imagenes}
        />
    </div>
  )
}

export default Trabajo