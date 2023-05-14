import mage1 from './imagenes/coffee.png'
import mage2 from './imagenes/guitarra.png'
import mage3 from './imagenes/monster.png'

import './stylo.css' 

function App() {
  return (
    <div className="App">
      <header>
        <h1 id="titulo">Blog de kabir feliz</h1>
    </header>
    <section className='cards'>
        <article className="post">
            <h2>Título de mi post</h2>
            <p>Descripción de mi post</p>
            <img src={mage1} width="400" alt="imagen1" />
            <p>Texto del artículo que hay acá y es texto de prueba. Chanchito feliz!</p>
        </article>
        <article className="post">
            <h2>Título de mi post 2</h2>
            <p>Descripción de mi post 2</p>
            <img src={mage2} width="400" alt="imagen2" />
            <p>Texto del artículo que hay acá y es texto de prueba. Chanchito feliz!</p>
        </article>
        <article className="post">
            <h2>Título de mi post 3</h2>
            <p>Descripción de mi post 3</p>
            <img src={mage3} width="400" alt="imagen3"/>
            <p>Texto del artículo que hay acá y es texto de prueba. Chanchito feliz!</p>
        </article>
    </section>
    <footer>
        <section>

            <a href="#titulo">Ir al comienzo</a>
            <a href="https://www.youtube.com/watch?v=VdGzPZ31ts8">Contáctame aquí</a>

        </section>
        <p>kabir contreras 2023</p>
    </footer>
    </div>
  );
}

export default App;
