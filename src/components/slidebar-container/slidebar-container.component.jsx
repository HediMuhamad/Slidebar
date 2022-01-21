import React from 'react';

const SlidebarContainer = ({children}) => {
  return (
    <div className={`h-full w-16 p-[0.6rem] , flex flex-col items-center , bg-gray-900`}>{children}</div>
  )
};

export default SlidebarContainer;
