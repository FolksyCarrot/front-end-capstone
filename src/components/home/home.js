import React, { useEffect, useState} from "react"
import { useHistory } from "react-router-dom";
import "./home.css"

export const Home = () => {

    const [stocks, setStocks] = useState([])
    const history = useHistory()
    const reRender = () => {
        fetch ("http://localhost:8088/data")
            .then ( res => res.json())
            .then ((data)=> {
                setStocks(data)
                console.log(data)
            })
    }


    useEffect(
        () => {
           reRender()
           
        },
        []
    )


    return (
        <>
            <h1> Soaring Stocks</h1>
           
                <div className="stock--list">

                {
                    stocks.map((stock) => {
                        
                        return <div className="modal" key={stock.symbol}><h2>{stock.name}</h2><h3>Ticker: {stock.symbol}</h3> <h5>Open: {stock.open}</h5> <h5> Close: {stock.close}</h5> <h5>Volume: {stock.volume}</h5><button onClick={() => history.push(`/stockform/${stock.symbol}`)} >Add to watchlist</button></div>
                        
                    })
                }

                </div>
        
        </>
    )
}

// http://api.marketstack.com/v1/eod?access_key=7932502e72211a0b7cec01fa7a53f0e3&symbols=AAPL,MSFT,BA,C,JPM,PFE,DIS,GM,QCOM,CAT,WFC,IBM,NVDA,LMT,SNAP,SBUX,AMD,BABA,SNAP,TSLA,BAC&limit=20

//added div of modaul to the return statement