import React from "react";
import Navbar from "./Components/Header/Navbar";
import "./StyleSheet/App.css";
import Searchbar from "./Components/SearchBar";
import Banner from "./Components/Banner";
import HouseListingForm from "./Components/HouseListingForm";
import ForSale from  './Components/ForSale';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/house-sale">
        <Navbar />
          <ForSale />
        </Route>
          <Route path="/list-your-property">
          <Navbar />
            <HouseListingForm />
          </Route>
        <Route path="/">
          <Navbar />
          <Searchbar />
          <Banner />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
