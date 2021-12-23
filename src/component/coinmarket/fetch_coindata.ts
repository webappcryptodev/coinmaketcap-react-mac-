import axios from 'axios'

export const fetchData = async () => {
    let qs = `?start=1&limit=5000&convert=USD`;
    try {
        let res = await axios.get('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest' + qs, {
            headers: { 'X-CMC_PRO_API_KEY': '74b45c73-d6a3-4807-9b51-203d974ad3cb' }
        });
        console.log(res);
        // return {
        //     cryptos: res.data.slice(0, 50)            
        // }
        

    } catch (error) {
        console.log(error);
    }

}
