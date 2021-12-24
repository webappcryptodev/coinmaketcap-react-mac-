import React, { useEffect, useState } from "react";
import ApexChart from "../coin_chart/coin-chart";
import { fetchData } from "./fetch_coindata";
import "../../styles/custom.css";

const CoinMarketPrice = () => {

    const [Oracle_price, setOracle_price] = useState("");
    const [Day_pro, setDay_pro] = useState("");
    const [Market_price, setMarket_price] = useState("");
    const [Market_price_pro, setMarket_price_pro] = useState("");
    const [Market_cap, setMarket_cap] = useState("");
    const [Market_cap_pro, setMarket_cap_pro] = useState("");
    const [Circulating_supply, setCirculating_supply] = useState("");
    const [Max_supply, setMax_supply] = useState("");
    const [Data_credit_price, setData_credit_price] = useState("0.00001");
    const [Dc_per_HNT, setDc_per_HNT] = useState("3446659");

    const [change_direct, setColor] = useState("text-market-up");

    useEffect(() => {

        const getData = setInterval(async () => {
            let HNT_data: any = await fetchData();
            if(Number(Day_pro) < 0){                
                setColor("text-market-up");
            }else{
                setColor("text-market-down");                
            }     
            console.log(HNT_data);
            setOracle_price((HNT_data[0].quote.USD.price).toFixed(2));
            setDay_pro((HNT_data[0].quote.USD.percent_change_24h).toFixed(2));       
            setMarket_price((HNT_data[0].quote.USD.price).toFixed(2));
            setMarket_price_pro((HNT_data[0].quote.USD.market_cap_dominance).toFixed(2));
            setMarket_cap(((HNT_data[0].quote.USD.market_cap)/1000000000).toFixed(2));
            setMarket_cap_pro(((HNT_data[0].quote.USD.volume_24h)/1000000).toFixed(2));
            setCirculating_supply(((HNT_data[0].circulating_supply)/1000000).toFixed(2));
            setMax_supply(((HNT_data[0].max_supply)/1000000).toFixed(2));                                                
        }, 1000);
        return () => clearInterval(getData);
        // return () => clearInterval(getData);
        // console.log(HNT_data)  ;
        // setOracle_price(HNT_data.quote.USD.price);
        // console.log(HNT_data.quote.USD.price);
    }, [Oracle_price])

return (
    <div className="flex justify-center">
        <div className="grid grid-cols-2 gap-4 mt-6 font-mono">
            <div className="col-span-2 rounded-md h-32 m pt-4 pb-2 px-4 py-4 bg-card">
                <div className="grid grid-cols-5">
                    <div className="col-span-2">
                        <label htmlFor="" className="text-purple-400">Oracle Price</label>
                        <h2 className="text-3xl">${Oracle_price}</h2>
                        <h5 className={`text-lg ${change_direct}`}  >{Number(Day_pro)>0?'+':''}{Day_pro}%</h5>
                    </div>
                    <div className="col-span-3">
                        <ApexChart />
                        <label htmlFor="" className="absolute chart-description">30day Trend</label>
                    </div>
                </div>
            </div>
            <div className="h-32 m pt-4 pb-2 px-4 py-4 bg-card rounded-md">
                <label htmlFor="" className="text-purple-400">Market Price</label><br />
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
