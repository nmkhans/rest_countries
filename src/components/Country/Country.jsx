import React from "react";

const Country = ({ country }) => {
  return (
    <div>
      <h3>Name: {country.name.common}</h3>
    </div>
  );
};

export default Country;
