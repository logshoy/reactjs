import React from 'react';
import './App.scss';
import {Route, NavLink, Switch, Redirect} from 'react-router-dom'
import Car from './Car/Car'
import Cars2 from './Cars2/Cars2'
import CarDetail from './CarDetail/CarDetail'
import About from './About/About'
import ErrorBoundary from './ErrorBoundary/ErrorBoundary'
import Counter from './Counter/Counter'
 
export const ClikedContext = React.createContext(false)

class App extends React.Component {

  constructor(props) {
    console.log("App constructor")
    super(props) 
    
    this.state = {
      isLoggedIn: false,
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
    cars = this.state.cars.map((car, index)=> {
      return (
        <ErrorBoundary key={index}>
        <hr/>
          <Car
            name={car.name}
            year={car.year}
            index={index}
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

    
      <nav className="nav">
          <ul>
            <li>
              <NavLink to="/" exact activeClassName={'wfm-active'}>Home</NavLink>
            </li>
            <li>
              <NavLink to={{
                pathname: '/cars'
                }}>Cars</NavLink>
            </li>
            <li>
              <NavLink 
              to="/about"
              activeStyle={{
                color: 'blue'
              }}
              >About</NavLink>
            </li>
          </ul>
        </nav> 

        <hr />
        <div style={{
          textAlign: 'center'
        }}>
            <h3>Is logged in {this.state.isLoggedIn ? 'TRUE' : 'FALSE'}</h3>
            <button onClick={() => this.setState({isLoggedIn: true})}>Login</button>
        </div>
        <Switch>
          <Route path="/" exact render={() => <h1>HomePage</h1>} />
          <Route path="/cars/:name"  component={CarDetail}/>

          {this.state.isLoggedIn ? <Route path="/about" component={About}/> : null }
          <Route path="/cars" component={Cars2}/>
          <Redirect to={'/'}/>
          {/* <Route render={() => <h1 style={{
            color: 'red',
            textAlign: 'center'
          }}>404 not found</h1>}/> */}
         </Switch>
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
