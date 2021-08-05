import { useEffect, useState } from 'react';

const DogGalery = (props) => {
  const { selectedBreed } = props;
  const [dogImages, setDogImages] = useState([]);

  useEffect(() => {
    if (selectedBreed) {
      fetch(`https://dog.ceo/api/breed/${selectedBreed}/images`)
        .then((res) => res.json())
        .then((json) => {
          const images = json.message;
          const get9Images = images.slice(0, 9);
          setDogImages(get9Images);
        });
    }
  }, [selectedBreed]);

  return (
    <div>
      {dogImages.map((image) => {
        return <img src={image} alt={image} />;
      })}
    </div>
  );
};

export default DogGalery;
