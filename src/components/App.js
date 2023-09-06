
import '../styles/App.scss';
import cover from '../images/cover.jpeg';
import user from '../images/user.jpeg';
/*  COMPONENTE */
function App() {
  /*
    Variables de estado, funciones manejadoras de eventos, variables, funcion handle 
  */
  /* RETURN --> HTML */
  return (
    <div>
      <div className='container'>
        <header className='header'>
          <p className='text'>Proyectos Molones</p>
        </header>
        <main className='main'>
          <section className='preview'>
            <img className='preview_coverImage' src={cover} alt='' />

            <section className='preview_author'>
              <section className='preview_author--personalInfo'>
                <img className='preview_author--image' src={user} alt='' />
                <p className='preview_author--job'>Full Stack Developer</p>
                <p className='preview_author--name'>Emmelie Björklund</p>
              </section>
              <section className='preview_project'>
                <p className='preview_project--subtitle'>Personal Project Card</p>
                <hr className='preview_project--line' />

                <h2 className='preview_project--title'>Elegant Workspace</h2>
                <p className='preview_project--slogan'>Diseños Exclusivos</p>
                <p className='preview_project--description'>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Libero, delectus? Voluptates at hic aliquam porro ad suscipit
                  harum laboriosam saepe earum doloribus aperiam, ullam culpa
                  accusantium placeat odit corrupti ipsum!
                </p>
                <section className='preview_technologies'>
                  <p className='preview_project--techtnologiesText'>React JS, MongoDB</p>
                </section>
              </section>

              
            </section>
          </section>

          <section className='form'>
            <h2 className='title'>Información</h2>

            <section className='ask-info'>
              <p className='subtitle'>Cuéntanos sobre el proyecto</p>
              <hr className='line' />
            </section>

            <fieldset className='project'>
              <input
                className='input'
                type='text'
                placeholder='Nombre del proyecto'
                name='name'
                id='name'
              />
              <input
                className='input'
                type='text'
                name='slogan'
                id='slogan'
                placeholder='Slogan'
              />
              <input
                className='input'
                type='text'
                name='repo'
                id='repo'
                placeholder='Repo'
              />
              <input
                className='input'
                type='text'
                placeholder='Demo'
                name='demo'
                id='demo'
              />
              <input
                className='input'
                type='text'
                placeholder='Tecnologías'
                name='technologies'
                id='technologies'
              />
              <textarea
                className='textarea'
                type='text'
                placeholder='Descripción'
                name='desc'
                id='desc'
              ></textarea>
            </fieldset>

            <section className='ask-info'>
              <p className='subtitle'>Cuéntanos sobre la autora</p>
              <hr className='line' />
            </section>

            <fieldset className='autor'>
              <input
                className='input'
                type='text'
                placeholder='Nombre'
                name='autor'
                id='autor'
              />
              <input
                className='input'
                type='text'
                placeholder='Trabajo'
                name='job'
                id='job'
              />
            </fieldset>

            <section className='buttons-img'>
              <button className='btn'>Subir foto de proyecto</button>
              <button className='btn'>Subir foto de autora</button>
            </section>
            <section className='buttons-img'>
              <button className='btn-large' onClick='{handleClickCreateCard}'>
                Crear Tarjeta
              </button>
            </section>

            <section className='card'>
              <span className=''> La tarjeta ha sido creada: </span>
              <a href='' className='' target='_blank' rel='noreferrer'>
                {' '}
              </a>
            </section>
          </section>
        </main>
      </div>
    </div>
  );
}

/* export*/
export default App;
