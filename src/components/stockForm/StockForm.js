import React, { useState, useEffect } from "react"
import { useHistory, useParams } from "react-router-dom";

export const StockForm = () => {

    const [stocks, setStocks] = useState({})
    const [notes, update] = useState()
    const history = useHistory()
    const {symbol} = useParams()

    const reRender = () => {
        fetch (`http://localhost:8088/data?symbol=${symbol}`)
            .then ( res => res.json())
            .then ((data)=> {
                setStocks(data[0])
                
                
            })
    }


    useEffect(
        () => {
           reRender()
           console.log(stocks)
        },
        []
    )

    const submitForm = (event) => {
      event.preventDefault()

        const stockObject = {
            userId: parseInt(localStorage.getItem("stock_customer")),
            stockSymbol: stocks.symbol,
            stockOpen: stocks.open,
            stockClose: stocks.close,
            stockVolume: stocks.volume,
            notes: notes.notes
        }


        const fetchOption = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(stockObject)
        }
        
        return fetch("http://localhost:8088/watchlist", fetchOption)
            .then(() => history.push("/home"))
    }
    
    return (
        <>
           
        
        <form className="stockForm">
            <h1 className="stockForm__title">Stock Wishlist</h1>
            
               <h2>{stocks.symbol}</h2><div>Open:{stocks.open}</div><div>Close:{stocks.close}</div><div>Volume:{stocks.volume}</div>
            
            <fieldset>
                <div className="form-group">
                    <label htmlFor="description">Notes:</label>
                    <textarea
                        required= {true} autoFocus={true}
                        type="text"
                        className="form-control"
                        placeholder="Notes of Stock"
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