import { useEffect, useState } from 'react';

const Dropdown = (props) => {
  const { selectedBreedOnChange } = props;
  const [breedList, setBreedList] = useState([]);

  useEffect(() => {
    console.log('hey');
    fetch('https://dog.ceo/api/breeds/list/all')
      .then((res) => res.json())
      .then((json) => {
        const message = json.message;
        const breedList = Object.keys(message);
        setBreedList(breedList);
      });
  }, []);

  return (
    <div>
      <select onChange={(e) => selectedBreedOnChange(e.target.value)}>
        {breedList.map((breed) => {
          return (
            <option value={breed} key={breed}>
              {breed}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Dropdown;
