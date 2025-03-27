import React, { use, useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";
import Flag from "../Flag/Flag";

const Countries = ({ countriesPromise }) => {
  const [visitedCountries, setVisitedCountries] = useState([]);
  const [visitedFlag, setVisitedFlag] = useState([]);
  const countries = use(countriesPromise);

  const handleVisitedCountries = (country) => {
    const newVisitedCountries = [...visitedCountries, country];
    setVisitedCountries(newVisitedCountries);
  };

  const handleVisitedCountryFlag = (flag) => {
    const newVisitedFlag = [...visitedFlag, flag];
    setVisitedFlag(newVisitedFlag);
  };

  return (
    <section>
      <div className="container">
        <div className="countries_info">
          <h2>All countries {countries.length}</h2>
          <h3>Countries visited: {visitedCountries.length}</h3>
        </div>
        <div className="display_container">
          <div className="countries__display">
            {countries.map((country) => (
              <Country
                key={country.cca3}
                country={country}
                handleVisitedCountries={handleVisitedCountries}
                handleVisitedCountryFlag={handleVisitedCountryFlag}
              />
            ))}
          </div>
          <div className="countries_flag_container">
            {visitedFlag.map((flag) => (
              <Flag key={flag} flag={flag} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Countries;
