// import React from 'react'
// import { FaPlus } from 'react-icons/fa';
// import img2 from '../assets/71ItMeqpN3L._AC_SL1500_.jpg';

// type ProductsProps = {
//     productId: string;
//     photo : string;
//     name: string;
//     price: number;
//     stock: number;
//     handler : () => void ;
// }

// const server = "afsjeifj"

// const Productcart = ( {productId,price,name,photo,stock,handler}: ProductsProps) => {
//   return (
//     <div className="product-card">
//         <img src={img2} alt={name} />

//         <p>{name}</p>
//     <span>{price}</span>

//     <div>
//         <button onClick={()=> handler()}>
//             <FaPlus />
//         </button>
//     </div>
//     </div>
//   )
// }

// export default Productcart


import { FaPlus } from "react-icons/fa";
// import { server } from "../redux/store";
// import { CartItem } from "../types/types";

type ProductsProps = {
  productId: string;
  photo: string;
  name: string;
  price: number;
  stock: number;
//   handler: (cartItem: CartItem) => string | undefined;
handler : () => void ;
};
const server = "afsjeifj"

const ProductCard = ({
  productId,
  price,
  name,
  photo,
  stock,
  handler,
}: ProductsProps) => {
  return (
    <div className="product-card">
      <img src={`${server}/${photo}`} alt={name} />
      <p>{name}</p>
      <span>₹{price}</span>

      <div>
        <button
        //   onClick={() =>
        //     handler({ productId, price, name, photo, stock, quantity: 1 })
        //   }
        >
          <FaPlus />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;