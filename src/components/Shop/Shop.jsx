

import { useState ,useEffect} from 'react';
import './Shop.css'
import Product from '../Product/Product';



const Shop = () => {

    const [products, setProducts]= useState([]);


    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        // .then(data=>console.log(data))
        .then(data => setProducts(data))
    },[])
    

   

    return (
        <div className='shope-container'>

           <div className="product-container">
                
                  {
                    products.map((product)=> <Product  key={product.id} product={product} />)
                  }
           </div>

           <div className="cart-container">
                  <h3>this is order</h3>
           </div>

        </div>
    );
};

export default Shop;