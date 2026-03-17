import React from 'react'

const OrderCreation = ({title,isOpen,isClose,children}) => {
    if(!isOpen)return null;
  return (
    <div>
      <div>
        <h1>create order</h1>
        <button>{/* add cut logo  */}</button>
      </div>
            
      <div>

      </div>
    </div>
  )
}

export default OrderCreation
