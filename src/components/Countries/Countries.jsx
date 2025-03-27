import React, { use } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = ({ countriesPromise }) => {
  const countries = use(countriesPromise);

  return (
    <section>
      <div className="container">
        <h2>All countries {countries.length}</h2>
        <div className="countries__display">
          {countries.map((country) => (
            <Country key={country.cca3} country={country} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Countries;
