import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Nav from './navbar.jsx';
class App extends React.Component
{

    constructor(props)
    {
      super(props);
    }
    render()
    {
      return (<Nav/>);
    }

}

export default App;
