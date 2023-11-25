

const Cart = (props) => {
    // console.log(props);
    // {length} = {props.cart}
  
  
    return (
        <div>
             <h3>Order Summery</h3>
                  <p>selected items:{props.cart.length}</p>
        </div>
    );
};

export default Cart;