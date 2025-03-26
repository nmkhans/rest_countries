import React, { Suspense } from "react";
import Countries from "./components/Countries/Countries";
import getAllCountries from "./fetchers/getAllCountries";

function App() {
  const countriesPromise = getAllCountries();

  return (
    <main>
      <Suspense fallback={<h2>Loading...</h2>}>
        <Countries countriesPromise={countriesPromise} />
      </Suspense>
    </main>
  );
}

export default App;
