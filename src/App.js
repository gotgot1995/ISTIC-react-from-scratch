import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import SpreadsheetComponent from './components/spreadsheet/spreadsheet';
import RAW_EXPENSES from './mock_data/expenses';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <header>
          {/* something here very soon */}
        </header>
        <main>
          <SpreadsheetComponent expenses={RAW_EXPENSES} />
        </main>
      </div>
    );
  }
}

export default App;
