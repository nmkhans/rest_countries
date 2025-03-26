import React, { use } from "react";
import Country from "../Country/Country";

const Countries = ({ countriesPromise }) => {
  const countries = use(countriesPromise);

  return (
    <section>
      <div className="container">
        <h2>All countries {countries.length}</h2>
        <div>
          {countries.map((country) => (
            <Country country={country} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Countries;
