import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"
import stockSymbol from "../images/Soaring Stocks.png"


export const NavBar = (props) => {
    
    return (
        <main className="navbar__main">
        <ul className="navbar">
            <div ><img className ="navbar__image" src= {stockSymbol} alt ="picture of symbol" /></div>
            <li className="navbar__item active">
                <Link className="navbar__link" to="/home">Home</Link>
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to="/watchlist">Watchlist</Link>
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to="#" onClick= {
                    () => localStorage.clear()
                } >Logout</Link>
            </li>
        </ul>
        
        </main> 
        
    )
}


     
    