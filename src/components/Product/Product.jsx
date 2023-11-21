import './Product.css'

const Product = (props) => {
    console.log(props);
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
           <button className='btn'>
            <p> Add to Cart</p>
           </button>
           
        </div>
    );
};

export default Product;