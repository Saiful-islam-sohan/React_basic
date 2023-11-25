import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    
   const {name,img,seller,price,ratings}=props.product;
    return (
        <div className='product'>
           <img src={img} alt="" />

           <div className='product-info'>
           <p className='product-name'>{name}</p>
           <p>price :$ {price}</p>
           <p><small>Seller:{seller}</small></p>
           <p><small>Ratings:{ratings} stars </small></p>
           </div>
           <button  onClick={()=>props.addToCartProduct(props.product)} className='btn'>
            <p className='btn-text'> Add to Cart</p>
            <FontAwesomeIcon icon={faCartShopping} />
           </button>
           
        </div>
    );
};

export default Product;