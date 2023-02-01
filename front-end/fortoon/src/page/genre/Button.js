import React from "react";
import classNames from 'classnames';

function Button({children, size, color}){
    return (
    <button className={classNames("Button", size, color)}>{children}</button>
        // className={'Button ${size}'} 이렇게 쓸 수도 있다 
    );
    }

Button.defaultProps = {
    size : 'medium',
    color: 'blue'
};

export default Button;
