import React, { useState, useEffect } from "react";
import Image from 'next/image';
import styles from "./style.module.css";

interface Car {
  idCar: number;
  carName: string;
  model: string;
  price: number;
  color: string;
  motorType: string;
  power: string;
  placeNumber: number;
  status: string;
  typeCar: string;
  url: string;
}

interface CarsProps {
  cars: Car[];
}

const Cars: React.FC<CarsProps> = ({ cars }) => {
  const [searchInput, setSearchInput] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [filteredCars, setFilteredCars] = useState<Car[]>([]);
  const [searched, setSearched] = useState(false);
  const [searchType, setSearchType] = useState("");
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    fetchData("http://localhost:8080/allCar");
  }, []);

  const fetchData = async (url: string) => {
    try {
      const res = await fetch(url, { credentials: 'include' });
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      const data = await res.json();

      console.log('API Response:', data);

      const newCars: Car[] = Array.isArray(data) ? data : [];
      const transformedCars = newCars.map(car => ({
        ...car,
        url: car.url.replace("file/d/", "uc?export=view&id=").replace("/view?usp=sharing", "")
      }));

      setFilteredCars(transformedCars);
      setSearched(true);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleSearchClick = async () => {
    setFilteredCars([]);
    let url = "http://localhost:8080/allCar";
    if (selectedOption === "option1") {
      if (isEmptyOrSpaces(searchInput)) {
        url = `http://localhost:8080/allCar`;
        setSearchType("option1");
        setSearchValue("");
      } else {
        url = `http://localhost:8080/allCar`;
        setSearchType("option1");
        setSearchValue(searchInput);
      }
    } else if (selectedOption === "option2" && searchInput.trim() !== "") {
      url = `http://localhost:8080/allCarByType/${searchInput}`;
      setSearchType("option2");
      setSearchValue(searchInput);
    } else if (selectedOption === "option3") {
      if (isEmptyOrSpaces(searchInput)) {
        url = `http://localhost:8080/allCarByMinPrice`;
        setSearchType("option3");
        setSearchValue("");
      }
    } else if (selectedOption === "option4") {
      if (isEmptyOrSpaces(searchInput)) {
        url = `http://localhost:8080/allCarByMaxPrice`;
        setSearchType("option4");
        setSearchValue("");
      }
    } else if (selectedOption === "option5" && searchInput.trim() !== "") {
      url = `http://localhost:8080/allCarByTypeMotor/${searchInput}`;
      setSearchType("option5");
      setSearchValue(searchInput);
    }

    try {
      const res = await fetch(url, { credentials: 'include' });
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      const data = await res.json();

      console.log('API Response:', data);

      const newCars: Car[] = Array.isArray(data) ? data : [];
      const transformedCars = newCars.map(car => ({
        ...car,
        url: car.url.replace("file/d/", "uc?export=view&id=").replace("/view?usp=sharing", "")
      }));

      // Filtrer les voitures en fonction de la recherche
      let filteredResult = transformedCars;
      if (searchType === "option2" && searchValue) {
        filteredResult = transformedCars.filter(car => car.typeCar === searchValue);
      }

      setFilteredCars(filteredResult);
      setSearched(true);
    } catch (error) {
      console.error('Error fetching data:', error);
    }


    setSearchInput("");
    setSelectedOption("");
    setSearchType("");
    setSearchValue("");
  };


  const isEmptyOrSpaces = (str: string) => {
    return str === null || str.match(/^ *$/) !== null;
  };

  return (
    <div>
      <div className={styles.SearchAndFilterOption}>
        <div>
          <input
            type="text"
            name="Search Products"
            id={styles.search}
            placeholder="Search Products"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
        </div>
        <div id={styles.separation}></div>
        <div>
          <select
            name="options"
            id={styles.options}
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)}
          >
            <option value="option1">All Categories</option>
            <option value="option2">car types</option>
            <option value="option3">Price min</option>
            <option value="option4">Price max</option>
            <option value="option5">motor type</option>
          </select>
        </div>
        <div id={styles.searchLogo} onClick={handleSearchClick}>
          <div>🔎</div>
        </div>
      </div>

      {searched && (
        <div>
          <h1>Cars List</h1>


          <div className={styles.containeRA}>
            {filteredCars.map(car => (
              <div className={styles.card} key={car.idCar}>
                <div className={styles.cover}>
                  <Image
                    src={car.url}
                    className={styles.carImage}
                   
                    alt="car"
                    
                    width={288}
                    height={216} 
                  />
                  <h4 id={styles.Peugeot}>{car.carName}</h4> <br /><br /><br /><br />
                  <button id={styles.info}>INFO</button>
                </div>
                <div className={styles.details}>
                  <div>
                    <h3>idCar : {car.idCar}</h3>
                    <h1>{car.carName}</h1>
                    <p>model {car.model} , color : {car.color} , motor : {car.motorType}</p>
                    <p>POWER : {car.power} , PLACE : {car.placeNumber} , Type : {car.typeCar}</p>
                    <h1>Status : {car.status}</h1>
                    <h2><sup>Ar</sup>{car.price}</h2>
                    <a href="#">APPOINTMENT</a>
                  </div>
                </div>

              </div>

            ))}
          </div>



        </div>
      )}
    </div>
  );
};


export default Cars;
