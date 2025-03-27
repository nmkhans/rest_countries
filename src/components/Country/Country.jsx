import React, { useState } from "react";
import "./Country.css";

const Country = ({
  country,
  handleVisitedCountries,
  handleVisitedCountryFlag,
}) => {
  const [visited, setVisited] = useState(false);

  const handleVisit = () => {
    setVisited(true);
    handleVisitedCountries(country);
    handleVisitedCountryFlag(country.flags.png);
  };

  return (
    <div className={`country ${visited && "country_visited"}`}>
      <h3>Name: {country.name.common}</h3>
      <img src={country.flags.png} alt="" />
      <p>Independence: {country.independent ? "Free" : "Not free"}</p>
      <p>Population: {country.population}</p>
      <button onClick={handleVisit}>
        {visited ? "visited" : "not visited"}
      </button>
    </div>
  );
};

export default Country;
