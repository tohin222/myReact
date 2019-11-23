import React from 'react';
import PropsTypes from 'prop-types'

const F_Props = (props) => {
    const {name} = props;
    return (
        <div>
             <div>
                <h1 style={{color:'red',fontSize:'40px'}}>This is my {name}</h1>
                <h1 style={myStyle}>This is my {name}</h1>
            </div>
        </div>
    );
}
F_Props.defaultProps={
    name: "PROPS FOR DEFAULT   "
}

F_Props.propsTypes={
    name: PropsTypes.object.isRequired
}
const myStyle ={
    color:'blue',
    fontSize:'40px'
}
export default F_Props;
