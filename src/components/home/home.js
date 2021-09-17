import React, { useEffect, useState} from "react"
import { useHistory } from "react-router-dom";
import "./home.css"
import stockHome from "../images/stock-home-page.jpg"


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
            <main className="main--container">
            <div className="home--heading"><h1> Soaring Stocks</h1></div>
                <div className="home--picture"><img src={stockHome} alt="picture" /></div>
           
                <div className="stock--list">

                {
                    stocks.map((stock) => {
                        console.log(stock.open-stock.close)
                        return <div className={stock.open-stock.close> 0 ? "positive" : "negative" } key={stock.symbol}><h2>{stock.name}</h2><h3>Ticker: {stock.symbol}</h3> <h5>Open: {stock.open}</h5> <h5> Close: {stock.close}</h5> <h5>Volume: {stock.volume}</h5><h5>Change: {(stock.open -stock.close).toFixed(2)}</h5><button onClick={() => history.push(`/stockform/${stock.symbol}`)} >Add to watchlist</button></div>
                        
                    })
                }

                </div>
            </main>
        
        </>
    )
}

// http://api.marketstack.com/v1/eod?access_key=7932502e72211a0b7cec01fa7a53f0e3&symbols=AAPL,MSFT,BA,C,JPM,PFE,DIS,GM,QCOM,CAT,WFC,IBM,NVDA,LMT,SNAP,SBUX,AMD,BABA,SNAP,TSLA,BAC&limit=20

//added div of modaul to the return statement