import React from 'react'
import Classes from './Car.module.css'
import PropTypes from 'prop-types'
import withClass from '../hoc/withClass'

class Car extends React.Component {

    constructor(props) {
        super(props)
        this.inputRef = React.createRef()
    }

    componentDidMount() {
        if (this.props.index === 1) this.inputRef.current.focus()
    }

    render() {

        const inputClasses = [Classes.input]

        if (this.props.name !=='') {
            inputClasses.push(Classes.green)
        } else {
            inputClasses.push(Classes.red)
        }
    
        if (this.props.name.length > 4) { inputClasses.push(Classes.bold) }
    
    
        return (
            <React.Fragment>
                <h3>Car name: {this.props.name}</h3>
                <p>Year: <strong>{this.props.year}</strong></p>
                <input 
                ref={this.inputRef}
                type="text" 
                onChange={this.props.onChangeName} 
                value={this.props.name } 
                className={inputClasses.join(' ')}
                />
                <button onClick={this.props.onDelete}>Delete</button>
            </React.Fragment>
        ) 
    }
}

Car.propTypes = {
    name: PropTypes.string.isRequired,
    year: PropTypes.number,
    index: PropTypes.number,
    onChangeName: PropTypes.func,
    onDelete: PropTypes.func
}

export default withClass(Car, Classes.Car)