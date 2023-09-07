import GetAvatar from "./GetAvatar";

function Form({data, handleInputData, handleClickCreateCard, serverResponse}) {
  return (
    <section className='form'>
      <h2 className='form_title'>Información</h2>
      <section className='form_projectInfo'>
        <p className='form_projectInfo--subtitle'>
          Cuéntanos sobre el proyecto
        </p>
        <hr className='form_projectInfo--line' />
      </section>

      <fieldset className='form_projectInfo--projectForm'>
        <input
          className='input'
          type='text'
          placeholder='Nombre del proyecto'
          name='projectName'
          id='projectName'
          value={data.projectName}
          onInput={handleInputData}
        />
        <input
          className='input'
          type='text'
          name='slogan'
          id='slogan'
          placeholder='Slogan'
          value={data.slogan}
          onInput={handleInputData}
        />
        <input
          className='input'
          type='text'
          name='repo'
          id='repo'
          placeholder='Repo'
          value={data.repo}
          onInput={handleInputData}
        />
        <input
          className='input'
          type='text'
          placeholder='Demo'
          name='demo'
          id='demo'
          value={data.demo}
          onInput={handleInputData}
        />
        <input
          className='input'
          type='text'
          placeholder='Tecnologías'
          name='technologies'
          id='technologies'
          value={data.technologies}
          onInput={handleInputData}
        />
        <textarea
          className='textarea'
          type='text'
          placeholder='Descripción'
          name='desc'
          id='desc'
          value={data.desc}
          onInput={handleInputData}
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
          name='author'
          id='author'
          value={data.author}
          onInput={handleInputData}
        />
        <input
          className='input'
          type='text'
          placeholder='Trabajo'
          name='job'
          id='job'
          value={data.job}
          onInput={handleInputData}
        />
      </fieldset>

      <section className='uploadBtn'>
        <GetAvatar text='Subir foto de proyecto'/>
        <GetAvatar text='Subir foto de autora' />
      </section>
      
      <section className='createCard'>
        <button className='createCard_Btn' onClick={handleClickCreateCard}>
          Crear Tarjeta
        </button>
      </section>
      {serverResponse.success === true && (
        <section className='cardMessage'>
          <span className='cardMessage_hidden'>La tarjeta ha sido creada:</span>
          <a
            href={serverResponse.cardURL}
            className=''
            target='_blank'
            rel='noreferrer'
          >
            {serverResponse.cardURL}
          </a>
        </section>
      )}
      {serverResponse.success === false && (
        <section className='cardMessage'>
          <span className='cardMessage_hidden'>
            Ha habido algún error al crear la tarjeta:
          </span>
          <span>{serverResponse.error}</span>
        </section>
      )}
    </section>
  );
}

export default Form;
