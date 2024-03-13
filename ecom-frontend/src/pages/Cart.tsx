import { useEffect, useState } from 'react'
import { VscError } from 'react-icons/vsc';
import Cartitems from '../components/Cartitems';
import { Link } from 'react-router-dom';
import CartItems from '../components/Cartitems';

const cartItem = [
  {
    photo: "../assets/71ItMeqpN3L._AC_SL1500_.jpg",
    productId : "asfasdf",
    name : "Mackbook",
    price : 4000,
    quantity : 1,
    stock : 10
  }
];
const subtotal = 4000;
const tax = Math.round(subtotal * 0.18);
const shippingCharges = 200;
const discount = 100;
const total = subtotal + tax + shippingCharges - discount;


const Cart = () => {
  const [couponCode, setCouponCode] = useState<string>("");
  const [isValidCouponCode,setIsValidCouponCode] = useState<boolean>(false);

  useEffect(() => {
    const timeOutID = setTimeout(() => {
      if(Math.random()>0.5) setIsValidCouponCode(true);
      else setIsValidCouponCode(false);
    }, 1000);
  
    return () => {
      clearTimeout(timeOutID);
      setIsValidCouponCode(false);
    }
  }, [couponCode])
  

  return (
    <div className='cart'>
      <main>
        {
          CartItems.length > 0 ? (

            
            cartItem.map((i,idx) => <Cartitems key = {idx} cartItem={i}/>)
          ):(
            <h1>No items Added</h1>
          )
        }
      </main>
      <aside>
        <p>Subtotal : {subtotal}</p>
        <p>Shipping Charges : {shippingCharges}</p>
        <p>Tax : {tax}</p>
<p>
      Discount - <em>{discount}</em>
</p>
<p>
          <b>Total: ₹{total}</b>
        </p>

      <input type="text"
      placeholder='Coupon Code' value={couponCode} onChange = {(e) => setCouponCode(e.target.value)} />

      {
        couponCode && 
        (
          isValidCouponCode?
        ( <span className='green'>
          {discount} off using the <code>{couponCode}</code>
          </span>) :( 
          <span className='red'>
            Invalid Coupon Code <VscError />
        </span>
      ))}
      {
        CartItems.length> 0 && <Link to ="/shipping">checkout</Link>
      }
      </aside>

    </div>
  )
}

export default Cart