import React, { useState, useEffect } from "react"
import { useParams, useHistory } from "react-router-dom"


export const Watchlist = () => {

    const [list, setList]= useState([])
    const [id, setId] = useState(null)
    const history= useHistory()
    
    useEffect( 
        () => {
            fetch("http://localhost:8088/watchlist")
        .then(res => res.json())
        .then((data) => {
            setList(data)
        })
        },[]
        
    )

    // fetch(`http://localhost:8088/watchlist/${watchlistId}`, {
    //     method: "PUT",
    //     headers: {
    //         "Content-Type": "application/json"
    //     },
    //     body: JSON.stringify(function)
    // })
    //     .then(() => {})

    

    return (
        <>
            <h1>Watchlist</h1>
                <ul>
                    {
                        list.map((watchlist) => <li><h2>{watchlist.stockSymbol}</h2> {watchlist.stockOpen} {watchlist.stockClose} {watchlist.stockVolume}{watchlist.notes}<button id={watchlist.id} onClick={(evt) =>history.push(`/watchlist/${parseInt(evt.target.id)}`)}>Edit</button><button>delete</button></li>)
                    }
                </ul>
        
        </>
    )
}



