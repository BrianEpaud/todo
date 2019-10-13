import React from 'react';
import './App.css';


class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      heading:"Shopping List",
      items: [
        {text: "Buy Milk", done:false},
        {text: "Buy Tomatoes", done:false},
        {text: "prout", done:false}
      ]
    }
  }
  markDone = (todo) => {
    let todos = this.state.items.map(t => {
      if(t.text === todo.text){
        return Object.assign({}, t, {
         done: !t.done
        } )
      }
      return t
    })
    this.setState({items: todos})
  }
  render() {
    return (
      <div className="container">
        <br />
        <div className="row">
          <div className="col-md-6 offset-3">
            <h1>{this.state.heading}</h1>

            <ul>
              {this.state.items.map(item => {
                return(<li  onClick={() => this.markDone(item)} className={item.done ? "done" :"" } key={item.text}>{item.text}</li>)
              })
              }
            </ul>
          </div>

        </div>
      </div>
    )
  }
}

export default App;