import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./home/home"
import { StockForm } from "./stockForm/StockForm"
import { EditForm } from "./watchlist/EditForm"
import { Watchlist } from "./watchlist/Watchlist"

export const ApplicationViews = () => {
    return (
        <>
            <Route exact path="/home">
                <Home />
            </Route>

            <Route exact path="/watchlist">
                <Watchlist />
            </Route>

            <Route exact path="/stockForm/:symbol">
                <StockForm />
            </Route>

            <Route exact path="/watchlist/:watchlistId(\d+)" >
               <EditForm />
            </Route>

        
        </>
    )
}