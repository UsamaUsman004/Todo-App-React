import './App.css';
import React, { Component } from 'react';
import firebase from './config/firebase';

class App extends Component {
  constructor() {
    super()

    this.state = {
      todos: [
        {
          title: 'Usama',
          Time: '2 Nov 2020',
          edit: false

        },
        {
          title: 'Usman',
          Time: '2 Nov 2020',
          edit: false
        },
      ],
      value: ''
    }
  }

  add_todos = (Time) => {
    let obj = {
      title: this.state.value,
      Time: new Date().toLocaleString()
    }

    firebase.database().ref('/').child("todos").push(obj);
    this.setState({
      todos: [...this.state.todos, obj],
      value: ''
    })
  }

  delete_todo = (index) => {
    this.state.todos.splice(index, 1);
    this.setState({
      todos: this.state.todos
      // Updating Todos
    })
  }

  edit_todos = (index, value) => {
    this.state.todos[index].edit = true;
    this.setState({
      todos: this.state.todos
    })
  }

  handleChange = (e, index) => {
    this.state.todos[index].title = e.target.value;
    this.setState({
      todos: this.state.todos
    })

  }

  update = (index) => {
    this.state.todos[index].edit = false;
    this.state.todos[index].Time = new Date().toLocaleString();
    this.setState({
      todos: this.state.todos
    })


  }


  render() {
    let { todos, value } = this.state;
    // Destructuring

    return (
      <div>
        <div className="container my-5">
          <h3 className="text-center text-white">Welcome to TO-DO App</h3>
          <div className="row my-5 d-flex justify-content-center my-5">
            <div className="col-md-12">
              <div className="card">
                <div className="card-header px-5 pt-4">
                  <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Enter TODO's" aria-label="Recipient's username" aria-describedby="basic-addon2"
                      value={value}
                      onChange={(e) => { this.setState({ value: e.target.value }) }}
                    />
                    <div className="input-group-append">
                      <button className="btn btn-outline-secondary" type="button" onClick={this.add_todos} >Add</button>
                    </div>
                  </div>
                </div>

                <ul className="list-group list-group-flush overflow-auto" >
                  {todos.map((value, index) => {
                    return <li className="list-group-item" key={index}>

                      {value.edit ?
                        <input className="form-control border  border-bottom" type="text" value={value.title} onChange={(e) => this.handleChange(e, index)} />
                        : <p>{value.title}
                          <small className="float-right ml-5">{value.Time}</small>
                        </p>
                      }


                      {value.edit ?
                        <button className="btn btn-outline-secondary ml-1 float-right" onClick={() => this.update(index)}>Update</button>
                        :
                        <button className="btn btn-outline-secondary ml-1 float-right" onClick={() => this.delete_todo(index)}>Delete</button>
                      }

                      <button className="btn btn-outline-secondary ml-1 float-right" onClick={() => this.edit_todos(index, value.title)}>
                        Edit
                      </button>


                    </li>

                  })
                  }
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
