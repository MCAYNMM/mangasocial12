import React from 'react';
import ReactLoading from 'react-loading';
 
const LoadingWhite = ({ type, color, height, width, text="" }) => (
    <div className='flex flex-col justify-center items-center bg-transparent ' >
      <ReactLoading className='bg-transparent pt-4' type={type} color={color} height={height} width={width} />
      <span className='text-[#FF5F00] text-2xl z-100 mt-2 absolute'>{text}</span>
    </div>
);
 
export default LoadingWhite;