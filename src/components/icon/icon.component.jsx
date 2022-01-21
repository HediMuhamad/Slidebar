import React from 'react';

const Icon = ({firstBottom = false, lastBottom = false, className, icon, ...props}) => {
    return React.cloneElement(icon(), {className:`text-white text-xl my-4 cursor-pointer hover:text-amber-300 transition-colors duration-200
                                                    ${firstBottom ? 'mt-auto' : ''}
                                                    ${lastBottom ? 'mb-8' : ''}
                                                    ${className}`,
                                                    ...props})
};

export default Icon;
