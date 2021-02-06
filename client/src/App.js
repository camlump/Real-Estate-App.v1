import React from "react";
import Navbar from './Components/Header/Navbar';
import "./StyleSheet/App.css";
import Searchbar from "./Components/SearchBar";
import Banner from "./Components/Banner";
import HouseListingForm from "./Components/HouseListingForm";
import ForSale from  './Components/ForSale';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ForRent from './Components/ForRent'
import SingleHouse from './Components/SingleHouse'
import ContactForm from './Components/ContactForm'
import SearchResults from './Components/SearchResults'
import Footer from './Components/Footer'
const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/house/search/:query">
        <SearchResults />
        </Route>
        <Route path="/contact-us">
          <ContactForm />

        </Route>
        <Route path="/house-details/:id">
        <SingleHouse />

        </Route>
        <Route path="/house-rent">
        
          <ForRent/>
        </Route>
        <Route path="/house-sale">
      
          <ForSale />
        </Route>
          <Route path="/list-your-property">
         
            <HouseListingForm />
          </Route>
        <Route path="/">
        
          <Searchbar />
          <Banner />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
