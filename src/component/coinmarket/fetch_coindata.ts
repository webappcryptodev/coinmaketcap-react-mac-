import axios from 'axios'

export const fetchData = async() => {
    let coinData:any;
    const page = 1;
    const limit = 10;
    try {
        let res : any;
        res = await axios.get(`/top`).then((d:any)=>{
            // console.log(d.data.data);            
            coinData = d.data.data;
        });
        // console.log(coinData);
        return coinData;
        // return {
        //     cryptos: res.data.slice(0, 50)            
        // }
        

    } catch (error) {
        console.log(error);
    }

}
