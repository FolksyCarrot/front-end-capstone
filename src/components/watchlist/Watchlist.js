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

    const deleteListItem = (event, id) => {
    event.preventDefault()
        return fetch(`http://localhost:8088/watchlist/${id}`, {
            method: "DELETE"
        }) 
        .then(() => {
            fetch("http://localhost:8088/watchlist")
            .then(res => res.json())
            .then((data) => {
                setList(data)
        })
        },[]
        )
    }
    
    

    return (
        <>
            <h1>Watchlist</h1>
                <ul>
                    {
                        list.map((watchlist) => <li id={watchlist.id}><h2>{watchlist.stockSymbol}</h2> <h4>Open: {watchlist.stockOpen}</h4> <h4>Close: {watchlist.stockClose}</h4> <h4>Volume: {watchlist.stockVolume}</h4>{watchlist.notes}<button id={watchlist.id} onClick={(evt) =>history.push(`/watchlist/${parseInt(evt.target.id)}`)}>Edit</button><button onClick ={(event) => {deleteListItem(event, watchlist.id)}}>delete</button></li>)
                    }
                </ul>
        
        </>
    )
}



