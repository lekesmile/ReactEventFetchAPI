import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    items : [],
    isLoader :false
  }

  componentDidMount(){
    const url = 'https://jsonplaceholder.typicode.com/users'
    fetch(url)
    .then(res => res.json())
    .then(json => {
      
       this.setState({
         isLoader:true,
         items:json,
        
       })
    })
    .catch(error => console.log(`Error fetch API ${error}`))
  }

  handleClick = () => {
      alert('You clicked me yo')
  }
  render() { 
    var{isLoader, items} = this.state
    if(!isLoader){
      return <div>Loading ....</div>
    }
    return (
      <div className="App">
        <div className="jumbotron">
            <h1 className="display-4">Event App</h1>
            <p className="lead">This is a simple fetch API</p>
            <hr className="my-4"/>
            <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
            <a className="btn btn-primary btn-lg" onClick={this.handleClick} href="#" role="button">Learn more</a>
      </div>
        <ul>
        <div className="container">
          <div className="row justify-content-center">
          
          {items.map(item => (
            
            <div className="col-md-3 card shadow-sm  ">
              <li key = {item.id}>
            <h3>Name</h3>  {item.name} 
             <h4>Email </h4> {item.email} 
             <h5>Location</h5> {item.address.city} 
               </li>
             </div>
         
          ))}  
            
        </div>
        </div>
        </ul> 
      </div>
    );
  }
}
 
export default App ;