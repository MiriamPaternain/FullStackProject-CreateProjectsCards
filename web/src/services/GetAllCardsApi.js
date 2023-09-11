const getAllCardsApi = () =>{
    return fetch ('https://localhost:4000/api/allprojects')
    .then((response) => response.json())
      .then((data) => {
        return(data);
} );
};

export default getAllCardsApi;