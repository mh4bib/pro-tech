import React from "react";
import { BiListPlus } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { /* addToCart, removeFromCart */ } from "../redux/actions/contentActions";
import { RiDeleteBin2Line } from "react-icons/ri"
import { useLocation } from "react-router-dom";

const ContentCard = ({ content }) => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  return (
    <div
      className='shadow-lg rounded-3xl border  p-3 flex flex-col text-indigo-900'
      key={content._id}
    >
      <div>{content.quantity}</div>
      <div className='h-52 w-52 mx-auto'>
        <img src={content.image} alt={content.model} />
      </div>
      <h1 className='font-bold text-center'>{content.heading}</h1>
      {/* <p className='text-center font-semibold mb-3'>Rating: {content.rating}</p> */}
      <div className=' flex-1'>
        {/* <ul className='space-y-2'>
          {content.keyFeature.map((feature, index) => {
            return <li key={index} className='text-sm '>{feature}</li>;
          })}
        </ul> */}
        <p>
          {content.content.slice(0, 100)}
        </p>
      </div>
        <div className=''>
          {content.tags.map((tag, index) => {
            return <button key={index} onClick={()=>console.log(tag)} className='bg-blue-400 flex justify-center items-center rounded-full text-xs mt-2 py-1 px-2 flex-1 text-white text-bold'>{tag}</button>;
          })}
        </div>
      <div className='flex gap-2 mt-5'>
        {!pathname.includes('cart') &&
          <button onClick={() => dispatch(/* addToCart(content) */)} className='bg-indigo-500 rounded-full py-1 px-2 flex-1 text-white text-bold'>
            Add to cart
          </button>}
        {pathname.includes('cart') &&
          <button onClick={() => dispatch(/* removeFromCart(content) */)} className='bg-red-500 flex justify-center items-center rounded-full py-1 px-2 flex-1 text-white text-bold'>
            Remove
            <RiDeleteBin2Line className="ml-2" />
          </button>}
        {!pathname.includes('cart') &&
          <button
            title='Add to wishlist'
            className='bg-indigo-500  py-1 px-2 rounded-full'
          >
            <BiListPlus className='text-white' />
          </button>}
      </div>
    </div>
  );
};

export default ContentCard;