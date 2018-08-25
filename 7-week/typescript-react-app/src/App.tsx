import * as React from 'react';
import './App.css';
import Counter from './Counter';
import ShowName from './ShowName';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <ShowName name="dd" />
        <Counter startNumber={10} />>
      </div>
    );
  }
}

export default App;
