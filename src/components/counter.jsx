import React from 'react';

const Counter = ({id, value, name, onIncrement,onDecrement, onDelete}) => {

    const formValue = () => {
        return value ===0 ? "Ноль" : value
    }

    const getBadgeClasses = () => {
    let classes = "badge m-2 bg-"
    classes +=value === 0 ? "primary":"danger"
    return classes
    }
    
    return ( 
      <div>
        <h4>{name}</h4>
        <span className={getBadgeClasses()}>{formValue()}</span> 
        <button 
          onClick={() => onIncrement(id)}
          className="btn btn-secondary btn-sm m-2">
          Increment
        </button>
        <button
          onClick={() => onDecrement(id)}
          className="btn btn-secondary  btn-sm m-2">
          Decrement    
        </button>
        <button 
        onClick={() => onDelete(id)}
        className="btn btn-danger btn-sm m-2"
        >
          Delete
         </button>
      </div>
    );
};
 
export default Counter;
