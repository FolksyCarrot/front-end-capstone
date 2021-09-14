import React, { useState, useEffect } from "react"
import { useHistory, useParams } from "react-router-dom";

export const StockForm = () => {

    const [stocks, setStocks] = useState([])
    const [notes, update] = useState()
    const history = useHistory()
    const {symbol} = useParams()

    const reRender = () => {
        fetch (`http://api.marketstack.com/v1/eod?access_key=7932502e72211a0b7cec01fa7a53f0e3&symbols=${symbol}&limit=1`)
            .then ( res => res.json())
            .then ((data)=> {
                setStocks(data.data)
                console.log(data.data)
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
            stockSymbol: stocks[0].symbol,
            stockOpen: stocks[0].open,
            stockClose: stocks[0].close,
            stockVolume: stocks[0].volume,
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
    console.log(history)
    return (
        <>
           
        
        <form className="stockForm">
            <h1 className="stockForm__title">Stock Wishlist</h1>
            {
                stocks.map((stock) =><><h2>{stock.symbol}</h2><div>Open:{stock.open}</div><div>Close:{stock.close}</div><div>Volume:{stock.volume}</div></>)
            }
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