import React, { useState, useEffect } from "react"
import { useHistory } from "react-router-dom"
import "./Watchlist.css"

export const Watchlist = () => {

    const [list, setList]= useState([])
    const [id, setId] = useState(null)
    const user = parseInt(localStorage.getItem("stock_customer"))
    const history= useHistory()

    useEffect( 
        () => {
            fetch(`http://localhost:8088/watchlist?userId=${user}`)
        .then(res => res.json())
        .then((data) => {
            setList(data)
        })
        },[]
        
    )

    const deleteListItem = (event, id) => {
    event.preventDefault()
        return fetch(`http://localhost:8088/watchlist/${id}`, {
            method: "DELETE"
        }) 
        .then(() => {
            return fetch(`http://localhost:8088/watchlist?userId=${user}`)
            .then(res => res.json())
            .then((data) => {
                setList(data)
        })
        },[]
        )
    }
    
    

    return (
        <>
            <div className="watchlist--h2"><h1>Watchlist</h1></div>
                <ul>
                    {
                        list.map((watchlist) => <li id={watchlist.id} className="watchlist--item"><div><img src={watchlist.stockPicture} className="watchlist--image"/></div><h2>{watchlist.stockSymbol}</h2> <h4>Open: {watchlist.stockOpen}</h4> <h4>Close: {watchlist.stockClose}</h4> <h4>Volume: {watchlist.stockVolume}</h4><div className="watchlist--noteContainer"><p className="watchlist--notes">{watchlist.notes}</p><button id={watchlist.id} onClick={(evt) =>history.push(`/watchlist/${parseInt(evt.target.id)}`)}>Edit</button><button onClick ={(event) => {deleteListItem(event, watchlist.id)}}>delete</button></div></li>)
                    }
                </ul>
        
        </>
    )
}



