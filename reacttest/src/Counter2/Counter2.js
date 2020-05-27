import React from 'react'
import {ClikedContext} from '../App'


export default props => {
    return (
        <div style= {{
            border: '1px solid #ccc',
            width: 200,
            margin: '0 auto'
        }}>
            <h3>Counter 2</h3>
            <ClikedContext.Consumer>
                {cliked => cliked ? <p>Clicked</p> : null }
            </ClikedContext.Consumer>

        </div>
    )
}