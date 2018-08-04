import React, { Component } from 'react';
import './stylesheet.css';
import Collapsible from './Collapsible';
// import List from './component/list';




class App extends Component {
  

//   constructor(){
//     super() ;
//     this.state = {
//       contacts :[]
  
//     }
//   }
//   componentDidMount(){
//     this.fetchData();

//   }
//   fetchData(){
//     fetch('https://randomuser.me/api/?results=20&nat=us,dk,fr,gb')
//     .then(response =>response.json())
//     .then(parsedJSON =>parsedJSON.results.map(user=>(
//       {
//         name:'${user.name.first}${user.name.last}',
//         username:'${user.login.username}',
//         email:'${user.email}',
//         location:'${user.location.street}${user.location.city}',
//       }

//     )))
//     .then(contacts=> this.setState({
//       contacts
//     }))

//     .catch(error => console.log('parsing faild',error))

// }
  
  render() {
    // const contacts = this.state;
    return (
      <div>
         <header>
            <h1>Collapsible Content</h1>
          </header>
          <div className="content">
              <div className="panel-group">
                <Collapsible></Collapsible>
              </div>
          </div>
        {/* /* <h1>Collapse</h1> */}
        {/* <div className="App">
            <div className="title">
                <h1 onClick={this.toggle} >HHHHHHHHHH</h1>
                    <Collapse isOpen={this.state.collapse}>
                          <Card body className="text-center" >
                              <CardTitle className="title">Special Title Treatment</CardTitle>
                              <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                              <Button outline color="secondary" >Go somewhere</Button>
                          </Card>
                    </Collapse>
              </div>    
        </div> */}
        
     </div> 
    );
  }
 }

export default App;
