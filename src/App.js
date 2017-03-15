import React from 'react'
import { WindowResizeListener } from 'react-window-resize-listener'
import _ from 'lodash'

import Trabajo from './Trabajo'
import imagenes from '../imagenes'
import imagenesMobile from '../imagenes-mobile'
import tecnologias from '../tecnologias'

class App extends React.Component {
  constructor () {
    super()
    this.state = {
      imagenes: [],
      tecnologias: tecnologias
    }
  }
  render() {
    return (
      <div className='fila'>
        <WindowResizeListener
          onResize={windowSize => {
            if (windowSize.windowWidth > 800) {
              this.setState({
                imagenes: imagenes
              })
            } else if (windowSize.windowWidth <= 800) {
              this.setState({
                imagenes: imagenesMobile
              })
            }
          }}
        />
        <div className='contenedor'>
          <header>
            <div className='separador'>
              <div className='nombre'>PABLO</div>
              <div className='nombre'>ARAUJO</div>
            </div>
            <div className="datos">
              <div className='especialidad'>Desarrollador</div>
              <div className='especialidad'>Diseño</div>
              <div className='especialidad'>Programación</div>
              <div className='especialidad'>
                <a href="https://www.google.com/gmail/" target="_blank">pablohernanaraujo@gmail.com</a>
              </div>
            </div>
          </header>
          <div className='portfolio-titulo'>Portfolio</div>
          <div className='portfolio-by'>Tecnologías usadas</div>
          <div className='porfolio-logos-contenedor'>
            {_.map(this.state.tecnologias.portfolio, (tec, index) => {
              return (
                <a 
                  key={index} 
                  className={tec.tec}
                  href={tec.url} 
                  target='_blank'
                ></a>
              )
            })}
          </div>
          <Trabajo
            tipo='Freelance'
            titulo='Tasty House App'
            subtitulo='Startup de recetas de cocina casera.'
            links={{texto: 'Descarga',url: 'https://firebasestorage.googleapis.com/v0/b/resetasapp.appspot.com/o/tastyhouse.apk?alt=media&token=9adad64f-06fc-4bbd-8b1d-f99a245c0103'}}
            tecnologias={tecnologias.tastyHouseApp}
            imagenes={this.state.imagenes.tastyHouseApp}
          />
          <Trabajo
            tipo='Freelance'
            titulo='Banighton App'
            subtitulo='Startup de boliches y bares nocturnos.'
            links={{
              texto: 'Descarga',
              url: 'https://firebasestorage.googleapis.com/v0/b/bno-firebase.appspot.com/o/bnoapp.apk?alt=media&token=294f118e-e2c5-46f2-a60f-38d55c575418'
            }}
            tecnologias={this.state.tecnologias.banightonApp}
            imagenes={this.state.imagenes.banightonApp}
          />
          <Trabajo
            tipo='Freelance'
            titulo='Tasty House Web'
            subtitulo='Startup de recetas de cocina casera.'
            links={{
              texto: 'Página web',
              url: 'https://pablohernanaraujo.github.io/recetas/#/inicio'
            }}
            tecnologias={this.state.tecnologias.tastyHouseWeb}
            imagenes={this.state.imagenes.tastyHouseWeb}
          />
          <Trabajo
            tipo='Freelance'
            titulo='Banighton Web'
            subtitulo='Startup guia de lugares nocturnos y eventos.'
            links={{
              texto: 'Página web',
              url: 'http://www.pablohernanaraujo.com/banighton'
            }}
            tecnologias={this.state.tecnologias.banightonWeb}
            imagenes={this.state.imagenes.banightonWeb}
          />
          <Trabajo
            tipo='Freelance'
            titulo='ERAS Ente reguladora de Agua y Saneamiento'
            subtitulo='ERAS es un organismo autárquico e interjurisdiccional, con capacidad de derecho público y privado.'
            links={{
              texto: 'Página web',
              url: 'http://www.eras.gov.ar'
            }}
            tecnologias={this.state.tecnologias.eras}
            imagenes={this.state.imagenes.eras}
          />
          <Trabajo
            tipo='Freelance'
            titulo='Tecnosys'
            subtitulo='TECNOCYS provee servicios de Hosting y Housing con instalaciones e infraestructura propia.'
            links={{
              texto: 'Página web',
              url: 'http://tecnocys.com.ar/'
            }}
            tecnologias={this.state.tecnologias.tecnosys}
            imagenes={this.state.imagenes.tecnosys}
          />
        </div>
      </div>
    );
  }
}

export default App
