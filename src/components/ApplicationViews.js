import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./home/home"
import { StockForm } from "./stockForm/StockForm"

export const ApplicationViews = () => {
    return (
        <>
            <Route exact path="/home">
                <Home />
            </Route>

            <Route path="/watchlist">
                
            </Route>

            <Route path="/stockForm">
                
            </Route>

            <Route exact path="/stockForm/:symbol">
                <StockForm />
            </Route>

        
        </>
    )
}