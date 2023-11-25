

import { useState ,useEffect} from 'react';
import './Shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';





const Shop = () => {

    const [products, setProducts]= useState([]);

    const [cart, setCart] = useState([]);


    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        // .then(data=>console.log(data))
        .then(data => setProducts(data))
    },[])

    const addToCartProduct = (product) =>{
        // console.log(cart);
        const newCart=[...cart,product]
        setCart(newCart)
    }

    
  

   

    return (
        <div className='shope-container'>

           <div className="product-container">
                
                  {
                    products.map((product)=> <Product  key={product.id} product={product} addToCartProduct={addToCartProduct} />)
                  }
           </div>

           <div className="cart-container">
                 <Cart   cart={cart}/>
           </div>

        </div>
    );
};

export default Shop;