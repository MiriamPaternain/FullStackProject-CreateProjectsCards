import { useState } from 'react';
import '../styles/App.scss';
import Header from './Header';
import Preview from './Preview';
import Form from './Form';

function App() {
  //Variables de estado

  const [data, setData] = useState({
    projectName: '',
    slogan: '',
    repo: '',
    demo: '',
    technologies: '',
    desc: '',
    author: '',
    job: '',
    photo: '',
    image: '',
  });

  const [serverResponse, setServerResponse] = useState({});

  //Funciones

  const handleChangeForm = (propName, value) => {
const clonedData = { ...data, [propName]: value};
setData(clonedData);
  }

  const handleInputData = (ev) => {
    const clonedData = { ...data, [ev.target.id]: ev.target.value };
    setData(clonedData);
  };

  const handleClickCreateCard = (ev) => {
    ev.preventDesfault();

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
console.log(data);
  return (
    <div>
      <div className='main'>
        <Header />
        <Preview data={data}/>
        <Form 
        data={data} 
        handleInputData={handleInputData} 
        handleClickCreateCard={handleClickCreateCard} 
        serverResponse={serverResponse}
        handleChangeForm={handleChangeForm}
        />

        
      </div>
    </div>
  );
}

/* export*/
export default App;
