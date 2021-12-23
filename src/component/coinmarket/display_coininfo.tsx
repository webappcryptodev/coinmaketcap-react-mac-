import React, { useEffect, useState } from "react";
import ApexChart from "../coin_chart/coin-chart";
import { fetchData } from "./fetch_coindata";
import "../../styles/custom.css";

const CoinMarketPrice = () => {
    
    const [Oracle_price, setOracle_price] = useState("38.26");
    const [Day_pro, setDay_pro] = useState("24216");
    const [Market_price, setMarket_price] = useState("35.04");
    const [Market_price_pro, setMarket_price_pro] = useState("+8.41");
    const [Market_cap, setMarket_cap] = useState("4.004");
    const [Market_cap_pro, setMarket_cap_pro] = useState("26.21");
    const [Circulating_supply, setCirculating_supply] = useState("104.640");
    const [Max_supply, setMax_supply] = useState("223");
    const [Data_credit_price, setData_credit_price] = useState("0.00001");
    const [Dc_per_HNT, setDc_per_HNT] = useState("3446659");

    useEffect(()=>{
        fetchData();
    }, [Oracle_price, Day_pro])

    return (
        <div className="flex justify-center">
            <div className="grid grid-cols-2 gap-4 mt-6 font-mono">
                <div className="col-span-2 rounded-md h-32 m pt-4 pb-2 px-4 py-4 bg-card">
                    <div className="grid grid-cols-5">
                        <div className="col-span-2">
                            <label htmlFor="" className="text-purple-400">Oracle Price</label>
                            <h2 className="text-3xl">${Oracle_price}</h2>
                            <h5 className="text-lg text-market">+{Day_pro}%</h5>            
                        </div>                    
                        <div className="col-span-3">
                            <ApexChart />
                            <label htmlFor="" className="absolute chart-description">30day Trend</label>
                        </div>                
                    </div>             
                </div>
                <div className="h-32 m pt-4 pb-2 px-4 py-4 bg-card rounded-md">
                    <label htmlFor="" className="text-purple-400">Market Price</label><br/>
                    <h2 className="text-2xl">${Market_price}</h2>
                    <h5 className="text-lg text-market">{Market_price_pro}%</h5>
                </div>
                <div className="h-32 m pt-4 pb-2 px-4 py-4 bg-card	rounded-md">
                    <label htmlFor="" className="text-purple-400">Market Cap</label><br />
                    <h2 className="text-2xl">${Market_cap}B</h2>
                    <h5 className="text-lg text-purple-400">Vol:{Market_cap_pro}M</h5>
                </div>
                <div className="h-32 m pt-4 pb-2 px-4 py-4 bg-card	rounded-md">
                    <label htmlFor="" className="text-purple-400">Circulation Supply</label><br />
                    <h2 className="text-2xl">${Circulating_supply}</h2>
                    <h5 className="text-lg text-purple-400">HNT</h5>
                </div>
                <div className="h-32 m pt-4 pb-2 px-4 py-4 bg-card	rounded-md">
                    <label htmlFor="" className="text-purple-400">Max Supply</label><br />
                    <h2 className="text-2xl">${Max_supply}M</h2>
                    <h5 className="text-lg text-purple-400">HNT</h5>
                </div>
                <div className="h-32 m pt-4 pb-2 px-4 py-4 bg-card	rounded-md">
                    <label htmlFor="" className="text-purple-400">Data Credit Price</label><br />
                    <h2 className="text-2xl">${Data_credit_price}</h2>
                    <h5 className="text-lg text-purple-400">fixed</h5>
                </div>
                <div className="h-32 m pt-4 pb-2 px-4 py-4 bg-card	rounded-md">
                    <label htmlFor="" className="text-purple-400">DC Per HNT</label><br />
                    <h2 className="text-2xl">${Dc_per_HNT}</h2>        
                </div>
            </div>   
        </div>
    )
}

export default CoinMarketPrice;
