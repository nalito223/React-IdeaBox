import React, { Component } from 'react';
import Ideas from './Ideas';
import './App.css';
import Form from './Form'

class App extends Component {
  constructor() {
    super();
    this.state = {
      ideas: [
        // { title: 'Prank Travis', description: 'Stick googly eyes on all his stuff' },
        // { title: 'Make a secret password app', description: 'So you and your rideshare driver can both know neither one of you is lying' },
        // { id: 3, title: 'Learn a martial art', description: 'To exact vengeance upon my enemies' },
      ]
    }
  }

  addIdea = (newIdea) => {
    this.setState({ ideas: [...this.state.ideas, newIdea] });
  }

  deleteIdea = (id) => {
    console.log(id);
    const filteredIdeas = this.state.ideas.filter(idea => idea.id != id);

    this.setState({ ideas: filteredIdeas });
  }

  // render() {
  //   return ( 
  //    <main className="App">
  //      <h1>IdeaBox</h1>
  //      {!this.state.ideas.length && <h2>No ideas yet -- add some!</h2> }
  //      <Form addIdea={this.addIdea} />
  //      <Ideas ideas={this.state.ideas} />
  //    </main>
  //   )
  //  }

  render() {
    return(
      <main className='App'>
        <h1>IdeaBox</h1>
        <Form addIdea={this.addIdea} />
        <Ideas ideas={this.state.ideas} deleteIdea={this.deleteIdea} />
      </main>
    )
  }
}

export default App;