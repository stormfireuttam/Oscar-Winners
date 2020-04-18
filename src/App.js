import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Navbar from './Component/Navbar';
import Home from './Component/Home';
import ActorContainer from './Component/ActorContainer';
import ActressContainer from './Component/ActressContainer';
import Films from './Component/Films';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar title="Oscars 2019"/>
        {/* <Route to ="/" component={Home} /> */}
        {/* <Home title="Oscars Winners"/> */}
        <Route exact path ="/" render = {() => <Home title="Oscar Winners" />} />
        <Route path ="/actors" component={ActorContainer} />
        <Route path ="/actress" component={ActressContainer} />
        <Route path ="/films" component={Films} />
      </div>
    </BrowserRouter>
  );
}

export default App;
