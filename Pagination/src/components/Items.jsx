import React, {useState, useEffect} from 'react';
import './Items.css'
import Card from './Card'

const Items = () => {
    const [page, setPage] = useState(1);
    const[bit, setBit] = useState([]);

    const fetchBitcoin = async () => {
        const res = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false');
        const data = await res.json();
        setBit(data);
    }

    useEffect(() => {
        fetchBitcoin()
    },[]);

    const handlePage = (value) =>{
        setPage(page => value);
    }
    console.log(page);
    return (
        <>
        <div className="item__box">
            <div className='items'>
                {bit.slice(page * 10-10, page*10).map((d)=>
                    <Card id={d.id} image={d.image} title={d.name} symbol={d.symbol} key={d.id}/>
                )}
            </div>
        </div>
            
        <div className='pageholder'>
            <button onClick={() => setPage(page => (page > 1) ? page - 1 : page)}>Prev...</button>
            {[...Array(bit.length / 10)].map((_,i) => 
            <span 
                key = {i}
                className='pageno'
                onClick={() => handlePage(i+1)}
            >{i+1}</span>)}
            <button onClick={() => setPage(page => (page < bit.length / 10) ? page + 1 : page)}>Next..</button>
        </div>
            
        </>
    )
}

export default Items