import React from 'react'
import { Link } from 'react-router-dom'
import Productcart from '../components/Productcart'
import img1 from '../assets/71ItMeqpN3L._AC_SL1500_.jpg'

const Home = () => {
  const addToCardHandler = ()=>{

  }
  return (
    <>
        <div className="home">
            <section>
                  hi </section>
            <h1>Latest Product
            <Link to ="/search" className= "findmore" >
              More
            </Link>
            </h1>

            <main>
              <Productcart productId='asdfasf' name='Macbook' price={231} stock={32} handler={addToCardHandler}  photo={img1}/>
            </main>
        </div>
    </>
  )
}

export default Home