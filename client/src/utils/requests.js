import axios from "axios";

const localhost = "http://localhost:3002";
const railway = "https://pidogs-production-a8e4.up.railway.app";

export const getAllDogs = () => {
  const dogs = axios.get(`${railway}/dogs`);
  return dogs;
};

export const getDogByName = (name) => {
  const dog = axios.get(`${railway}/dogs/${name}`);
  return dog;
};

export const getTemperaments = () => {
  const temperament = axios.get(`${railway}/temperaments`);
  return temperament;
};

export const getDogById = (id) => {
  const dog = axios.get(`${railway}/dogs/detail/${id}`);
  return dog;
};

export const postDogs = (dog, temperaments) => {
  const options = {
    method: "POST",
    url: `${railway}/dogs`,
    data: {
      name: dog.name,
      image: dog.image,
      weightMin: dog.weightMin,
      weightMax: dog.weightMax,
      height: `${dog.heightMin} - ${dog.heightMax}`,
      life_span: `${dog.life_spanMin} - ${dog.life_spanMax}`,
      temperaments,
    },
  };

  axios
    .request(options)
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.error(error);
    });
};
