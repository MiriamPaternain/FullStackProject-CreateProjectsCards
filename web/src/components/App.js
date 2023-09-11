import { useState } from 'react';
import '../styles/App.scss';
import Header from './Header';
import Preview from './Preview';
import Form from './Form';

function App() {
  //Variables de estado

  const [data, setData] = useState({
    name: '',
    slogan: '',
    repo: '',
    demo: '',
    technologies: '',
    desc: '',
    autor: '',
    job: '',
    photo: '',
    image: '',
  });

  const [serverResponse, setServerResponse] = useState({});
const [createCardClicked, setCreateCardClicked] = useState(false);
  //Funciones

  const handleChangeForm = (propName, value) => {
    const clonedData = { ...data, [propName]: value };
    setData(clonedData);
  };

  const handleInputData = (ev) => {
    const clonedData = { ...data, [ev.target.id]: ev.target.value };
    setData(clonedData);
  };

  const handleClickCreateCard = (ev) => {
    ev.preventDefault();
    setCreateCardClicked(true);
    fetch('https://dev.adalab.es/api/projectCard', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        setServerResponse(data);
      });
  };

  return (
    <div>
       <Header />
      <div className='main'>
       
        <Preview data={data} />
        <Form
          data={data}
          handleInputData={handleInputData}
          handleClickCreateCard={handleClickCreateCard}
          serverResponse={serverResponse}
          handleChangeForm={handleChangeForm}
          createCardClicked={createCardClicked}
        />
      </div>
    </div>
  );
}

/* export*/
export default App;
