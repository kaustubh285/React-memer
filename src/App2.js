import React from 'react';
import logo from './logo.svg';
import './App.css';


class App extends React.Component{
  
  constructor(){
    super()
    this.state ={
      loading:false,
      users: {}
    }
    this.onPr = this.onPr.bind(this); 
  }

  onPr(){
    console.log(this.state)
  }

  componentDidMount(){
    this.setState({loading:true})
    fetch("https://reqres.in/api/users/1").then(response => response.json())
    .then(data=>{
      this.setState({
        loading:false,
        users:data.data
      })
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <p>{this.state.loading ? "loading..." : this.state.users.email}</p>
          <button onClick={this.onPr}>ckicj</button>
        </header>
      </div>
    );
  }
}
export default App;
