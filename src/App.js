import { useState } from 'react';
import DogGalery from './components/DogGalery';
import Dropdown from './components/Dropdown';

function App() {
  const [selectedBreed, setSelectedBreed] = useState('');

  const selectedBreedOnChange = (value) => {
    setSelectedBreed(value);
  };

  return (
    <div>
      <Dropdown selectedBreedOnChange={selectedBreedOnChange} />
      <DogGalery selectedBreed={selectedBreed} />
    </div>
  );
}

export default App;
