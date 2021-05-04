import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectAllBidders, fetchBidders } from './biddersSlice'
import { Link } from "react-router-dom";

const BiddersList = () => {
    const dispatch = useDispatch();
    const bidders = useSelector(selectAllBidders);

    const bidderStatus = useSelector(state => state.bidders.status)
    let token = useSelector(state => state.login.token);

    useEffect(() => {
        if (bidderStatus === 'idle') {
          dispatch(fetchBidders())
        }
      }, [bidderStatus, dispatch])

    return(
        <div class="container mt-3">
            <ul class="list-group">
                {bidders.map(bidder => (
                    <li class="list-group-item" key={bidder.id}>
                        <p>{bidder.first_Name + " " + bidder.last_Name}</p>
                        <Link class="btn btn-secondary" to={`/bidders/${bidder.bidder_Id}`}>Visa</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
};

export default BiddersList;