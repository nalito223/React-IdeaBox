import React, { Component } from 'react';
import Ideas from './Ideas';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      ideas: [
        { title: 'Prank Travis', description: 'Stick googly eyes on all his stuff' },
        { title: 'Make a secret password app', description: 'So you and your rideshare driver can both know neither one of you is lying' },
        { id: 3, title: 'Learn a martial art', description: 'To exact vengeance upon my enemies' },
      ]
    }
  }

  render() {
    return ( 
     <main className="App">
       <h1>IdeaBox</h1>
       {!this.state.ideas.length && <h2>No ideas yet -- add some!</h2> }
       <Ideas ideas={this.state.ideas} />
     </main>
    )
   }
}

export default App;