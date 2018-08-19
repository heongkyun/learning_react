import React, { Fragment } from "react";
import LeftPane from "./components/LeftPane";
import RightPane from "./components/RightPane";
import { SampleProvider } from "./contexts/sample";
import { AnotherProvider } from "./contexts/another";
import Counter from "./components/Counter";

const App = () => {
  return (
    <Fragment>
      <SampleProvider>
        <div className="panes">
          <LeftPane />
          <RightPane />
        </div>
      </SampleProvider>
      <AnotherProvider>
        <Counter />
      </AnotherProvider>
    </Fragment>
  );
};

export default App;
