import './App.css';
import Form from './components/form/form';
import fetchPetAPI from './helpers/api/fetch_pet_api';
import fetchPetBreeds from './helpers/api/fetch_pet_breeds';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {

  return (
    <>
      <div className='page-title'>
      <h1>Search for Adoptable Doggos</h1>
      </div>
      <Form petFunction={fetchPetAPI} petBreedFunction={fetchPetBreeds}/>
    </>
  );
}

export default App;
