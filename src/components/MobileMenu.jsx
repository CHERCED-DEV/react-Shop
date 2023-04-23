import React from 'react';
import '../styles/MobileMenu.scss';
import { useProductContext } from '../hooks/useGetProducts';

const MobileMenu = () => {
    const {setId} = useProductContext();
    return (
        <div class="mobile-menu">
            <ul>
                <li>
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

                <ul>
                <li>
                    <a href="/account">My account</a>
                </li>
                </ul>

                <ul>
                <li>
                    <a href="/account" class="email">chernandezcediel@gmail.com</a>
                </li>
                <li>
                    <a href="/signup" class="sign-out">Sign out</a>
                </li>
            </ul>
        </div>
    );
}

export default MobileMenu;