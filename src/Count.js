import React, { Component } from 'react'
import PropsTypes from 'prop-types'

class Count extends Component {
     render() {
        const {name} = this.props;
        return (
            <div>
                <h1>This is my {name}</h1>
            </div>
        )
    }
}
Count.propsTypes={
    name: PropsTypes.object.isRequired
}
export default  Count