import React from 'react'
import { useSelector } from 'react-redux'
import { selectBidderById } from './biddersSlice';
import { Link } from "react-router-dom";

const BiddersSingle = ({match}) => {
    const {bidderId} = match.params;

    const bidder = useSelector(state => selectBidderById(state, bidderId))

    if (!bidder) {
        return (
          <section>
            <h2>listing not found!</h2>
          </section>
        )
    }

    return(
        <div class="container mt-3">
            <p>Förnamn: {bidder.first_Name}</p>
            <p>Efternamn: {bidder.last_Name}</p>
            <p>Email: {bidder.email}</p>
            <p>Mobilnummer: {bidder.phone_Number}</p>
            <p>Adress: {bidder.address}</p>
            <p>Postnummer: {bidder.postal_Code}</p>
            <p>Postort: {bidder.postal_Area}</p>
            <Link class="btn btn-secondary" to={`/bidders`}>Tillbaka</Link>
        </div>
    )
}

export default BiddersSingle;
