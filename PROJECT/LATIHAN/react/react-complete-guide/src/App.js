import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './components/Person/Person';


class App extends Component {

  state ={
    persons:[
      {id:'1',name:'Toni',age:25},
      {id:'2',name:'Andi',age:23},
      {id:'3',name:'Imam',age:22}
    ],
    showPersons:false
  }

  togglePersonHandler = ()=>{
    const doesShow = this.state.showPersons;
    this.setState({showPersons:!doesShow})
  }

  nameChangedHandler = (event,id)=>{
    const personIndex = this.state.persons.findIndex(p=>{
      return p.id===id
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    // const person = Object.assign({},this.state.persons[personIndex])

    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex]=person;
    this.setState({persons:persons })
  }

  deletePersonHandler = (personIndex)=>{
    // const persons = this.state.persons;

    const persons = [...this.state.persons]

    persons.splice(personIndex,1);
    this.setState({persons:persons})
  }

  render() {
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
        {this.state.persons.map((person,index)=>{
            return <Person
              click={()=>this.deletePersonHandler(index)}
              name={person.name}
              age={person.age} 
              key={person.id}
              changed={(event)=>this.nameChangedHandler(event,person.id)}
              />
        })}
         
        </div>
      )
    }
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      
        <button onClick={this.togglePersonHandler} >Switch Name</button>

       {persons}
      </div>
    );
  }
}

export default App;
