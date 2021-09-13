import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./home/home"

export const ApplicationViews = () => {
    return (
        <>
            <Route path="/home">
                <Home />
            </Route>

            <Route path="/watchlist">
                
            </Route>

            <Route path="/stockForm">
                
            </Route>

        
        </>
    )
}