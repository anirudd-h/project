import React, { useState } from 'react';
import './Payment.css'
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from './reducer';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { Toaster, toast } from 'react-hot-toast';
import { useEffect } from 'react';

function Payment() {
    const [{basket,user},dispatch]=useStateValue();
      const [processing,setprocessing]=useState("");
      const [isChecked, setIsChecked] = useState(false);
      const history = useHistory();
      useEffect(() => {
        toast("Add Products to the Cart!");
      }, []);

      const handleCheckboxChange = (event) => {
        setIsChecked(event.target.checked);
      };

      const handleSubmit=async(event)=>{
        event.preventDefault();
        setprocessing(true);
    
    
      }
      const handleCartEmptyAndRedirect = () => {
        dispatch({
            type: 'EMPTY_BASKET'
        })
            history.replace('/orders')
          };
  if (basket.length == 0) {
    return (
<div>
      <Toaster />
    </div>            )             }
  else
  return (
    <div className='payment'>
         <div className='payment_container'>
            <h1>  
                Checkout(
                    <Link to="/checkout">{basket?.length}items</Link>
                )
            </h1>
            
            <div className='payment_section'>
                <div className='payment_title'>
                <h3>Delivery address</h3>

            </div>
            <div className='payment_address'>
                <p>{user?.email}</p>
                <p>123 random street</p>
                <p>Udupi,India</p>
            </div>
        </div>

        <div className='payment_section'>
            <div className='payment_title'>
                <h3>Review items and delivery</h3>

            </div>
            <div className='payment_items'>
                {basket.map(item=>(
                    <CheckoutProduct
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                    />
                ))}
            </div>
        </div>


        <div className='payment_section'>
            <div className='payment_title'>
                <h3>Payment Method</h3>
 
            </div>
            <div className='payment_details'>
                <form>
                    <div className='payment_pricecontainer'>
                        <CurrencyFormat
                        renderText={(value)=>(
                           <h3>Order Total:{value}</h3>

                        )}
                        decimalScale={2}
                        value={getBasketTotal(basket)}
                        displayType={"text"}
                        thousandSeparator={true}
                        prefix={"₹"}
                        />
                        
    <div>
      <input
        type="checkbox"
        id="agreeCheckbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />Proceed with COD
      <button onClick={handleCartEmptyAndRedirect} className="bbutton" id="submitButton" disabled={!isChecked}>
        Buy Now
      </button>
    </div>
                    </div>
                </form>

            </div>
        </div>
    </div>
    </div>
  )
}

export default Payment

  
