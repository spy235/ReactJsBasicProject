import React, { useState } from 'react'
import {FaStar} from 'react-icons/fa';
import "./style.css"

const Star = ({noOfStar}) => {
  const [rating,setRating] = useState(0);
  const [hover,setHover] = useState(0);

function handleOnClick(getCurrentIndex) {
  setRating(getCurrentIndex);
}
function handleOnMouseOver(getCurrentIndex) {
  setHover(getCurrentIndex);
}
function handleOnMouseLeave() {
  setHover(rating)
}


  return (
    <div className='star-rating'>
      {
        [...Array(noOfStar)].map((_,index)=>{
          index = index+1;
          return (<>
      
          <FaStar 
           className={index <= (hover || rating) ? "active" : "inactive"}
           key={index} 
           onClick={()=>handleOnClick(index)}
           onMouseOver={()=>handleOnMouseOver(index)}
           onMouseLeave={()=>handleOnMouseLeave()}
           size={40}
           />{rating}
               </>
        )
})
      }
      
    </div>
  )
}

export default Star
