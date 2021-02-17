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
import HouseEditForm from './Components/EditHouseForm'
import Footer from './Components/Footer'
import About from './Components/About'

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/house/search/:query">
        <SearchResults />
        </Route>
        <Route path="/about-us">
          <About />
          </Route>
       <Route path="/edit/:id">
          <HouseEditForm />
       </Route>
        <Route exact path="/house-details/:id">
        <SingleHouse />
      

        </Route>
        <Route exact path="/house-rent">
        
          <ForRent/>
        </Route>
        <Route exact path="/house-sale">
      
          <ForSale />
        </Route>
          <Route exact path="/list-your-property">
         
            <HouseListingForm />
          </Route>
        <Route exact path="/">
        
          <Searchbar />
          <Banner />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
