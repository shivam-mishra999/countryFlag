import React, {useState, useEffect} from 'react';
import styles from "./Flag.module.css";

export default function Flag() {
    const [countries, setCountries] = useState("null");

    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then((response)=> response.json())
        .then((data)=> setCountries(data))
        .catch((error)=>console.error('Error fetching data:', error))
    }, []);

  return (
    <div className = {styles.container}>
      {countries.map((country) => (
        <div className= {styles.card} key={country.cca3}>
            <img src={country.flags.png} alt={`flag of ${country.name.common}`} className={styles.flag} />
            <h2>{country.name.common}</h2>
        </div>
      ))}
    </div>
  )
}
