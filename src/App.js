import React, { Component } from 'react'; 
import './components/card-list/card-list.component';
import './App.css';
import { CardList } from './components/card-list/card-list.component';

class App extends Component{

constructor(){
  super();

  this.state={
    monster:[]
  }
}

componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(Response => Response.json())
  .then(users =>this.setState({monster:users}));
}



render(){
  return(
    <div className='App'>
        <CardList name='kaveri'>
         {
           this.state.monster.map(monsters=>(
           <h1 key={monsters.id}>{monsters.name}</h1>
           ))
          }
        </CardList>
         
    </div>
        
  );

}

}
export default App;
