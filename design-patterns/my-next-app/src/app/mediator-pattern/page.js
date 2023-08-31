'use client'
import React, { Component } from 'react';

// Custom mediator
class Mediator {
  constructor() {
    this.components = [];
  }

  register(component) {
    this.components.push(component);
  }

  notify(message) {
    this.components.forEach(component => component.receiveMessage(message));
  }
}

class ComponentA extends Component {
  componentDidMount() {
    this.props.mediator.register(this);
  }

  receiveMessage(message) {
    console.log(`Component A received: ${message}`);
  }

  render() {
    return <div>Component A</div>;
  }
}

class ComponentB extends Component {
  componentDidMount() {
    this.props.mediator.register(this);
  }

  receiveMessage(message) {
    console.log(`Component B received: ${message}`);
  }

  render() {
    return <div>Component B</div>;
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.mediator = new Mediator();
  }

  componentDidMount() {
    this.mediator.notify('Hello from Mediator');
  }

  render() {
    return (
      <div>
        <h1>Mediator Pattern</h1>
        <br/>
        <ComponentA mediator={this.mediator} />
        <ComponentB mediator={this.mediator} />
      </div>
    );
  }
}

export default App;
