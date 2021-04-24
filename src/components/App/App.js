import React, { useState } from "react";
import "./App.css";
import BusinessList from "../BusinessList/BusinessList";
import SearchBar from "../SearchBar/SearchBar";

import Yelp from "../../util/Yelp";

function App() {
  const [businesses, setBusinesses] = useState([]);

  const searchYelp = (term, location, sortBy) => {
    Yelp.search(term, location, sortBy).then((businesses) =>
      setBusinesses(businesses)
    );
  };
  return (
    <div className="App">
      <SearchBar searchYelp={searchYelp} />
      <BusinessList businesses={businesses} />
    </div>
  );
}

export default App;

// https://cors-anywhere.herokuapp.com/corsdemo
