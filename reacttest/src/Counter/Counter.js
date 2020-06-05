import React from 'react'
import Auxiliary from '../hoc/Auxiliary.js'
import {connect} from 'react-redux'
import {add2} from '../Redux/actions/actions'

class Counter extends React.Component {

    state = {
        counter: 0
    }

    addCounter = () => {     
        this.setState((prevState) => {
            return {
                counter: prevState.counter + 1
            }
        })
    }

    render() {
        return (
            <Auxiliary>
                <div style={{
                    padding: 20,
                    border: '1px solid #ccc'
                }}>
                    <h1>Counter {this.props.counter}</h1>
                    <hr />
                    <div>
                        <button onClick={() => this.props.onChange(1)}>Add</button>
                        <button onClick={() => this.props.onChange(-1)}>Sub</button>
                    </div>
                </div>
            </Auxiliary>
        )
    }

}

function mapStateToProp(state) {
    return {
      counter: state.counter2.counter2
    }
}

function mapDispatchToProps(dispatch) {
    return {
      onChange: number => dispatch(add2(number)),
    }
}

export default connect(mapStateToProp, mapDispatchToProps)(Counter)