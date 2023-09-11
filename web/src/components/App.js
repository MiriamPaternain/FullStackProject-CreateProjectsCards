import { useState } from 'react';
import '../styles/App.scss';
import Header from './Header';
import Preview from './Preview';
import Form from './Form';
import callToApi from '../services/Api';
import getAllCardsApi from '../services/GetAllCardsApi';
import { Route, Routes } from 'express';
import Home from './Home.js';
import Footer from './Footer.js';

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
    fetch('https://localhost:4000/api/allprojects', {
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
      <Routes>
        <Route path='/' element={<Home />} />
        <Route
          path='/main'
          element={
            <>
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
                <Footer />
              </div>
            </>
          }
        />

        <Route path='*' element={<h2>Error 404: Página no encontrada</h2>} />
      </Routes>
    </div>
  );
}

export default App;
