import React, { useState, useEffect } from "react"
import { useHistory, useParams } from "react-router-dom";

export const EditForm = () => {

    const [watchlist, setWatchlist] = useState([])
    const [notes, update] = useState()
    const history = useHistory()
    const {watchlistId} = useParams()

    const reRender = () => {
       return fetch (`http://localhost:8088/watchlist/${watchlistId}`)
            .then ( res => res.json())
            .then ((data)=> {
                setWatchlist(data)
                console.log(data)
            })
    }


    useEffect(
        () => {
           reRender()
          
        },
        []
    )

    const submitForm = (event) => {
      event.preventDefault()

        const stockObject = {
            userId: parseInt(localStorage.getItem("stock_customer")),
            stockSymbol: watchlist.stockSymbol,
            stockOpen: watchlist.stockOpen,
            stockClose: watchlist.stockClose,
            stockVolume: watchlist.stockVolume,
            notes: notes.notes
        }
    

       fetch(`http://localhost:8088/watchlist/${watchlistId}`,  {
           method: "PUT",
           headers: {
               "Content-Type": "application/json"
           },
           body: JSON.stringify(stockObject)
       })
           .then(() => {history.push("/watchlist")})
    }

   
    return (
        <>
           
        
        <form className="stockForm">
            <h1 className="stockForm__title">Stock Wishlist</h1>
            <h2>{watchlist.stockSymbol}</h2>
            <h4>Open:{watchlist.stockOpen}</h4>
            <h4>Close:{watchlist.stockClose}</h4>
            <h4>Volume:{watchlist.stockVolume}</h4>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="description">Notes:</label>
                    <textarea
                        required= {true} autoFocus={true}
                        type="text"
                        className="form-control"
                        placeholder="notes"
                        onChange= {
                            (event) => {
                                const copy = {...notes}
                                copy.notes = event.target.value
                                update(copy)
                            }

                        } />
                </div>
            </fieldset>
            <button className="btn btn-primary" onClick={submitForm}>
                Submit Form
            </button>
        </form>

        </>
    )
}