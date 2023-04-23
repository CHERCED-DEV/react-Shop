import React, { useState, useContext } from 'react';
import '../styles/Header.scss';
import Menu from './Menu';
import MobileMenu from './MobileMenu';
import AppContext from '../context/AppContext';
import MyOrder from '../containers/MyOrder'
import menu from '@icons/icon_menu.svg';
import logo from '@logos/logo_yard_sale.svg';
import shoppingCart from '@icons/icon_shopping_cart.svg';
import { useProductContext } from '../hooks/useGetProducts';

const Header = () => {
	const [ toggleDesktop, setToggleDesktop ] = useState(false);
	const [ toggleMobile, setToggleMobile ] = useState(false);
	const [ toggleOrders, setToggleOrders ] = useState(false);
	const { state:{cart} } = useContext(AppContext);
    const {setId} = useProductContext();

	const handleClickDesktop = () => {
		setToggleDesktop(!toggleDesktop);
	}

	const handleClickMobile = () => {
		setToggleMobile(!toggleMobile);
	}

	const verifyCart = (cartNumber) => {
		if ((cartNumber) && (cartNumber > 9)) {
		  return "+9";
		} else {
			return cartNumber;
		}
	}

    return (
        <nav>
			<img src={menu} alt="logo" className="menu"
				onClick={handleClickMobile}
			/>
			<div className="navbar-left">
				<a href="/" className="nav-logo"><img src={logo} alt="logo"/></a>
				<ul>
                <li className='category'>
                    <p>CATEGORIES</p>
                </li>
                <li>
                    <button onClick={()=>{
                        setId(0)
                    }} href="/">All</button>
                </li>
                <li>
                    <button onClick={()=>{
                        setId(1)
                    }} href="/">Clothes</button>
                </li>
                <li>
                    <button onClick={()=>{
                        setId(2)
                    }} href="/">Electronics</button>
                </li>
                <li>
                    <button onClick={()=>{
                        setId(3)
                    }} href="/">Furnitures</button>
                </li>
                <li>
                    <button onClick={()=>{
                        setId(4)
                    }} href="/">Shoes</button>
                </li>
                <li>
                    <button onClick={()=>{
                        setId(5)
                    }} href="/">Other</button>
                </li>
				</ul>
			</div>
			<div className="navbar-right">
				<ul>
					<li
						className="navbar-email"
						onClick={handleClickDesktop}
					>
						CHERCED
					</li>
					<li
						className="navbar-shopping-cart"
						onClick={() => setToggleOrders(!toggleOrders)}
					>
						<img src={shoppingCart} alt="shopping cart" />
						{cart.length > 0 && <div>{verifyCart(cart.length)}</div>}
					</li>
				</ul>
			</div>
			{toggleDesktop && <Menu/>}
			{toggleMobile && <MobileMenu/>}
			{toggleOrders &&
				<MyOrder
					toggleOrders={toggleOrders}
					setToggleOrders={setToggleOrders}
				/>}
		</nav>
    );
}

export default Header;