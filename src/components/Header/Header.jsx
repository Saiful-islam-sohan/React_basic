import logo from '../../images/Logo.svg'
import './Header.css'

const Header = () => {
    return (
       
            // <h2>this is header</h2>

          
                <nav className='header'>
                    <img src={logo} alt="" />

                    <div>
                        <a href="/shope">Shope</a>
                        <a href="/orders">Orders</a>
                        <a href="/inventory">Inventory</a>
                        <a href="/about">About</a>
                    </div>
                </nav>
           
       
    );
};

export default Header;