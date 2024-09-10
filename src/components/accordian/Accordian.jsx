import React, { useState } from 'react'
import data from './data'
import './style.css'

const Accordian = () => {
  const [selectedItem,setSelectedItem] = useState(null);
  const [multiple,setMultiple] = useState(false);
  const [multipleId,setMultipleId]= useState([]);

  function handleSingleSelection(currentID) {
    console.log(currentID)
    setSelectedItem(currentID);
  }

  function handleMultipleSelection(getCurrentId) {
    let  cpyMutiple = [...multipleId];
    const findIndexOfCurrentId = cpyMutiple.indexOf(getCurrentId);

    console.log(findIndexOfCurrentId); 
    if (findIndexOfCurrentId === -1) cpyMutiple.push(getCurrentId);
    else cpyMutiple.splice(findIndexOfCurrentId, 1);

    setMultipleId(cpyMutiple);
  }
  console.log(multipleId)

  return (
    <div className='acc-wrapper'>
       <button onClick={() => setMultiple(!multiple)}>
        Enable Multi Selection
      </button>
      <div className='accordian'>
        { data.length!==0 ? data.map((item)=>(
          <div className='item'>
             <div
                onClick={
                  multiple? ()=>handleMultipleSelection(item.id):
                  ()=>handleSingleSelection(item.id)}
                className="title"
              >
             <h3>{item.question}</h3>
             <span>+</span>
          </div>
          {
            multiple? multipleId.map((id)=>(id === item.id && <div className="acc-content ">{item.answer}</div> )): 
              selectedItem === item.id &&  <div className="acc-content ">{item.answer}</div>
          }
          </div>
        )):<div>No data</div>
        }
      </div>
    </div>
  )
}

export default Accordian
