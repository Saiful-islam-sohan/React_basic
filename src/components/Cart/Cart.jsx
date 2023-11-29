import './Cart.css'

const Cart = (props) => {
   const {cart}=props
    // console.log(props);
    // {length} = {props.cart}

    let total=0;
    let shipping=0;
   

    for(const product of cart){
        total =total+product.price;
        shipping=shipping+product.shipping;

    }
  
    const tex=  (total*0.1).toFixed(2);

    const grandTotal= total +shipping+Number(tex);
  
    return (
        <div className="cart"> 
             <h3>Order Summery</h3>
            <p>selected items:{cart.length}</p>
            <p>Total price:{total}</p>
            <p>total shipping:{shipping}</p>
            <p>Tex:{tex}</p>
            <h3>Grand Total:{grandTotal}</h3>
        </div>
    );
};

export default Cart;