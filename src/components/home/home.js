import React, { useEffect, useState} from "react"
import { useHistory } from "react-router-dom";
import "./home.css"
import stockHome from "../images/stock-home-page.jpg"
import stockTicker from "../images/stockTickerHome.gif"

export const Home = () => {

    const [stocks, setStocks] = useState([])
    const [search, setSearch] = useState("")
    const history = useHistory()
    const reRender = () => {
        return fetch ("http://localhost:8088/data")
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

    const searchRender = () => {
        return fetch (`http://localhost:8088/data?name_like=${search}`)
            .then ( res => res.json())
            .then ((data)=> {
                setStocks(data)
                
            })
    }

    useEffect(
        () => {
           searchRender()
           
        },
        [search]
    )

    return (
        <>
            <main className="main--container">

            <div className="home--picture"><img src={stockTicker} alt="picture" /></div>

            <div className="home--heading"><h1 className="home--h1"> Home</h1></div>






                                            <div class="markets__table">
                                                <table class="table table--primary align--right">
                                                    <tbody class="markets__group">


                                            <tr  class="table__row index" is="bg-gavel" data-charting-symbol="INDEX/US/DOW JONES GLOBAL/DJIA">
                                                <td class="table__cell">
                                                    <bg-quote tick="100" class="chart" channel="/zigman2/quotes/210598065/realtime" data-last-stamp="1632414941000"><span class="indicator"></span></bg-quote>
                                                </td>
                                                <td class="table__cell symbol"><div data-track-code="MW_Header_Market Data_Quote Click_Dow Jones Industrial Average" href="https://www.marketwatch.com/investing/index/djia?mod=home-page">Dow</div></td>
                                                <td class="table__cell price">
                                                    <bg-quote class="ignore-color" field="last" format="0,0.00" channel="/zigman2/quotes/210598065/realtime" data-last-stamp="1632414941000" data-last-raw="34784">34,784.00</bg-quote>
                                                </td>
                                                <td class="table__cell change">
                                                    <bg-quote class="chart--positive" field="change" format="0,0.00" channel="/zigman2/quotes/210598065/realtime" data-last-stamp="1632414941000" data-last-raw="525.68">525.68</bg-quote>
                                                </td>
                                                <td class="table__cell percent">
                                                    <bg-quote class="chart--positive" field="percentchange" format="0.00%" channel="/zigman2/quotes/210598065/realtime" data-last-stamp="1632414941000">1.53%</bg-quote>
                                                </td>
                                                <td class="table__cell arrow">
                                                <span class="material-icons up-arrow">
                                                    arrow_drop_up
                                                </span>
                                                </td>
                                            </tr>
                                            <tr onclick="this.querySelector('a').click();" class="table__row index is-active" is="bg-gavel" data-charting-symbol="INDEX/US/S&amp;P US/SPX">
                                                <td class="table__cell">
                                                    <bg-quote tick="100" class="chart" channel="/zigman2/quotes/210599714/realtime" data-last-stamp="1632414945000"><span class="indicator"></span></bg-quote>
                                                </td>
                                                <td class="table__cell symbol"><div data-track-code="MW_Header_Market Data_Quote Click_S&amp;P 500 Index" href="https://www.marketwatch.com/investing/index/spx?mod=home-page">S&amp;P 500</div></td>
                                                <td class="table__cell price">
                                                    <bg-quote class="ignore-color" field="last" format="0,0.00" channel="/zigman2/quotes/210599714/realtime" data-last-stamp="1632414945000" data-last-raw="4451.48">4,451.48</bg-quote>
                                                </td>
                                                <td class="table__cell change">
                                                    <bg-quote class="chart--positive" field="change" format="0,0.00" channel="/zigman2/quotes/210599714/realtime" data-last-stamp="1632414945000" data-last-raw="55.84">55.84</bg-quote>
                                                </td>
                                                <td class="table__cell percent">
                                                    <bg-quote class="chart--positive" field="percentchange" format="0.00%" channel="/zigman2/quotes/210599714/realtime" data-last-stamp="1632414945000">1.27%</bg-quote>
                                                </td>
                                                <td class="table__cell arrow">
                                                <span class="material-icons up-arrow">
                                                    arrow_drop_up
                                                </span>
                                                </td>
                                            </tr>
                                            <tr onclick="this.querySelector('a').click();" class="table__row index" is="bg-gavel" data-charting-symbol="INDEX/US/XNAS/COMP">
                                                <td class="table__cell">
                                                    <bg-quote tick="100" class="chart" channel="/zigman2/quotes/210598365/realtime" data-last-stamp="1632414941115"><span class="indicator"></span></bg-quote>
                                                </td>
                                                <td class="table__cell symbol"><div data-track-code="MW_Header_Market Data_Quote Click_NASDAQ Composite Index" href="https://www.marketwatch.com/investing/index/comp?mod=home-page">Nasdaq</div></td>
                                                <td class="table__cell price">
                                                    <bg-quote class="ignore-color" field="last" format="0,0.00" channel="/zigman2/quotes/210598365/realtime" data-last-stamp="1632414941115" data-last-raw="15031.6081672011">15,031.61</bg-quote>
                                                </td>
                                                <td class="table__cell change">
                                                    <bg-quote class="chart--positive" field="change" format="0,0.00" channel="/zigman2/quotes/210598365/realtime" data-last-stamp="1632414941115" data-last-raw="134.760976">134.76</bg-quote>
                                                </td>
                                                <td class="table__cell percent">
                                                    <bg-quote class="chart--positive" field="percentchange" format="0.00%" channel="/zigman2/quotes/210598365/realtime" data-last-stamp="1632414941115">0.90%</bg-quote>
                                                </td>
                                                <td class="table__cell arrow">
                                                <span class="material-icons up-arrow">
                                                    arrow_drop_up
                                                </span>
                                                </td>
                                            </tr>
                                            <tr onclick="this.querySelector('a').click();" class="table__row index" is="bg-gavel" data-charting-symbol="INDEX/US/S&amp;P DOW JONES/GDOW">
                                                <td class="table__cell">
                                                    <bg-quote tick="100" class="chart" channel="/zigman2/quotes/210599024/realtime" data-last-stamp="1632414939000"><span class="indicator"></span></bg-quote>
                                                </td>
                                                <td class="table__cell symbol"><div data-track-code="MW_Header_Market Data_Quote Click_Global Dow Realtime USD" href="https://www.marketwatch.com/investing/index/gdow?mod=home-page">GlobalDow</div></td>
                                                <td class="table__cell price">
                                                    <bg-quote class="ignore-color" field="last" format="0,0.00" channel="/zigman2/quotes/210599024/realtime" data-last-stamp="1632414939000" data-last-raw="4015.08">4,015.08</bg-quote>
                                                </td>
                                                <td class="table__cell change">
                                                    <bg-quote class="chart--positive" field="change" format="0,0.00" channel="/zigman2/quotes/210599024/realtime" data-last-stamp="1632414939000" data-last-raw="48.38">48.38</bg-quote>
                                                </td>
                                                <td class="table__cell percent">
                                                    <bg-quote class="chart--positive" field="percentchange" format="0.00%" channel="/zigman2/quotes/210599024/realtime" data-last-stamp="1632414939000">1.22%</bg-quote>
                                                </td>
                                                <td class="table__cell arrow">
                                                <span class="material-icons up-arrow">
                                                    arrow_drop_up
                                                </span>
                                                </td>
                                            </tr>
                                            <tr onclick="this.querySelector('a').click();" class="table__row index" is="bg-gavel" data-charting-symbol="FUTURE/US/XNYM/GC00">
                                                <td class="table__cell">
                                                    <bg-quote tick="100" class="chart" channel="/zigman2/quotes/210034565/delayed" data-last-stamp="1632414344923"><span class="indicator"></span></bg-quote>
                                                </td>
                                                <td class="table__cell symbol"><div data-track-code="MW_Header_Market Data_Quote Click_GOLD" href="https://www.marketwatch.com/investing/future/gold?mod=home-page">Gold</div></td>
                                                <td class="table__cell price">
                                                    <bg-quote class="ignore-color" field="last" format="0,0.00" channel="/zigman2/quotes/210034565/delayed" data-last-stamp="1632414344923" data-last-raw="1749.3">1,749.30</bg-quote>
                                                </td>
                                                <td class="table__cell change">
                                                    <bg-quote class="chart--negative" field="change" format="0,0.00" channel="/zigman2/quotes/210034565/delayed" data-last-stamp="1632414344923" data-last-raw="-29.5">-29.50</bg-quote>
                                                </td>
                                                <td class="table__cell percent">
                                                    <bg-quote class="chart--negative" field="percentchange" format="0.00%" channel="/zigman2/quotes/210034565/delayed" data-last-stamp="1632414344923">-1.66%</bg-quote>
                                                </td>
                                                <td class="table__cell arrow">
                                                <span class="material-icons down-arrow">
                                                    arrow_drop_down
                                                </span>
                                                </td>
                                            </tr>
                                            <tr onclick="this.querySelector('a').click();" class="table__row index" is="bg-gavel" data-charting-symbol="FUTURE/US/XNYM/CL.1">
                                                <td class="table__cell">
                                                    <bg-quote tick="100" class="chart" channel="/zigman2/quotes/211629951/delayed" data-last-stamp="1632414345494"><span class="indicator"></span></bg-quote>
                                                </td>
                                                <td class="table__cell symbol"><div data-track-code="MW_Header_Market Data_Quote Click_CRUDE OIL - ELECTRONIC" href="https://www.marketwatch.com/investing/future/crude%20oil%20-%20electronic?mod=home-page">Oil</div></td>
                                                <td class="table__cell price">
                                                    <bg-quote class="ignore-color" field="last" format="0,0.00" channel="/zigman2/quotes/211629951/delayed" data-last-stamp="1632414345494" data-last-raw="73.27">73.27</bg-quote>
                                                </td>
                                                <td class="table__cell change">
                                                    <bg-quote class="chart--positive" field="change" format="0,0.00" channel="/zigman2/quotes/211629951/delayed" data-last-stamp="1632414345494" data-last-raw="1.04">1.04</bg-quote>
                                                </td>
                                                <td class="table__cell percent">
                                                    <bg-quote class="chart--positive" field="percentchange" format="0.00%" channel="/zigman2/quotes/211629951/delayed" data-last-stamp="1632414345494">1.44%</bg-quote>
                                                </td>
                                                <td class="table__cell arrow">
                                                <span class="material-icons up-arrow">
                                                    arrow_drop_up
                                                </span>
                                                </td>
                                            </tr>
                                                    </tbody>
                                                </table>
                                            </div>








                <div className="search--container"><input className="home--search" placeholder="Search" onChange={
                    (event) => setSearch(event.target.value)
                }></input>
                <span className="material-icons instant-search">search</span></div>

            <div className="home-section">





                                                    <div className="side--section">
                                                                    <div data-timestamp="1632403920000" data-docid="" data-msgid="" data-guid="20c05575-04d4-b545-765d-f525679e775c" class="element element--article   ">
                                                                <figure class="article__figure">
                                                                    
                                                                    <div class="figure__image" data-video-guid="" href="https://www.marketwatch.com/story/people-are-upset-will-proposed-ira-tax-changes-targeting-the-rich-hurt-smaller-nest-eggs-11632348973?mod=home-page" role="presentation" tabindex="-1">
                                                                        <img class="lazyautosizes lazyloaded" data-sizes="auto" alt="Read full story" data-srcset="https://images.mktw.net/im-405225?size=1.777777777777778&amp;width=220 220w,https://images.mktw.net/im-405225?size=1.777777777777778&amp;width=300 300w,https://images.mktw.net/im-405225?size=1.777777777777778&amp;width=460 460w,https://images.mktw.net/im-405225?size=1.777777777777778&amp;width=800 800w,https://images.mktw.net/im-405225?size=1.777777777777778&amp;width=920 920w,https://images.mktw.net/im-405225?size=1.777777777777778&amp;width=1240 1240w,https://images.mktw.net/im-405225?size=1.777777777777778&amp;width=1240 1240w" sizes="300px" srcset="https://images.mktw.net/im-405225?size=1.777777777777778&amp;width=220 220w,https://images.mktw.net/im-405225?size=1.777777777777778&amp;width=300 300w,https://images.mktw.net/im-405225?size=1.777777777777778&amp;width=460 460w,https://images.mktw.net/im-405225?size=1.777777777777778&amp;width=800 800w,https://images.mktw.net/im-405225?size=1.777777777777778&amp;width=920 920w,https://images.mktw.net/im-405225?size=1.777777777777778&amp;width=1240 1240w,https://images.mktw.net/im-405225?size=1.777777777777778&amp;width=1240 1240w"/>
                                                                        
                                                                    </div>
                                                                    
                                                                    
                                                                </figure>
                                                            <div class="article__content">
                                                                
                                                                
                                                                        <h3 class="article__headline">
                                                                            <div class="link" href="https://www.marketwatch.com/story/people-are-upset-will-proposed-ira-tax-changes-targeting-the-rich-hurt-smaller-nest-eggs-11632348973?mod=home-page">
                                                                                
                                                                                ‘People are upset’: Will proposed IRA tax changes targeting the rich hurt smaller nest eggs?
                                                                            </div>
                                                                        </h3>
                                                                

                                                                <div class="content--secondary">
                                                                        
                                                                        <ul class="list list--bullets">
                                                                                    <li class="bullet__item">
                                                                                            <div class="link" href="https://www.marketwatch.com/story/a-looming-crackdown-on-a-popular-retirement-tax-strategy-has-some-investors-worried-11632231650?mod=home-page">
                                                                                                
                                                                                                A looming crackdown on a popular retirement tax strategy has some investors worried
                                                                                            </div>
                                                                                    </li>
                                                                                    <li class="bullet__item">
                                                                                            <div class="link">
                                                                                                
                                                                                                Billionaires’ income taxes are a tiny fraction of their wealth, White House says. Here’s the average rate they pay
                                                                                            </div>
                                                                                    </li>
                                                                        </ul>
                                                                </div>
                                                                
                                                            </div>

                                                        </div> 

                                                        
                                                        <br/>


                                                        <div data-timestamp="1633000020000" data-docid="" data-msgid="" data-guid="20c05575-04d4-b545-767f-91303e28102b" class="element element--article   ">
                                                                    <figure class="article__figure">
                                                                        
                                                                        <div class="figure__image" data-video-guid="" href="https://www.marketwatch.com/story/facebook-alphabet-and-twitter-are-among-the-worst-internet-stocks-for-investors-right-now-these-are-the-best-says-citi-11633000070?mod=home-page" role="presentation" tabindex="-1">
                                                                            <img class="lazyautosizes lazyloaded" data-sizes="auto" alt="Read full story" data-srcset="https://images.mktw.net/im-409242?size=1.777777777777778&amp;width=220 220w,https://images.mktw.net/im-409242?size=1.777777777777778&amp;width=300 300w,https://images.mktw.net/im-409242?size=1.777777777777778&amp;width=460 460w,https://images.mktw.net/im-409242?size=1.777777777777778&amp;width=800 800w,https://images.mktw.net/im-409242?size=1.777777777777778&amp;width=920 920w,https://images.mktw.net/im-409242?size=1.777777777777778&amp;width=1240 1240w,https://images.mktw.net/im-409242?size=1.777777777777778&amp;width=1240 1240w" sizes="300px" srcset="https://images.mktw.net/im-409242?size=1.777777777777778&amp;width=220 220w,https://images.mktw.net/im-409242?size=1.777777777777778&amp;width=300 300w,https://images.mktw.net/im-409242?size=1.777777777777778&amp;width=460 460w,https://images.mktw.net/im-409242?size=1.777777777777778&amp;width=800 800w,https://images.mktw.net/im-409242?size=1.777777777777778&amp;width=920 920w,https://images.mktw.net/im-409242?size=1.777777777777778&amp;width=1240 1240w,https://images.mktw.net/im-409242?size=1.777777777777778&amp;width=1240 1240w" />
                                                                            
                                                                        </div>
                                                                        
                                                                        
                                                                    </figure>
                                                                <div class="article__content">
                                                                    
                                                                    
                                                                            <h3 class="article__headline">
                                                                                <div class="link" href="https://www.marketwatch.com/story/facebook-alphabet-and-twitter-are-among-the-worst-internet-stocks-for-investors-right-now-these-are-the-best-says-citi-11633000070?mod=home-page">
                                                                                    
                                                                                    Facebook, Alphabet and Twitter are among the worst internet stocks for investors right now. These are the best, says Citi.
                                                                                </div>
                                                                            </h3>
                                                                    

                                                                    <div class="content--secondary">
                                                                            
                                                                            <ul class="list list--bullets">
                                                                                        <li class="bullet__item">
                                                                                                <div class="link" href="https://www.marketwatch.com/story/as-facebook-faces-fire-u-s-laws-protecting-kids-online-languish-behind-europe-11632930552?mod=home-page">
                                                                                                    
                                                                                                    As Facebook faces fire, U.S. laws protecting kids online languish behind Europe
                                                                                                </div>
                                                                                        </li>
                                                                                        <li class="bullet__item">
                                                                                                <div class="link" href="https://www.marketwatch.com/livevideo?mod=home-page">
                                                                                                    
                                                                                                    Live video: Senate subcommittee hearing on Facebook and kids’ mental health
                                                                                                </div>
                                                                                        </li>
                                                                            </ul>
                                                                    </div>
                                                                    
                                                                </div>

                                                            </div>

                                                            <br/>

                                                            <div data-timestamp="1632936180000" data-docid="" data-msgid="" data-guid="20c05575-04d4-b545-7679-372cdb2bbafc" class="element element--article   ">
                                                                            <figure class="article__figure">
                                                                                
                                                                                <div class="figure__image" data-video-guid="" href="https://www.marketwatch.com/story/more-than-a-quarter-of-nasdaq-100-stocks-are-in-bear-markets-wall-street-sees-a-buying-opportunity-11632918792?mod=home-page" role="presentation" tabindex="-1">
                                                                                    <img class="lazyautosizes lazyloaded yogi" data-sizes="auto" alt="Read full story" data-srcset="https://images.mktw.net/im-408605?size=1.777777777777778&amp;width=220 220w,https://images.mktw.net/im-408605?size=1.777777777777778&amp;width=300 300w,https://images.mktw.net/im-408605?size=1.777777777777778&amp;width=460 460w,https://images.mktw.net/im-408605?size=1.777777777777778&amp;width=800 800w,https://images.mktw.net/im-408605?size=1.777777777777778&amp;width=920 920w,https://images.mktw.net/im-408605?size=1.777777777777778&amp;width=1240 1240w,https://images.mktw.net/im-408605?size=1.777777777777778&amp;width=1240 1240w" sizes="200px" srcset="https://images.mktw.net/im-408605?size=1.777777777777778&amp;width=220 220w,https://images.mktw.net/im-408605?size=1.777777777777778&amp;width=300 300w,https://images.mktw.net/im-408605?size=1.777777777777778&amp;width=460 460w,https://images.mktw.net/im-408605?size=1.777777777777778&amp;width=800 800w,https://images.mktw.net/im-408605?size=1.777777777777778&amp;width=920 920w,https://images.mktw.net/im-408605?size=1.777777777777778&amp;width=1240 1240w,https://images.mktw.net/im-408605?size=1.777777777777778&amp;width=1240 1240w"/>
                                                                                    
                                                                                </div>
                                                                                
                                                                                
                                                                            </figure>
                                                                        <div class="article__content">
                                                                            
                                                                            
                                                                                    <h3 class="article__headline">
                                                                                        <div class="link" href="https://www.marketwatch.com/story/more-than-a-quarter-of-nasdaq-100-stocks-are-in-bear-markets-wall-street-sees-a-buying-opportunity-11632918792?mod=home-page">
                                                                                            
                                                                                            More than a quarter of Nasdaq-100 stocks are in bear markets — Wall Street sees a buying opportunity
                                                                                        </div>
                                                                                    </h3>
                                                                            

                                                                            <div class="content--secondary">
                                                                                    
                                                                                    <ul class="list list--bullets">
                                                                                                <li class="bullet__item">
                                                                                                        <div class="link" href="https://www.marketwatch.com/story/professor-who-called-dow-20-000-says-hes-nervous-about-trends-in-inflation-that-could-spark-a-stock-market-correction-11632949212?mod=home-page">
                                                                                                            
                                                                                                            Professor who called Dow 20,000 says he’s nervous about trends in inflation that could spark a stock-market correction
                                                                                                        </div>
                                                                                                </li>
                                                                                                <li class="bullet__item">
                                                                                                        <div class="link" href="https://www.marketwatch.com/story/sudden-realization-that-inflation-may-persist-is-starting-to-dawn-on-many-u-s-investors-11632942756?mod=home-page">
                                                                                                            
                                                                                                            Sudden realization that inflation may persist is starting to dawn on many U.S. investors
                                                                                                        </div>
                                                                                                </li>
                                                                                                <li class="bullet__item">
                                                                                                        <div class="link" href="https://www.marketwatch.com/story/direct-listings-are-just-getting-started-say-pioneers-of-the-first-deal-as-two-hit-the-ipo-market-in-the-same-week-for-the-first-time-11632931770?mod=home-page">
                                                                                                            
                                                                                                            Direct listings are just getting started, say pioneers of the first deal, as two hit the IPO market in the same week for the first time
                                                                                                        </div>
                                                                                                </li>
                                                                                    </ul>
                                                                            </div>
                                                                            
                                                                        </div>

                                                                    </div>





                                                    </div>
           



                <div className="stock--list">
                   
                {
                    stocks.map((stock) => {
                        
                        return <div className={stock.open-stock.close> 0 ? "positive" : "negative" } key={stock.symbol}><h2>{stock.name}</h2><h3>Ticker: {stock.symbol}</h3> <h5>Open: {stock.open}</h5> <h5> Close: {stock.close}</h5> <h5>Volume: {stock.volume}</h5><h5>Change: {(stock.open -stock.close).toFixed(2)}</h5><button onClick={() => history.push(`/stockform/${stock.symbol}`)} >Add to watchlist</button></div>
                        
                    })
                }
                </div>

                </div>

            <footer className="home--footer">

            <header class="trending__header">
                        <h4 class="trending__title">Trending Tickers</h4>
                        <div class="trending__description"><div class="status"></div>Higher volume than normal.</div>
                    </header>

            <ul class="list list--trending horizontal">
                                    <li class="trending__item ticker">
                                        <bg-quote class="negative" channel="/zigman2/quotes/202760411/composite">
                                            <div class="trending__link" href="/investing/stock/glbs?mod=trending-tickers">
                                                <div class="link__content">
                                                    <div class="trending__data">
                                                        <span class="trending__symbol">GLBS</span>
                                                        <span class="price"><bg-quote class="value--stock" field="Last" session="after" channel="/zigman2/quotes/202760411/composite" format="$0,0.00">$3.07</bg-quote></span>
                                                    </div>
                                                    <div class="trending__data">
                                                    <span class="material-icons down-arrow">
                                                        arrow_drop_down
                                                    </span>
                                                        <span class="trending__change percent ignore-color">
                                                            <bg-quote class ="trending__percentage" field="percentChange" format="0.00%" session="after" channel="/zigman2/quotes/202760411/composite">-8.63%</bg-quote>
                                                        </span>
                                                        <span class="trending__change points ignore-color">
                                                            <bg-quote class="trending__number" field="change" format="0,0.00" session="after" channel="/zigman2/quotes/202760411/composite">-0.29</bg-quote>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </bg-quote>
                                    </li>
                                    <li class="trending__item ticker">
                                        <bg-quote class="neutral" channel="/zigman2/quotes/209590525/composite">
                                            <div class="trending__link" href="/investing/stock/wafd?mod=trending-tickers">
                                                <div class="link__content">
                                                    <div class="trending__data">
                                                        <span class="trending__symbol">TWTR</span>
                                                        <span class="price"><bg-quote class="value--stock" field="Last" session="after" channel="/zigman2/quotes/209590525/composite" format="$0,0.00">$62.61</bg-quote></span>
                                                    </div>
                                                    <div class="trending__data">
                                                    <span class="material-icons down-arrow">
                                                        arrow_drop_down
                                                    </span>
                                                        <span class="trending__change percent ignore-color">
                                                            <bg-quote class="trending__percentage" field="percentChange" format="0.00%" session="after" channel="/zigman2/quotes/209590525/composite">-3.93%</bg-quote>
                                                        </span>
                                                        <span class="trending__change points ignore-color">
                                                            <bg-quote class ="trending__number" field="change" format="0,0.00" session="after" channel="/zigman2/quotes/209590525/composite">-2.62</bg-quote>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </bg-quote>
                                    </li>
                                    <li class="trending__item ticker">
                                        <bg-quote class="positive" channel="/zigman2/quotes/206019615/composite">
                                            <div class="trending__link" href="/investing/stock/gbt?mod=trending-tickers">
                                                <div class="link__content">
                                                    <div class="trending__data">
                                                        <span class="trending__symbol">GBT</span>
                                                        <span class="price"><bg-quote class="value--stock" field="Last" session="after" channel="/zigman2/quotes/206019615/composite" format="$0,0.00" data-last-stamp="1632790191132" data-last-raw="26.26">$26.26</bg-quote></span>
                                                    </div>
                                                    <div class="trending__data">
                                                    <span class="material-icons up-arrow">
                                                        arrow_drop_up
                                                    </span>
                                                        <span class="trending__change percent ignore-color">
                                                            <bg-quote field="percentChange" format="0.00%" session="after" channel="/zigman2/quotes/206019615/composite" data-last-stamp="1632790191132" class="trending__percentage">0.15%</bg-quote>
                                                        </span>
                                                        <span class="trending__change points ignore-color">
                                                            <bg-quote field="change" format="0,0.00" session="after" channel="/zigman2/quotes/206019615/composite" data-last-stamp="1632790191132" data-last-raw="0.0400000000000027" class="trending__number">0.04</bg-quote>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </bg-quote>
                                    </li>
                                    <li class="trending__item ticker">
                                        <bg-quote class="positive" channel="/zigman2/quotes/203606051/composite">
                                            <div class="trending__link" href="/investing/stock/gbr?mod=trending-tickers">
                                                <div class="link__content">
                                                    <div class="trending__data">
                                                        <span class="trending__symbol">GBR</span>
                                                        <span class="price"><bg-quote class="value--stock" field="Last" session="after" channel="/zigman2/quotes/203606051/composite" format="$0,0.00">$5.84</bg-quote></span>
                                                    </div>
                                                    <div class="trending__data">
                                                    <span class="material-icons up-arrow">
                                                        arrow_drop_up
                                                    </span>
                                                        <span class="trending__change percent ignore-color">
                                                            <bg-quote class="trending__percentage" field="percentChange" format="0.00%" session="after" channel="/zigman2/quotes/203606051/composite">9.77%</bg-quote>
                                                        </span>
                                                        <span class="trending__change points ignore-color">
                                                            <bg-quote class="trending__number" field="change" format="0,0.00" session="after" channel="/zigman2/quotes/203606051/composite">0.52</bg-quote>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </bg-quote>
                                    </li>
                                    <li class="trending__item ticker">
                                        <bg-quote class="neutral" >
                                            <div class="trending__link" href="/investing/stock/tef?mod=trending-tickers">
                                                <div class="link__content">
                                                    <div class="trending__data">
                                                        <span class="trending__symbol">INTC</span>
                                                        <span class="price"><bg-quote class="value--stock" field="Last" session="after" channel="/zigman2/quotes/207034643/composite" format="$0,0.00">$53.91</bg-quote></span>
                                                    </div>
                                                    <div class="trending__data">
                                                    <span class="material-icons down-arrow">
                                                        arrow_drop_down
                                                    </span>
                                                        <span class="trending__change percent ignore-color">
                                                            <bg-quote class="trending__percentage" field="percentChange" format="0.00%" session="after" channel="/zigman2/quotes/207034643/composite">-1.24%</bg-quote>
                                                        </span>
                                                        <span class="trending__change points ignore-color">
                                                            <bg-quote class="trending__number" field="change" format="0,0.00" session="after" channel="/zigman2/quotes/207034643/composite">-0.65</bg-quote>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </bg-quote>
                                    </li>
                    </ul>

            </footer>
            </main>
        
        </>
    )
}

// http://api.marketstack.com/v1/eod?access_key=7932502e72211a0b7cec01fa7a53f0e3&symbols=AAPL,MSFT,BA,C,JPM,PFE,DIS,GM,QCOM,CAT,WFC,IBM,NVDA,LMT,SNAP,SBUX,AMD,BABA,SNAP,TSLA,BAC&limit=20

//added div of modaul to the return statement









