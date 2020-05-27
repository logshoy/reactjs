import React from 'react';
import './App.scss';
import Car from './Car/Car'
import ErrorBoundary from './ErrorBoundary/ErrorBoundary'
import Counter from './Counter/Counter'
 
export const ClikedContext = React.createContext(false)

class App extends React.Component {

  constructor(props) {
    console.log("App constructor")
    super(props) 
    
    this.state = {
      cliked: false,
      cars:[
        {name:'Ford', year: 2018},
        {name:'Audi', year: 2016},
        {name:'Mazda1', year: 2010}
      ],
      pageTitle: "React Components",
      showCars: false
    }
  }

  onChangeName(name, index) {
    const car = this.state.cars[index]
    car.name = name
    const cars = [...this.state.cars]
    cars[index] = car
    this.setState({
      cars
    })
  }

  toogleCarsHandler = () => {

    this.setState({
      showCars: !this.state.showCars
    })
  }

  deleteHandler(index) {
    let cars = this.state.cars.concat()

    cars.splice(index, 1)

    this.setState({cars})
  }

  componentWillMount() {
    console.log('App componentWillMount')
  }

  componentDidMount() {
    console.log('App componentDidMount')
  }

  render () {
    console.log('App render')
  const divStyle = {
    textAlign : "center"
  }

  let cars = null

  if (this.state.showCars) {
    cars = this.state.cars.map((car,index)=> {
      return (
        <ErrorBoundary key={index}>
          <Car
            name={car.name}
            year={car.year}
            index={index }
            onDelete={this.deleteHandler.bind(this, index)}
            onChangeName={event => this.onChangeName(event.target.value, index)}
          /> 
        </ErrorBoundary>
      )
    })
  }

  return (
    <div style={divStyle}>
      <h1> {this.state.pageTitle} </h1>

      <ClikedContext.Provider value={this.state.cliked}> 
        <Counter cliked={this.state.cliked} />
      </ClikedContext.Provider>
      <hr />

      <button 
      style={{marginTop: 20}}
      className={'AppButton'}
      onClick={this.toogleCarsHandler}
      >Toogle Cars</button>

      <button onClick={() => this.setState({cliked: true})}>Change cliked</button>

    <div style={{
      width: 400,
      margin: 'auto',
      paddingTop: '20px'
    }}>
      { cars }
    </div>

    
    </div>
  );
  }
}

export default App;
