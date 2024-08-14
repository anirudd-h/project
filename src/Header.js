import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import {Link} from "react-router-dom";
import { useStateValue } from './StateProvider';
import { auth } from "./firebase";

function Header() {
const [{basket,user},dispatch]=useStateValue();

const handleAuthentication=()=>{
    if(user){
        auth.signOut();
    }
}


  return (
    <div className='header'>
<Link to="/">
<img className="header__logo"
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"/>

</Link>


        
        <div className="header__search">
            <input
            className="header__searchinput" placeholder="Search Amazon.in"
            type="text"/>
<SearchIcon className="header__searchicon"/>
        </div>

        <div className="header_nav">
        <Link to='/login'>

            <div onClick={handleAuthentication} className="header_option">
                <span
                className="header_optionlineone">
                    Hello {!user?'Guest':user.email}
                </span>
                <span className="header_optionLineTwo">{user?'Sign Out':'Sign In'}</span>
                </div>
        </Link>
<Link to='/orders'>
                <div className="header_option">
                    <span
                    className="header_optionlineone">
                        Returns
                    </span>
                    <span
                    className="header_optionlinetwo">
                       & Orders
                    </span>
                </div>
</Link>

                

            <Link to="/checkout">
                <div className="header_optionbasket">
                    <ShoppingBasketIcon />
                    <span className="header_optionlinetwo header_basketcount">{basket?.length}
                    </span>

            </div>
            </Link>
        </div> 
         </div>
  );
}

export default Header