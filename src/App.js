import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import NameList from './components/NameList';
import Person from './components/Person';
import StyleSheet from './components/Stylesheet'
import Inline from './components/Inline';
import './appStyles.css'
import styles from './appStyles.module.css'

function App() {
  return (
    <div className="App">
      <h1 className='error'>Error</h1>
      <h1 className={styles.success}>Success</h1>
      <Inline/>
      {/* <StyleSheet primary={true}/> */}
      {/* <NameList/> */}
      {/* <Greet></Greet> */}
    </div>
  );
}

export default App;
