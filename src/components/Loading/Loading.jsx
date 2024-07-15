import React from 'react';
import ReactLoading from 'react-loading';
 
const Loading = ({ type, color, height, width, text="" }) => (
    <div className='flex flex-col justify-center items-center bg-black ' >
      <ReactLoading className='bg-black pt-4' type={type} color={color} height={height} width={width} />
      <span className='text-white text-2xl z-100 mt-2 absolute'>{text}</span>
    </div>
);
 
export default Loading;