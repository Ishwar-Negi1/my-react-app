import React from 'react';
import "../iphone.png";

const Home=(props)=>{
    return(
        <div>
        <h1>ECOMMERCE WEBPAGE</h1>
        <div className="parentClass">
        <div className="cart-wrapper">
            <div className="img-wrapper item">
                <img src="//www.jquery-az.com/html/images/banana.jpg"/>
            </div>
            <div className="text-wrapper item">
                <span>
                    Banana
                </span>
                <span>
                    Price: $1000.00
                </span>
            </div>
            <div className="btn-wrapper item">
                <button 
                onClick={
                    ()=>{props.addToCartHandler({price:1000,name:'i phone 11'})}
                    }>
                    Add To Cart</button>
                    <button className='remove-cart-btn'
                onClick={
                    ()=>{props.removeToCartHandler()}
                    }>
                    Remove To Cart</button>
            </div>
        </div>
        <div className="cart-wrapper">
        <div className="img-wrapper item">
            <img src="//www.jquery-az.com/html/images/banana.jpg"/>
        </div>
        <div className="text-wrapper item">
            <span>
                Banana
            </span>
            <span>
                Price: $1000.00
            </span>
        </div>
        <div className="btn-wrapper item">
            <button 
            onClick={
                ()=>{props.addToCartHandler({price:1000,name:'i phone 11'})}
                }>
                Add To Cart</button>
                <button className='remove-cart-btn'
            onClick={
                ()=>{props.removeToCartHandler()}
                }>
                Remove To Cart</button>
        </div>
        </div>
       <div className="cart-wrapper">
    <div className="img-wrapper item">
        <img src="//www.jquery-az.com/html/images/banana.jpg"/>
    </div>
    <div className="text-wrapper item">
        <span>
            Banana
        </span>
        <span>
            Price: $1000.00
        </span>
    </div>
    <div className="btn-wrapper item">
        <button 
        onClick={
            ()=>{props.addToCartHandler({price:1000,name:'i phone 11'})}
            }>
            Add To Cart</button>
            <button className='remove-cart-btn'
        onClick={
            ()=>{props.removeToCartHandler()}
            }>
            Remove To Cart</button>
    </div>
       </div>
       <div className="cart-wrapper">
<div className="img-wrapper item">
    <img src="//www.jquery-az.com/html/images/banana.jpg"/>
</div>
<div className="text-wrapper item">
    <span>
        Banana
    </span>
    <span>
        Price: $1000.00
    </span>
</div>
<div className="btn-wrapper item">
    <button 
    onClick={
        ()=>{props.addToCartHandler({price:1000,name:'i phone 11'})}
        }>
        Add To Cart</button>
        <button className='remove-cart-btn'
    onClick={
        ()=>{props.removeToCartHandler()}
        }>
        Remove To Cart</button>
</div>
       </div>
       </div>
        </div>
    )
}
export default Home;