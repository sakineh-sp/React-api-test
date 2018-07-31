import React, { Component } from 'react';
import './stylesheet.css';
import List from './component/list';


class App extends Component {
  constructor(){
    super() ;
    this.state = {
      contact :[]
  
    }
  }
  componentDidMount(){
    this.fetchData();

  }
  fetchData(){
    fetch('https://randomuser.me/api/?results=20&nat=us,dk,fr,gb')
    .then(response =>response.json())
    .then(parsedJSON =>parsedJSON.results.map(user=>(
      {
        name:'${user.name.first}${user.name.last}',
        username:'${user.login.username}',
        email:'${user.email}',
        location:'${user.location.street}${user.location.city}',
      }

    )))
    .then(contacts=> this.setState({
      contact:contacts


    }))

    .catch(error => console.log('parsing faild',error))

}
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">API Test</h1>
        </header>
        <List contacts={this.state.contact}></List>
        <p>
          lkdfnhv kjhdusb  jnsbdiuch kjdbcb 
        </p>
      </div>
    );
  }
}

export default App;
