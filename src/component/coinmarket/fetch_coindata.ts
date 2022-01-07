import axios from 'axios'

export const fetchData = async() => {
    let coinData:any;    
    try {
        let res : any;
        res = await axios.get(`/top`).then((d:any)=>{                  
            coinData = d.data.data;                        
        });                
        return coinData;                

    } catch (error) {
        console.log(error);
    }

}
