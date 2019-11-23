import React from 'react'

export default function About(props) {
    return (
        <div className="display-4">
                <h1>{props.match.params.id}</h1>
            <h2>About my Check</h2>
            <p>Version 10.0242.3</p>
        </div>
    )
}
