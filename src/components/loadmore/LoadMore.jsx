import React, { useEffect, useState } from 'react'
import "./style.css"

const LoadMore = () => {

    const [count,setCount] = useState(0);
    const [data,setData] = useState([]);
    const [disableButton,setDisableButton] = useState(false);

    async function fetchImages() {
        let copyOfData = [...data]
        const req = await fetch(`https://dummyjson.com/products?limit=20&skip=${
          count === 0 ? 1 : count * 20
        }`)

        if (data && data.length === 100) setDisableButton(true);

        const res = await req.json();
        setData((prevData) => [...prevData, ...res.products])
        console.log(data);
    }

    useEffect(()=>{
        fetchImages();
    },[count])


function handleLoad() {
    setCount(count=>count+1);
}
    
  return (
    <div className="load-more-container">
    <div className="product-container">
        {data.map((item)=>(
            <div className="product" key={item.id}>
            <img src={item.thumbnail} alt={item.title} />
            <p>{item.title}</p>
          </div>
        ))}
    </div>
    <div className="button-container">
      <button disabled={disableButton} onClick={()=>handleLoad()}>
        Load More Products
      </button>
    </div>
  </div>
  )
}

export default LoadMore
