/* global Excel */
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as OfficeHelpers from '@microsoft/office-js-helpers';
import { Button, ButtonType } from 'office-ui-fabric-react';

class App extends Component {

  click = async () => {
    try {
      await Excel.run(async context => {
        /**
         * Insert your Excel code here
         */
        const range = context.workbook.getSelectedRange();

        // Read the range address
        range.load("address");

        // Update the fill color
        range.format.fill.color = "yellow";

        await context.sync();
        console.log(`The range address was ${range.address}.`);
      });
    } catch (error) {
      OfficeHelpers.UI.notify(error);
      OfficeHelpers.Utilities.log(error);
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p className='ms-font-l'>Modify the source files, then click <b>Run</b>.</p>
          <Button className='ms-welcome__action' buttonType={ButtonType.hero} iconProps={{ iconName: 'ChevronRight' }} onClick={this.click}>Run</Button>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
