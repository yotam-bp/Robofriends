import React from 'react';

const scroll = (props) => {
    return(
        <div style = {{overflowY: 'scroll' , border : '1px solid black' , hight : '800px' }} >
        {props.children}
        </div>
    );
};

export default scroll;