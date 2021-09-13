import React, { useEffect, useState} from "react"


export const Home = () => {

    const [stocks, setStocks] = useState([])

    const reRender = () => {
        fetch ("http://api.marketstack.com/v1/eod?access_key=7932502e72211a0b7cec01fa7a53f0e3&symbols=AAPL,MSFT,BA,C,JPM,PFE,DIS,GM,QCOM,CAT,WFC,IBM,NVDA,LMT,SNAP,SBUX,AMD,BABA,SNAP,TSLA,BAC&limit=20")
            .then ( res => res.json())
            .then ((data)=> {
                setStocks(data)
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
                <ul>

                {
                    stocks.map((stock) => {
                        return <li key={stock.data.id}>{stock.data.symbol} {stock.data.open} {stock.data.volume}<button onClick={() => history.push("/")}>Add to watchlist</button></li>
                    })
                }

                </ul>
        
        </>
    )
}