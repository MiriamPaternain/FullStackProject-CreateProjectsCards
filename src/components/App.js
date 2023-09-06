
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
      <div className='main'>
        <header className='header'>
          <p className='header_text'>Proyectos Molones</p>
        </header>
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
                  <p className='preview_project--technologiesText'>React JS, MongoDB</p>
                </section>
              </section>

              
            </section>
          </section>

          <section className='form'>
            <h2 className='form_title'>Información</h2>
            <section className='form_projectInfo'>
              <p className='form_projectInfo--subtitle'>Cuéntanos sobre el proyecto</p>
              <hr className='form_projectInfo--line' />
            </section>

            <fieldset className='form_projectInfo--projectForm'>
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

            <section className='form_authorInfo'>
              <p className='form_authorInfo--subtitle'>Cuéntanos sobre la autora</p>
              <hr className='form_authorInfo--line' />
            </section>

            <fieldset className='form_authorInfo--authorForm'>
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

            <section className='uploadBtn'>
              <button className='uploadBtn_project'>Subir foto de proyecto</button>
              <button className='uploadBtn_author'>Subir foto de autora</button>
            </section>
            <section className='createCard'>
              <button className='createCard_Btn' onClick='{handleClickCreateCard}'>
                Crear Tarjeta
              </button>
            </section>

            <section className='cardMessage'>
              <span className='cardMessage_hidden'> La tarjeta ha sido creada: </span>
              <a href='' className='' target='_blank' rel='noreferrer'>
                {' '}
              </a>
            </section>
          </section>
      </div>
    </div>
  );
}

/* export*/
export default App;
