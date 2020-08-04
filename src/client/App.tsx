import * as React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
//react.component - we have to install react & @types - that's where react.component is - 
//it is an interface, code telling ts this is a react component so it will behave as one. 
//react.fc - functional component -react hooks lets you mimic state in a functional component
class App extends React.Component<IAppProps, IAppState> {
  constructor(props: IAppProps) {
    super(props);
  }

  render() {
    return (
      <main className="container my-5">
        <BrowserRouter>
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/" component={Post}/>
          
          
          </Switch>
        </BrowserRouter>
      </main>
    );
  }
}

export interface IAppProps {}

export interface IAppState {
  name: string;
}

export default App;
