import GetAvatar from "./GetAvatar";

function Form({data, handleInputData, handleClickCreateCard, serverResponse, handleChangeForm, createCardClicked}) {

const handleImage = (file) => {
handleChangeForm ('image', file);
}

const handlePhoto = (file) => {
    handleChangeForm ('photo', file);
}

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
        <div className='form_projectInfo--projectForm'>
          <input
            className='input'
            type='text'
            placeholder='Nombre del proyecto'
            name='name'
            id='name'
            value={data.name}
            onInput={handleInputData}
          />
          {createCardClicked && data.name === "" && (
            <div className='error-message'>*Este campo es obligatorio.</div>
          )}
        </div>
        <div className='form_projectInfo--projectForm'>
          <input
            className='input'
            type='text'
            name='slogan'
            id='slogan'
            placeholder='Slogan'
            value={data.slogan}
            onInput={handleInputData}
          />
          {createCardClicked && data.slogan === "" && (
            <div className='error-message'>*Este campo es obligatorio.</div>
          )}
        </div>
        <div className='form_projectInfo--projectForm'>
          <input
            className='input'
            type='text'
            name='repo'
            id='repo'
            placeholder='Repo'
            value={data.repo}
            onInput={handleInputData}
          />
          {createCardClicked && data.repo === "" && (
            <div className='error-message'>*Este campo es obligatorio.</div>
          )}
        </div>
        <div className='form_projectInfo--projectForm'>
          <input
            className='input'
            type='text'
            placeholder='Demo'
            name='demo'
            id='demo'
            value={data.demo}
            onInput={handleInputData}
          />
          {createCardClicked && data.demo === "" && (
            <div className='error-message'>*Este campo es obligatorio.</div>
          )}
        </div>
        <div className='form_projectInfo--projectForm'>
          <input
            className='input'
            type='text'
            placeholder='Tecnologías'
            name='technologies'
            id='technologies'
            value={data.technologies}
            onInput={handleInputData}
          />
          {createCardClicked && data.technologies === "" && (
            <div className='error-message'>*Este campo es obligatorio.</div>
          )}
        </div>
        <div className='form_projectInfo--projectForm'>
          <textarea
            className='textarea'
            type='text'
            placeholder='Descripción'
            name='desc'
            id='desc'
            value={data.desc}
            onInput={handleInputData}
          ></textarea>
          {createCardClicked && data.desc === "" && (
            <div className='error-message'>*Este campo es obligatorio.</div>
          )}
        </div>
      </fieldset>

      <section className='form_authorInfo'>
        <p className='form_authorInfo--subtitle'>Cuéntanos sobre la autora</p>
        <hr className='form_authorInfo--line' />
      </section>

      <fieldset className='form_authorInfo--authorForm'>
        <div className='form_projectInfo--projectForm'>
          <input
            className='input'
            type='text'
            placeholder='Nombre'
            name='autor'
            id='autor'
            value={data.autor}
            onInput={handleInputData}
          />
          {createCardClicked && data.autor === "" && (
            <div className='error-message'>*Este campo es obligatorio.</div>
          )}
        </div>
        <div className='form_projectInfo--projectForm'>
          <input
            className='input'
            type='text'
            placeholder='Trabajo'
            name='job'
            id='job'
            value={data.job}
            onInput={handleInputData}
          />
          {createCardClicked && data.job === "" && (
            <div className='error-message'>*Este campo es obligatorio.</div>
          )}
        </div>
      </fieldset>

      <section className='uploadBtn'>
        <div>
          <GetAvatar
          text='Subir foto de proyecto'
          avatar={data.image}
          updateAvatar={handlePhoto}
          />
          {createCardClicked && !data.photo && (
              <div className='error-message'>*Este campo es obligatorio.</div>
            )}
        </div>
        <div>
          <GetAvatar
          text='Subir foto de autora'
          avatar={data.photo}
          updateAvatar={handleImage} />
          {createCardClicked && !data.image && (
                <div className='error-message'>*Este campo es obligatorio.</div>
              )}
        </div>
      </section>

      <section className='createCard'>
        <button className='createCard_Btn' onClick={handleClickCreateCard}>
          Crear Tarjeta
        </button>
      </section>
      {serverResponse.success === true && (
        <div className="createCard">
          <section className='cardMessage'>
            <span className='cardMessage_hidden'>La tarjeta ha sido creada:</span>
          </section>
           <button className="urlBtn">
            <a
              href={serverResponse.cardURL}
              className='urlBtn_link'
              target='_blank'
              rel='noreferrer'
            >
              Ver Tarjeta
            </a>
            </button>
        </div>
      )}
      {serverResponse.success === false && (
        <section className='cardMessage'>
          <span className='cardMessage_hidden'>
            Ha habido algún error al crear la tarjeta:
          </span>
          <span>Quedan campos obligatorios por rellenar</span>
        </section>
      )}
    </section>
  );
}

export default Form;
