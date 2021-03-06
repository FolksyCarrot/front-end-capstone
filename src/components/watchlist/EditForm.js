import React, { useState, useEffect } from "react"
import { useHistory, useParams } from "react-router-dom";
import "./Watchlist.css"

export const EditForm = () => {

    const [watchlist, setWatchlist] = useState([])
    const [notes, update] = useState()
    const history = useHistory()
    const {watchlistId} = useParams()

    const reRender = () => {
       return fetch (`https://soaring-stock-api.herokuapp.com/watchlist/${watchlistId}`)
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
            stockPicture: watchlist.stockPicture,
            notes: notes.notes
        }
    

       fetch(`https://soaring-stock-api.herokuapp.com/watchlist/${watchlistId}`,  {
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
        <div className="stockForm--main">
        <form className="stockForm--editform">
        <div className="form--edit">
            <h1 className="stockForm__title">Stock Wishlist</h1>
            <h2>{watchlist.stockSymbol}</h2>
            <h4>Open: {watchlist.stockOpen}</h4>
            <h4>Close: {watchlist.stockClose}</h4>
            <h4>Volume: {watchlist.stockVolume}</h4>
            <fieldset>
                <div className="form-group-edit">
                    <label htmlFor="description">Notes:</label>
                    <textarea
                        required= {true} autoFocus={true}
                        type="text"
                        className="form-control-edit"
                        defaultValue={watchlist.notes}
                        onChange= {
                            (event) => {
                                const copy = {...notes}
                                copy.notes = event.target.value
                                update(copy)
                            }

                        } ></textarea>
                </div>
            </fieldset>
            <button className="btn btn-primary" onClick={submitForm}>
                Submit Form
            </button>
            </div>
        </form>
        </div>
        </>
    )
}