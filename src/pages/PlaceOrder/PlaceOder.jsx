import React, { useContext } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../context/StoreComponent'
const PlaceOder = () => {
  const {getTotalCartAmount}=useContext(StoreContext)
  return (
    
      <form className='place-order'>
         <div className='place-order-left'>
           <p className='title'>
              Delivery Information
           </p>
           <div className='multi-fields'>
              <input type='text' placeholder='First name'/>
              <input type='text'  placeholder='street' />


           </div>
           <input type='email' placeholder='Email address'/>
           <input type='text' placeholder='street'/>
           <div className='multi-fields'>
              <input type='text' placeholder='City'/>
              <input type='text' placeholder='State'/>

           </div>

           <div className='multi-fields'>
              <input type='text' placeholder='Zip Code'/>
              <input type='text' placeholder='Country'/>

           </div>
           <input type='text' placeholder='Phone'/> 
           
         </div>
         <div className='place-order-right'>
         <div className='cart-bottom'>
         <div className='cart-total'>
             <h2>Cart Total</h2>
             <div>
              <div className='cart-total-details'>
                <p>SubTotal</p>
                <p>${getTotalCartAmount()}</p>
              </div>
                  <hr/>
              <div className='cart-total-details'>
              <p>Delivery Fee</p>
              <p>{2}</p>
              </div>
              <hr/>
              <div className='cart-total-details'></div>
                    <p>Total</p>
                    <b>${getTotalCartAmount()+2}</b>
             </div>
            
         </div>
         <button>Proceed TO CheckOut</button>
          
      </div>
         </div>
      </form>
   
  )
}

export default PlaceOder