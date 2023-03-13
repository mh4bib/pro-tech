/* import React from 'react';
import { useSelector } from 'react-redux';
import ContentCard from '../components/ContentCard';

const Cart = () => {
    const cart = useSelector((state)=>state.contents.cart);
    // console.log(cart);
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10'>
        {
            cart.sort((a, b)=>a.cartPosition-b.cartPosition).map((content)=><ContentCard
            key={content._id}
            content={content}
            />)
        } 
        </div>
    );
};

export default Cart; */