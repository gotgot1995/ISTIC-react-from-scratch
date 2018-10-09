import React, { Component } from 'react';

import ExpenseComponent from '../expense/expense';

class SpreadsheetComponent extends Component {
  constructor() {
    super();
    this.state = { expenses: [] };
  }

  render() {
    return (
      <table className="table">
        {
          this.props.expenses.map(
            obj => <ExpenseComponent title={obj.title} paidBy={obj.paidBy} amount={obj.amount} />
          )
        }
      </table>
    );
  }
}

export default SpreadsheetComponent;
