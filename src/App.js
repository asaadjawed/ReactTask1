import React from 'react';
import FetchData from './component/LandingPage';
import {Header, List} from './component/header';
import './App.css';



class App extends React.Component {
  render(){
    return(

      <div>
        < Header />
        <List />

        <FetchData />
      </div>
      
    )
  }
}

export default App;
