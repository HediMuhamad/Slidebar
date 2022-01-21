import React from 'react';

const ImageContainer = ({src}) => {
  return (
    <div className='w-full aspect-square , mt-2 mb-10 box-border ,  border-2 border-white , rounded-md bg-white , overflow-clip'>
        <img className='w-full h-full object-cover bg-center' src={src} alt='userImage'/>
    </div>
  )
};

export default ImageContainer;
