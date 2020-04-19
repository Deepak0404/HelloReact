import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponents';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
// import { ReactComponent } from '*.svg';

class App extends Component{
  render(){
    return (
      <div className="App">
        <NameList/>
        {/* <UserGreeting/> */}
        {/* <ParentComponent/> */}
        {/* <EventBind/> */}
        {/* <ClassClick/> */}
        {/* <FunctionClick/> */}
        {/* <Counter/> */}
        {/* <Message/> */}
        {/* <Greet name="Deepak" heroName="Superman">
          <p>This is children of the parent.</p>
        </Greet>
        <Greet name="Vinita" heroName="Wonder Woman">
          <button>Action</button>
        </Greet>
        <Greet name="Vikas" heroName="Batman"/>
        <Welcome name="Deepak" heroName="Superman"/>
        <Welcome name="Vinita" heroName="Wonder Woman"/>
        <Welcome name="Vikas" heroName="Batman"/> */}
      </div>
    );
  }
}

export default App;