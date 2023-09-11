import cover from '../images/cover.jpg';
import user from '../images/user.jpeg';

function Preview({ data }) {
  return (
    <section className='preview'>
      <img className='preview_coverImage' src={data.photo || cover} alt='' />

      <section className='preview_author'>
        <section className='preview_author--personalInfo'>
          <img className='preview_author--image' src={data.image || user} alt='' />
          <p className='preview_author--job'>
            {data.job || 'Puesto de trabajo'}
          </p>
          <p className='preview_author--name'>{data.autor || 'Nombre'}</p>
        </section>
        <section className='preview_project'>
          <p className='preview_project--subtitle'>Personal Project Card</p>
          <hr className='preview_project--line' />

          <h2 className='preview_project--title'>
            {data.name || 'Nombre del proyecto'}
          </h2>
          <p className='preview_project--slogan'>{data.slogan || 'Slogan'}</p>
          <p className='preview_project--description'>
            {data.desc ||
              'Lorem, ipsum dolor sit amet consectetur adipisicing elit.Libero, delectus? Voluptates at hic aliquam porro ad suscipitharum laboriosam saepe earum doloribus aperiam, ullam culpa accusantium placeat odit corrupti ipsum!'}
          </p>
          <section className='preview_technologies'>
            <p className='preview_project--technologiesText'>
              {data.technologies || 'Tecnologías'}
            </p>
          </section>
        </section>
      </section>
    </section>
  );
}

export default Preview;
