import React, { Component } from 'react';

class ExpenseComponent extends Component {
  constructor() {
    super();
    this.state = { title: '', paidBy: '', amount: 0.0 };
  }

  render() {
    return (
      <tr><td>{this.props.title}</td><td>{this.props.paidBy}</td><td>{this.props.amount} €</td></tr>
    );
  }
}

export default ExpenseComponent;
