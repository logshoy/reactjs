import React, {Component} from 'react'
import Car2 from './Car2/Car2'

export default class Cars2 extends Component {
  state = {
    cars: [
      {name: 'Ford', year: 2018},
      {name: 'Audi', year: 2016},
      {name: 'Mazda', year: 2010}
    ]
  }

  goToHomePage = () => {
    this.props.history.push({
      pathname: '/'
    })
  }

  render() {
    return (
      <div style={{
        width: 400,
        margin: 'auto',
        paddingTop: '20px',
        textAlign: 'center'
      }}>
        <button onClick={this.goToHomePage}>Go to home</button>
        <hr />
        {this.state.cars.map((car, index) => {
          return (
            <Car2
              key={index}
              name={car.name}
              year={car.year}
            />
          )
        })}
      </div>
    )
  }
}