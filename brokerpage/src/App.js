import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'

import { Navbar } from './app/Navbar'
import './App.css';
import ListingsList from './features/listings/ListingsList'
import ListingsSingle from './features/listings/ListingsSingle'
import BiddersList from './features/bidders/BiddersList'
import BiddersSingle from './features/bidders/BiddersSingle'
import ListingBiddersList from './features/listingbidders/ListingBiddersList'
import AddListingForm from './features/listings/AddListingForm'
import PutListingForm from './features/listings/PutListingForm'
import LoginPage from './features/login/LoginPage'
import StartPage from './features/StartPage'

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Switch>
          <Route exact path="/" component={StartPage} />      
          <Route exact path="/listings" component={ListingsList} />
          <Route exact path="/listings/:listingId" component={ListingsSingle} />
          <Route exact path="/addlisting" component={AddListingForm} />
          <Route exact path="/putlisting/:listingId" component={PutListingForm} />
          <Route exact path="/bidders" component={BiddersList} />
          <Route exact path="/bidders/:bidderId" component={BiddersSingle} />
          <Route exact path="/listingbidders/:listingId" component={ListingBiddersList} />
          <Route exact path="/login" component={LoginPage} /> 
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
